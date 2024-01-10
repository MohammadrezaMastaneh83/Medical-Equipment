import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
export default function Header() {
  return (
    <div className={styles.header_pad}>
    <div className={styles.header_all}>
      <div className={styles.header_back}>
        <div className={styles.header_search}>
          <button className={styles.header_btn}>
            <Image
              alt=""
              width={24}
              height={24}
              className={styles.header_svg}
              src="/person_FILL0_wght400_GRAD0_opsz48 (2) 1.svg"
            />
            حساب کاربری
          </button>
          <button className={styles.header_btntamas}>
            <Image alt="" src="/tamas110.svg" width={24} height={24} />
          </button>
        </div>

        <div className={styles.header_seicon}>
          <Image
            alt=""
            src="/Search.svg"
            width={14}
            height={14}
            className={styles.header_serchicon}
            />
        </div>
        <div className={styles.header_firstdiv}>
          <input type="text" className={styles.header_input101} />
          <Image
            width={113}
            alt=""
            height={80}
            className={styles.header_logo}
            src="/LOGO 1.svg"
            />
        </div>
      </div>
        
    </div>
    </div>
  );
}
