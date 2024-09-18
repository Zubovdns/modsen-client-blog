"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { testimonials } from "@/constants/testimonials.constant";
import { useSlider } from "@hooks/useSlider/use-slider";
import typography from "@styles/typography.module.scss";

import styles from "./testimonials-banner.module.scss";

export const TestimonialsBanner = () => {
  const { currentIndex, nextSlide, prevSlide } = useSlider(testimonials);
  const t = useTranslations("Testimonials");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={typography.cap}>{t("header")}</p>
        <h2 className={typography.Heading2}>{t("title")}</h2>
        <p className={typography.body1}>{t("description")}</p>
      </div>
      <div className={styles.carousel}>
        <div className={styles.slides} data-index={currentIndex}>
          {Object.keys(testimonials).map((key) => {
            const { avatar } = testimonials[key];
            return (
              <div key={key} className={styles.slide}>
                <p className={typography.Heading4}>{t(`${key}.text`)}</p>

                <div className={styles.userInfo}>
                  <div className={styles.avatarWrapper}>
                    <Image
                      src={avatar}
                      alt={t(`${key}.avatar.alt`)}
                      className={styles.avatar}
                      fill
                    />
                  </div>
                  <div>
                    <h3 className={typography.Heading4}>{t(`${key}.name`)}</h3>
                    <p className={`${typography.body1} ${styles.location}`}>
                      {t(`${key}.location`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.controls}>
          <button
            className={`${styles.controlBtn} ${styles.prevBtn}`}
            onClick={prevSlide}
          >
            &#8592;
          </button>
          <button
            className={`${styles.nextBtn} ${styles.controlBtn}`}
            onClick={nextSlide}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};
