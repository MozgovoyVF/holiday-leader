"use client";

import React, { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";
import styles from "./index.module.scss";
import { SwiperSlider } from "./SwiperSlider";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { triggerBounce } from "./triggerBounce";
import { VscAccount } from "react-icons/vsc";
import { FaPhone, FaPhoneAlt, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { BsFillSendCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { VARIANTS_FADE } from "@/constants/variants";
import InputMask from "@mona-health/react-input-mask";
import { useSendEmail } from "@/hooks/useSendEmail";
import { convertToDate } from "@/utils/convertToDate";

interface IDateForm {
  month: string;
  day: string;
  phone: string;
  name: string;
  communication: "Телефон" | "WhatsApp" | "Telegram";
}

interface IDate {
  closeFn: () => void;
}

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export function DateForm({ closeFn }: IDate) {
  const [step, setStep] = useState(1);
  const { mutateAsync, isPending } = useSendEmail();

  const { register, handleSubmit, getValues, control, setValue } = useForm<IDateForm>({
    mode: "onSubmit",
    defaultValues: {
      month: "",
      day: "",
      phone: "",
      name: "",
      communication: "WhatsApp",
    },
  });

  const onSubmit: SubmitHandler<IDateForm> = async ({ name, phone, day, month, communication }) => {
    console.log({ name, phone, day, month, communication });

    if (!name || !phone) {
      if (!name) triggerBounce("name");
      if (!phone) triggerBounce("phone");
      return;
    }

    if (name.length < 2 || phone.length < 18) {
      if (name.length < 2) triggerBounce("name");
      if (phone.length < 18) triggerBounce("phone");
      return;
    }

    const date = convertToDate({ day, month });
    mutateAsync({ name, phone, type: communication, date });
    closeFn();
  };

  const handleNextStep = () => {
    const monthValue = getValues("month");
    const dayValue = getValues("day");

    if (!monthValue || !dayValue) {
      if (!monthValue) triggerBounce("month");
      if (!dayValue) triggerBounce("day");
      return;
    }

    setStep(2);
  };

  const handleNextStepNoneDate = () => {
    setStep(2);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {step === 1 ? (
          <div className={styles.step}>
            {/* <span className={styles.label}>Выберите месяц :</span> */}
            <Controller
              control={control}
              name="month"
              render={({ field: { onChange, value } }) => (
                <SwiperSlider
                  id="slider-month"
                  selectedValue={value}
                  data={months}
                  sliderPerView={2}
                  onChange={(value) => onChange(value)}
                />
              )}
            />
            {/* <span className={styles.label}>Выберите число :</span> */}
            <Controller
              control={control}
              name="day"
              render={({ field: { onChange, value } }) => (
                <SwiperSlider
                  id="slider-day"
                  selectedValue={value}
                  data={Array.from({ length: 31 }, (_, i) => String(i + 1))}
                  sliderPerView={3}
                  onChange={(value) => onChange(value)}
                />
              )}
            />
            <button onClick={() => handleNextStepNoneDate()} type="button" className={styles.nonedate}>
              Не определились с датой
            </button>
            <button type="button" onClick={() => handleNextStep()} className={styles.nextStep}>
              Следующий шаг
            </button>
          </div>
        ) : (
          <motion.div
            variants={VARIANTS_FADE}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "easi-in-out", duration: 0.8 }}
            className={styles.step}
          >
            <div className={styles.inputs}>
              <span className={styles.inputLabel}>Заполните форму и я сообщу лично свободен ли я в указанную дату</span>
              <label id="slider-name" className={styles.inputBlock} htmlFor="name">
                <VscAccount />
                <input
                  autoComplete="off"
                  id="name"
                  className={styles.input}
                  {...register("name")}
                  placeholder="ВАШЕ ИМЯ"
                />
              </label>
              <label id="slider-phone" className={styles.inputBlock} htmlFor="phone">
                <FaPhoneAlt />
                <InputMask
                  mask="+7 (999) 999-99-99"
                  autoComplete="off"
                  placeholder="ТЕЛЕФОН"
                  className={styles.input}
                  {...register("phone")}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue("phone", e.target.value)}
                />
              </label>
              <span className={styles.inputLabel}>Предпочтительный способ связи :</span>
              <div className={styles.communication}>
                <label className={styles.radio}>
                  <input {...register("communication")} type="radio" value="WhatsApp" />
                  <FaWhatsapp className={styles.whatsapp} />
                </label>
                <label className={styles.radio}>
                  <input {...register("communication")} type="radio" value="Telegram" />
                  <FaTelegram className={styles.telegram} />
                </label>
                <label className={styles.radio}>
                  <input {...register("communication")} type="radio" value="Телефон" />
                  <FaPhone className={styles.phone} />
                </label>
              </div>
              <button disabled={isPending} type="submit" className={styles.button}>
                <BsFillSendCheckFill />
                Проверить дату
              </button>
              <div className={styles.agree}>Нажимая на кнопку вы соглашаетесь на обработку персональных данных</div>
            </div>
          </motion.div>
        )}
      </form>
    </div>
  );
}
