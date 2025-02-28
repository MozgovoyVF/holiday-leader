"use client";

import * as React from "react";
import styles from "./index.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

interface IModal {
  closeFn: () => void;
  isShowModal: boolean;
}

export const MenuModal = ({ closeFn, isShowModal }: IModal) => {
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
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={styles.modal}
        >
          <div className={styles.window}>
            <div className={styles.content}>
              <ul className={styles.list}>
                <button onClick={() => closeFn()}></button>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MenuModal.displayName = "menuModal";
