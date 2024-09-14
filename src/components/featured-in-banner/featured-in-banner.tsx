import Image from "next/image";

import Logo1 from "@public/icons/partners/logo-1.svg";
import Logo2 from "@public/icons/partners/logo-2.svg";
import Logo3 from "@public/icons/partners/logo-3.svg";
import Logo4 from "@public/icons/partners/logo-4.svg";
import Logo5 from "@public/icons/partners/logo-5.svg";

import { TEXT_BOTTOM, TEXT_TOP } from "./constants";
import styles from "./featured-in-banner.module.scss";

export const FeaturedInBanner = () => (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <p className={styles.textTop}>{TEXT_TOP}</p>
      <h5 className={styles.textBottom}>{TEXT_BOTTOM}</h5>
    </div>
    <Image alt="Logo 1" src={Logo1} />
    <Image alt="Logo 2" src={Logo2} />
    <Image alt="Logo 3" src={Logo3} />
    <Image alt="Logo 4" src={Logo4} />
    <Image alt="Logo 5" src={Logo5} />
  </div>
);
