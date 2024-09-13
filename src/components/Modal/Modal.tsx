"use client";
import { useEffect, useRef, useState } from "react";
import { createContainer, Portal } from "@components/Portal";

import { MODAL_CONTAINER_ID } from "./constants";
import { ModalProps } from "./types";

import styles from "./modal.module.scss";

export const Modal = ({ onClose, children }: ModalProps) => {
  const [isMounted, setMounted] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };

    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("click", handleWrapperClick);
    window.addEventListener("keydown", handleEscapePress);

    return () => {
      window.removeEventListener("click", handleWrapperClick);
      window.removeEventListener("keydown", handleEscapePress);
    };
  }, [onClose]);

  if (!isMounted) return null;
  return (
    <Portal id={MODAL_CONTAINER_ID}>
      <div ref={rootRef} className={styles.background}>
        <div className={styles.modal}>{children}</div>
      </div>
    </Portal>
  );
};
