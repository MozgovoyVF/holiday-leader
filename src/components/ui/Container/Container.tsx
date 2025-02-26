import React, { PropsWithChildren } from "react";
import styles from "./index.module.scss";

export function Container({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>;
}
