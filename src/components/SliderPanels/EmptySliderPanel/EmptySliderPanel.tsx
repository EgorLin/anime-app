import { ReactElement, ReactNode, useRef, useState } from "react";
import { RequestStatuses } from "../../../const/requestStatuses";
import EmptySliderPanelItem from "./EmptySliderPanelItem";
import styles from "./EmptySliderPanel.module.scss";
import { useObserver } from "../../../hooks/useObserver";

interface IProps {
  title?: string;
  status?: string;
  error?: string;
  elements: ReactNode[];
}

interface IIndex {
  current: string;
  max: number;
}

function EmptySliderPanel({
  title,
  elements,
  status = RequestStatuses.SUCCEEDED,
  error = "Slider panel error",
}: IProps): ReactElement {
  const idBase = (title ? title : "empty-slider") + "-";
  const itemsRef = useRef<Map<string, HTMLDivElement> | null>(null);
  const observedStates = useRef<Map<string, boolean>>(new Map());
  const observer = useRef<IntersectionObserver>();

  const [indexes, setIndexes] = useState<IIndex>({
    current: "",
    max: 0,
  });

  const [buttonsVisibility, setButtonsVisibility] = useState({
    left: false,
    right: false,
  });

  const target = useObserver(() => {
    if (status === RequestStatuses.SUCCEEDED) {
      initElements();
    }
  }, status);
  const [isIntersected, setIsIntersected] = useState(false);

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  const divElements = elements.map((element, index) => (
    <div
      key={index}
      ref={(node) => {
        const map = getMap();
        if (node) {
          map.set(idBase + index, node);
        } else {
          map.delete(idBase + index);
        }
      }}
      id={idBase + index}
      className={styles.card}
    >
      {element}
    </div>
  ));

  function initElements(): void {
    const options = {
      threshold: 1,
    };

    let intersectionCallback: IntersectionObserverCallback = (entries) => {
      if (observedStates.current?.size === 0) {
        for (let en of entries) {
          observedStates.current.set(en.target.id, en.isIntersecting);
        }

        if (observedStates.current.size !== 0) {
          setIsIntersected(true);

          setIndexes((i) => ({
            current: entries[0].target.id,
            max: observedStates.current?.size!,
          }));

          const isHiddenEl = Array.from(observedStates.current).some((el) => {
            return !el[1];
          });

          if (isHiddenEl) {
            setButtonsVisibility((bv) => ({
              ...bv,
              right: true,
            }));
          }
        }
      } else {
        const index = entries[0].target.id;
        observedStates.current?.set(index, entries[0].isIntersecting);
      }
    };

    observer.current = new IntersectionObserver(intersectionCallback, options);

    const map = getMap();

    map.forEach((value) => observer.current!.observe(value));
  }

  function slideForward() {
    let currentSnap = indexes.current;
    let nextSnap = idBase + 0;
    observedStates.current?.forEach((isVisible, id) => {
      const isGreaterCurrent =
        +id.match(/\d+/)![0] > +currentSnap.match(/\d+/)![0];
      const notFoundedNextElement = nextSnap === idBase + 0;

      if (!isVisible && isGreaterCurrent && notFoundedNextElement) {
        nextSnap = id;
      }
    });

    const isNewValueLast =
      nextSnap === idBase + (observedStates.current?.size! - 1);

    if (isNewValueLast) {
      setButtonsVisibility((bv) => ({
        ...bv,
        right: false,
      }));
    } else {
      setButtonsVisibility((bv) => ({
        ...bv,
        left: true,
      }));
    }

    const map = getMap();
    const node = map.get(nextSnap)!;

    node?.scrollIntoView({
      block: "nearest",
      inline: "end",
      behavior: "smooth",
    });

    setIndexes((i) => ({
      ...i,
      current: nextSnap,
    }));
  }

  function slideBackward() {
    let defaultNum = String(observedStates.current.size + 1);
    let currentSnap = indexes.current;
    let nextSnap = defaultNum;

    observedStates.current.forEach((isVisible, id) => {
      const isLowerCurrent =
        +id.match(/\d+/)![0] < +currentSnap.match(/\d+/)![0];

      if (!isVisible && isLowerCurrent) {
        nextSnap = id;
      }
    });

    const isNewValueFirst = nextSnap === idBase + 0;

    if (isNewValueFirst) {
      setButtonsVisibility((bv) => ({
        ...bv,
        left: false,
      }));
    } else {
      setButtonsVisibility((bv) => ({
        ...bv,
        right: true,
      }));
    }

    const map = getMap();
    const node = map.get(nextSnap)!;
    node?.scrollIntoView({
      block: "nearest",
      inline: "start",
      behavior: "smooth",
    });

    setIndexes((i) => ({
      ...i,
      current: nextSnap,
    }));
  }

  return (
    <EmptySliderPanelItem
      title={title}
      divElements={divElements}
      slideForward={slideForward}
      slideBackward={slideBackward}
      buttonsVisibility={buttonsVisibility}
      status={status}
      error={error}
      target={target}
      isIntersected={isIntersected}
    />
  );
}

export default EmptySliderPanel;
