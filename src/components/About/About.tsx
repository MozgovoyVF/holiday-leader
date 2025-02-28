"use client";

import React from "react";
import styles from "./index.module.scss";
import { Section } from "../ui/Section/Section";
import Image from "next/image";
import { ImQuotesRight } from "react-icons/im";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";
import { motion } from "framer-motion";
import { VARIANTS_FADE } from "@/constants/variants";

export function About() {
  return (
    <Section id="about">
      <Image className={styles.image} src={"/images/about/about.jpeg"} alt="About" quality={100} layout="fill" />
      <div className={styles.content}>
        <motion.h2
          variants={VARIANTS_FADE}
          initial="hidden"
          exit="exit"
          viewport={{ once: true }}
          whileInView="enter"
          transition={{ type: "easi-in-out", duration: 0.8 }}
          className={styles.title}
        >
          НЕМНОГО РАССКАЖУ О СЕБЕ
        </motion.h2>

        <motion.div
          variants={VARIANTS_FADE}
          initial="hidden"
          exit="exit"
          viewport={{ once: true }}
          whileInView="enter"
          transition={{ type: "easi-in-out", duration: 0.8, delay: 0.3 }}
          className={styles.slogan}
        >
          <ImQuotesRight />
          <p>
            Я осознаю <b>важность</b> мероприятия с самого начала. Если вам нужен <b>надёжный</b> и<b> обаятельный</b>{" "}
            ведущий, я готов оправдать ваши ожидания.
          </p>
        </motion.div>

        <motion.div
          variants={VARIANTS_FADE}
          initial="hidden"
          exit="exit"
          viewport={{ once: true }}
          whileInView="enter"
          transition={{ type: "easi-in-out", duration: 0.8, delay: 0.7 }}
          className={styles.info}
        >
          <p className={styles.text}>
            <VscDebugBreakpointDataUnverified />
            <span>
              Топ 10 ведущих <b>СТРАНЫ</b> по мнению Тани
            </span>
          </p>
          <p className={styles.text}>
            <VscDebugBreakpointDataUnverified />
            <span>
              Ведущий в <b>третьем</b> поколении (нет)
            </span>
          </p>
          <p className={styles.text}>
            <VscDebugBreakpointDataUnverified />
            <span>
              Работаю в сфере с <b>2016</b> года
            </span>
          </p>
          <p className={styles.text}>
            <VscDebugBreakpointDataUnverified />
            <span>
              Официальный ведущий Мегацентров <b>«Красная Площадь»</b>
            </span>
          </p>
          <p className={styles.text}>
            <VscDebugBreakpointDataUnverified />
            <span>
              Дипломированный <b>военный</b>
            </span>
          </p>
          <p className={styles.text}>
            <VscDebugBreakpointDataUnverified />
            <span>
              Лучший <b>исполнитель</b> кавер-хитов
            </span>
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
