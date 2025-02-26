"use client";

import React, { PropsWithChildren } from "react";
import styles from "./index.module.scss";
import { Container } from "../Container/Container";

export function Section({ children }: PropsWithChildren) {
  return (
    <section className={styles.section}>
      <Container>{children}</Container>
    </section>
  );
}
