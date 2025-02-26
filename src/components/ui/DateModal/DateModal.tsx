"use client";

import * as React from "react";
import styles from "./index.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { DateForm } from "./DateForm/DateForm";

interface IDateModal {
  closeFn: () => void;
  isShowModal: boolean;
}

export const DateModal = ({ closeFn, isShowModal }: IDateModal) => {
  useEffect(() => {
    if (isShowModal) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShowModal]);

  return (
    <AnimatePresence>
      {isShowModal && (
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          className={styles.modal}
        >
          <div className={styles.window}>
            <div className={styles.content}>
              <RxCross1 className={styles.cross} onClick={() => closeFn()} />
              <div className={styles.block}>
                <h2 className={styles.subtitle}>ПРОВЕРЬТЕ ВАШУ ДАТУ :</h2>
                <DateForm closeFn={closeFn} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

DateModal.displayName = "dateModal";
