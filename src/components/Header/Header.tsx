"use client";

import React, { useState } from "react";
import styles from "./index.module.scss";
import { Container } from "../ui/Container/Container";
import Hamburger from "hamburger-react";
import Image from "next/image";
import { FaInstagram, FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { CONTACT } from "@/constants/contacts";
import ClientOnlyPortal from "../ui/ClientOnlyPortal/ClientOnlyPortal";
import { MenuModal } from "../ui/MenuModal/MenuModal";

export function Header() {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Image src={"/images/header/logo.jpg"} height={50} width={120} alt="logo" />
          <div className={styles.icons}>
            <a target="_blank" href={`https://wa.me/${CONTACT.whatsapp}`}>
              <FaWhatsapp className={styles.whatsapp} />
            </a>
            <a target="_blank" href={`https://t.me/${CONTACT.telegram}`}>
              <FaTelegram className={styles.telegram} />
            </a>
            <a href={`tel:${CONTACT.phone}`}>
              <FaPhone className={styles.phone} />
            </a>
            <a target="_blank" href={`${CONTACT.instagram}`}>
              <FaInstagram className={styles.instagram} />
            </a>
          </div>
          <Hamburger toggled={isShowModal} toggle={() => setIsShowModal((prev) => !prev)} size={40} color="gold" />
        </div>
        <ClientOnlyPortal selector={"#modal"}>
          <MenuModal closeFn={() => setIsShowModal(false)} isShowModal={isShowModal} />
        </ClientOnlyPortal>
      </Container>
    </header>
  );
}
