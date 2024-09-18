"use client";

import Image from "next/image";

import { testimonials } from "@/constants/testimonials.constant";
import { useSlider } from "@hooks/useSlider/use-slider";
import typography from "@styles/typography.module.scss";

import styles from "./testimonials-banner.module.scss";

export const TestimonialsBanner = () => {
  const { currentIndex, nextSlide, prevSlide } = useSlider(testimonials);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={typography.cap}>testimonials</p>
        <h2 className={typography.Heading2}>What people say about our blog</h2>
        <p className={typography.body1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div className={styles.carousel}>
        <div className={styles.slides} data-index={currentIndex}>
          {Object.keys(testimonials).map((key) => {
            const { text, name, location, avatar } = testimonials[key];
            return (
              <div key={key} className={styles.slide}>
                <p className={typography.Heading4}>{text}</p>

                <div className={styles.userInfo}>
                  <div className={styles.avatarWrapper}>
                    <Image
                      src={avatar}
                      alt="alt"
                      className={styles.avatar}
                      fill
                    />
                  </div>
                  <div>
                    <h3 className={typography.Heading4}>{name}</h3>
                    <p className={`${typography.body1} ${styles.location}`}>
                      {location}
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
