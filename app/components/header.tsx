import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header_all}>
      <div className={styles.header_back}>
        <div className={styles.header_search}>
            <button className={styles.header_btn}>تماس با ما
            <img className={styles.header_svg} src="/tamas.svg"></img>
            </button>
            <div className={styles.header_seicon}>
                <img src="/Search.svg" className={styles.header_serchicon} />
            </div>
        </div>
        <ul className={styles.header_ul}>
            <li className={styles.header_li} >گروه های تخصصی تجهیزات پزشکی</li>
            <li className={styles.header_li}>ارتباط با ما</li>
            <li className={styles.header_li}>درباره ما</li>
            <li className={styles.header_li}>اخبار</li>
            <li className={styles.header_li}>خدمات</li>
            <li className={styles.header_li}>خانه</li>
        </ul>
        <img
          className={styles.header_logo}
          src="/LOGO 1.svg"
        ></img>
      </div>
    </div>
  );
}
