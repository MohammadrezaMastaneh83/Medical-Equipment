import styles from "./bestSell.module.css";

export default function BestSell() {
  return (
    <section>
      <div className={styles.bestSell_all}>
        <hr className={styles.bestSell_hr} />
        <div className={styles.bestSell_lozy_wihte}></div>
        <div className={styles.bestSell_lozy_green}></div>
        <div className={styles.bestSell_div_h1}>
          <div className={styles.bestSell_h1}>
            <p className={styles.bestSell_p3}>ما</p>
            به شما بهترین مشاوره خرید تجهیزات پزشکی را ارائه خواهیم کرد
          </div>
          <div className={styles.bestSell_div_h2}>
          <p className={styles.bestSell_h2}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جا
          </p>
          </div>
        <button className={styles.bestSell_btn}>
        <img src="/moshavereh2.svg" width={24} height={24} alt="" />
        دریافت مشاوره
        </button>
        </div>
        <div className={styles.bestSell_div_hotpic}>
            <img src="/hotsell.svg" alt="" className={styles.bestSell_hotpic} /> 
            </div>
      </div>
    </section>
  );
}
