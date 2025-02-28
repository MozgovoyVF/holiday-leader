"use client";

import React, { ReactNode } from "react";
import styles from "./index.module.scss";
import { Container } from "../Container/Container";

interface ISection {
  id: string;
  children: ReactNode;
}

export function Section({ id, children }: ISection) {
  return (
    <section id={id} className={styles.section}>
      <Container>{children}</Container>
    </section>
  );
}
