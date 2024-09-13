"use client";

import { Button } from "@components/Button";
import { Modal } from "@components/Modal";
import { NavLink } from "@components/NavLink";
import { useModalOpen } from "@hooks/useModalOpen";
import { Video } from "@public/video";

import styles from "./header.module.scss";

export const Header = () => {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModalOpen();

  return (
    <header className={styles.header}>
      <h4 className={styles.title}>Modsen Client Blog</h4>
      <nav className={styles.navbar}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/about-us">About Us</NavLink>
        <NavLink href="/contact-us">Contact us</NavLink>
      </nav>
      <Button className={styles.button} onClick={handleModalOpen}>
        Video about us
      </Button>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <Video />
        </Modal>
      )}
    </header>
  );
};
