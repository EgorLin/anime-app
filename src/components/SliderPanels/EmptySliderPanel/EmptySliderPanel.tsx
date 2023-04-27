import { ReactElement, ReactNode, useEffect, useState } from "react";
import { RequestStatuses } from "../../../const/requestStatuses";
import EmptySliderPanelItem from "./EmptySliderPanelItem";
import styles from "./EmptySliderPanel.module.scss";
import { useWindowSize } from "../../../hooks/useWidnowSize";
import { breakpoints } from "../../../const/breakpoints";

interface IProps {
  title?: string;
  status?: string;
  error?: string;
  elements: ReactNode[];
}

interface IIndex {
  current: number;
  max: number;
  delta: number;
}

function EmptySliderPanel({
  title,
  elements,
  status = RequestStatuses.SUCCEEDED,
  error = "Slider panel error",
}: IProps): ReactElement {
  const idRoot = (title ? title : "empty-slider") + "-";
  const divElements = elements
    ? elements.map((element, index) => (
        <div key={index} id={idRoot + index} className={styles.card}>
          {element}
        </div>
      ))
    : [];
  const [indexes, setIndexes] = useState<IIndex>({
    current: 0,
    max: 0,
    delta: 0,
  });
  const [buttonsVisibility, setButtonsVisibility] = useState({
    left: false,
    right: false,
  });
  const isWideScreen = useWindowSize(breakpoints.mobile);

  useEffect(() => {
    let delta = 2;
    if (isWideScreen) {
      delta = 3;
    }
    setIndexes((i) => ({
      ...i,
      delta,
    }));
  }, [isWideScreen]);

  useEffect(() => {
    if (status === RequestStatuses.SUCCEEDED) {
      if (divElements.length !== 0) {
        setIndexes((i) => ({
          ...i,
          max: divElements.length,
        }));
        setButtonsVisibility((bv) => ({
          ...bv,
          right: true,
        }));
      }
    }
  }, [status]);

  function slideForward() {
    const isNewValueLast = indexes.current + indexes.delta >= indexes.max;
    let newIndex = 0;

    if (isNewValueLast) {
      newIndex = indexes.max;
      setButtonsVisibility((bv) => ({
        ...bv,
        right: false,
      }));
    } else {
      newIndex = indexes.current + indexes.delta;
      setButtonsVisibility((bv) => ({
        ...bv,
        left: true,
      }));
    }

    const target = document.getElementById(idRoot + newIndex);

    target?.scrollIntoView({
      block: "end",
      inline: "end",
      behavior: "smooth",
    });

    setIndexes((i) => ({
      ...i,
      current: newIndex,
    }));
  }

  function slideBackward() {
    const isNewValueFirst = indexes.current - indexes.delta <= 0;
    let newIndex = 0;

    if (isNewValueFirst) {
      newIndex = 0;
      setButtonsVisibility((bv) => ({
        ...bv,
        left: false,
      }));
    } else {
      newIndex = indexes.current - indexes.delta;
      setButtonsVisibility((bv) => ({
        ...bv,
        right: true,
      }));
    }

    const target = document.getElementById(idRoot + newIndex);
    target?.scrollIntoView({
      block: "end",
      inline: "start",
      behavior: "smooth",
    });

    setIndexes((i) => ({
      ...i,
      current: newIndex,
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
    />
  );
}

export default EmptySliderPanel;
