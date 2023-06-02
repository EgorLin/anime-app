import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { RequestStatuses } from "../../../const/requestStatuses";
import EmptySliderPanelItem from "./EmptySliderPanelItem";
import styles from "./EmptySliderPanel.module.scss";
import { useWindowSize } from "../../../hooks/useWidnowSize";
import { breakpoints } from "../../../const/breakpoints";
import { useObserver } from "../../../hooks/useObserver";

interface IProps {
  title?: string;
  status?: string;
  error?: string;
  elements: ReactNode[];
}

interface IIndex {
  current: number;
  max: number;
}

function EmptySliderPanel({
  title,
  elements,
  status = RequestStatuses.SUCCEEDED,
  error = "Slider panel error",
}: IProps): ReactElement {
  const idRoot = (title ? title : "empty-slider") + "-";
  const observEls = useRef(new Array());
  const divElements = useRef(new Array());
  const [isRendered, setIsRendered] = useState(false);
  const [indexes, setIndexes] = useState<IIndex>({
    current: 0,
    max: 0,
  });
  const [buttonsVisibility, setButtonsVisibility] = useState({
    left: false,
    right: false,
  });
  const isWideScreen = useWindowSize(breakpoints.mobile);
  const observedStates = useRef<Array<Boolean>>([]);

  const observer = useRef<IntersectionObserver>();
  const [isIntersected, setIsIntersected] = useState(false);
  const target = useObserver(() => {
    if (divElements.current.length !== 0) {
      initElements();
    }

    // setTimeout(() => {

    console.log(
      "first target",
      divElements.current,
      observedStates.current.length
    );
    if (observedStates.current.length !== 0) {
      setIsIntersected(true);

      setIndexes((i) => ({
        ...i,
        max: divElements.current.length,
      }));

      const isHiddenEl = observedStates.current.some((el) => {
        return !el;
      });

      console.log(
        "first target in condition",
        observedStates.current,
        isHiddenEl
      );
      if (isHiddenEl) {
        setButtonsVisibility((bv) => ({
          ...bv,
          right: true,
        }));
      }
    }
    // }, 1000);
  });

  useEffect(() => {
    if (status === RequestStatuses.SUCCEEDED) {
      divElements.current = elements.map((element, index) => (
        <div
          key={index}
          ref={(el) => observEls.current.push(el)}
          id={idRoot + index}
          className={styles.card}
        >
          {element}
        </div>
      ));
      setIsRendered(true);
    }
  }, [status]);

  function initElements(): void {
    const options = {
      threshold: 1,
    };

    console.log("initElements");
    let intersectionCallback: IntersectionObserverCallback = (entries) => {
      console.log("initElements callback");
      if (observedStates.current.length === 0) {
        console.log("initElements callback in stuff");
        const newArr: Array<Boolean> = [];
        for (let en of entries) {
          newArr.push(en.isIntersecting);
        }
        observedStates.current = newArr;
      } else {
        const index = entries[0].target.id.match(/\d+/)![0];
        observedStates.current[index] = entries[0].isIntersecting;
      }
    };

    observer.current = new IntersectionObserver(intersectionCallback, options);

    for (let el of observEls.current) {
      observer.current.observe(el);
    }

    console.log("observedEls", observEls);
  }

  function slideForward() {
    let currentSnap = indexes.current;
    let nextSnap = 0;
    observedStates.current.forEach((el, index) => {
      if (!el && index > currentSnap && nextSnap === 0) {
        nextSnap = index;
      }
    });

    const isNewValueLast = nextSnap === observedStates.current.length - 1;
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
    console.log("snap to", currentSnap, nextSnap);

    const target = document.getElementById(idRoot + nextSnap);

    target?.scrollIntoView({
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
    let defaultNum = observedStates.current.length + 1;
    let currentSnap = indexes.current;
    let nextSnap = defaultNum;
    // console.log("aaaaaa", observedStates);
    observedStates.current.forEach((el, index) => {
      // console.log("from next loop", el);
      if (!el && index < currentSnap) {
        nextSnap = index;
      }
    });

    const isNewValueFirst = nextSnap === 0;
    // console.log(nextSnap, observedStates.current.length - 1);
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

    const target = document.getElementById(idRoot + nextSnap);

    target?.scrollIntoView({
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
      divElements={divElements.current}
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
