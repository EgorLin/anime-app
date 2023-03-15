import { ReactElement } from "react";
import styles from "./EpisodeBox.module.scss";

interface IProps {
  className?: string;
  children?: any | undefined;
}

function EpisodeBoxItem({ className, children }: IProps): ReactElement {
  return (
    <span className={[styles.episode, className].join(" ")}>{children}</span>
  );
}

export default EpisodeBoxItem;
