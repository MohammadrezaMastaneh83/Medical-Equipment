import styles from "./imagHome.module.css";

export default function HomeImage() {
  return (
    <section>
      <div
        className={styles.home_back}
        style={{
          backgroundImage: "url(./homeimag.png)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.h1}>
          <p className={styles.p1}>کانون خرید تجهیزات پزشکی</p>
          <p className={styles.p2}>خورشید هشت</p>
        </div>
        <div className={styles.div_p3}>
             <p className={styles.p3}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان<br /> گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و <br />برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی <br /> می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جا
        </p>
        </div>
        <div className={styles.homimag_btn}>
            <button className={styles.homimag_btn_mosh}>
            <img src="/moshaver.svg"  />
            دریافت مشاوره
            </button>
            <button className={styles.homimag_btn_about}>
                <img src="/abuot.svg" width="24px" height="24px" />
                درباره ما
            </button>
        </div>
      </div>
    </section>
  );
}
