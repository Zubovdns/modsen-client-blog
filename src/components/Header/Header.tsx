"use client";

import { Video } from "@assets/video";
import { Button } from "@components/button/button";
import { Modal } from "@components/modal/modal";
import { NavLink } from "@components/nav-link/nav-link";
import { useModalOpen } from "@hooks/use-modal-open/use-modal-open";

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
