import { url } from "inspector";
import styles from "./about khorshid.module.css";
import Image from "next/image";
export default function AboutKhorshid() {
  return (
    <div className={styles.khorshid_back}>
      <div className={styles.khorshid_all}>
        <div className={styles.khorshid_divp}>
          <p className={styles.khorshid_p1}> درباره شرکت</p>
          <p className={styles.khorshid_p}>خورشید هشت</p>
        </div>
        <div className={styles.khorshid_divp2}>
          <p className={styles.khorshid_p2}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جا
          </p>
        </div>
        <div className={styles.khorshid_divp3}>
          <p className={styles.khorshid_p3}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،
          </p>
        </div>
        <div className={styles.khorshid_divp4}>
          <p className={styles.khorshid_p4}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،
          </p>
          <button className={styles.khorshid_btn}>
            مشاهده بیشتر
            <img
              className={styles.khorshid_arrow}
              src="/Arrow-Left3.svg"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className={styles.khorshid_div_pic}>
      <Image className={styles.khorshid_pic}
      src="/khorsdid.png"
      width={482}
      height={482}
      alt="Picture of the author"
    />
      </div>
    </div>
  );
}
