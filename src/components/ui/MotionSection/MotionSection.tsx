"use client";

import React, { PropsWithChildren } from "react";
import styles from "./index.module.scss";
import { VARIANTS_LEFT } from "@/constants/variants";
import { motion } from "framer-motion";
import { Container } from "../Container/Container";

export function MotionSection({ children }: PropsWithChildren) {
  return (
    <motion.section
      variants={VARIANTS_LEFT}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "easi-in-out", duration: 0.3 }}
      className={styles.section}
    >
      <Container>{children}</Container>
    </motion.section>
  );
}
