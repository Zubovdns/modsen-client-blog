"use client";

import { useTranslations } from "next-intl";

import { Button } from "@components/button/button";
import { Modal } from "@components/modal/modal";
import { NavLink } from "@components/nav-link/nav-link";
import { useModalOpen } from "@hooks/use-modal-open/use-modal-open";
import { Video } from "@public/video";

import styles from "./header.module.scss";

export const Header = () => {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModalOpen();

  const t = useTranslations("Header");

  return (
    <header className={styles.header}>
      <h4 className={styles.title}>{t("title")}</h4>
      <nav className={styles.navbar}>
        <NavLink href={t("nav.home-link.href")}>
          {t("nav.home-link.title")}
        </NavLink>
        <NavLink href={t("nav.blog-link.href")}>
          {t("nav.blog-link.title")}
        </NavLink>
        <NavLink href={t("nav.about-us-link.href")}>
          {t("nav.about-us-link.title")}
        </NavLink>
        <NavLink href={t("nav.contact-us-link.href")}>
          {t("nav.contact-us-link.title")}
        </NavLink>
      </nav>
      <Button className={styles.button} onClick={handleModalOpen}>
        {t("video-about-us-button")}
      </Button>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <Video />
        </Modal>
      )}
    </header>
  );
};
