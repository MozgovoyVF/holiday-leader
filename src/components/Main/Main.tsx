"use client";

import React, { useState } from "react";
import styles from "./index.module.scss";
import { Section } from "../ui/Section/Section";
import { BsCalendar2DateFill } from "react-icons/bs";
import ClientOnlyPortal from "../ui/ClientOnlyPortal/ClientOnlyPortal";
import { DateModal } from "../ui/DateModal/DateModal";
import { motion } from "framer-motion";
import { VARIANTS_FADE } from "@/constants/variants";
import Image from "next/image";

export function Main() {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <Section id="main">
      <Image
        className={styles.image}
        quality={100}
        // placeholder="blur"
        src={"/images/main/main_1.JPG"}
        alt="Main"
        priority
        layout="fill"
        // width={200}
        // height={200}
      />
      <div className={styles.content}>
        <div className={styles.block}>
          <motion.h1
            variants={VARIANTS_FADE}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "easi-in-out", duration: 0.8 }}
            className={styles.title}
          >
            ВАСИЛИЙ ГОГУНСКИЙ
          </motion.h1>
          <motion.p
            variants={VARIANTS_FADE}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "easi-in-out", duration: 0.8, delay: 0.3 }}
            className={styles.text}
          >
            Занимаюсь проведением мероприятий более <b>5 лет</b>.
            <br />
            Это не просто работа… Это моя жизнь.
          </motion.p>
          <motion.button
            variants={VARIANTS_FADE}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "easi-in-out", duration: 0.8, delay: 0.6 }}
            onClick={() => setIsShowModal(true)}
            className={styles.button}
          >
            <BsCalendar2DateFill /> Проверить дату
          </motion.button>
        </div>
        <ClientOnlyPortal selector={"#modal"}>
          <DateModal closeFn={() => setIsShowModal(false)} isShowModal={isShowModal} />
        </ClientOnlyPortal>
      </div>
    </Section>
  );
}
