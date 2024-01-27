
import styles from "./self-expression.module.css";
import Image from "next/image";
export default function Self_Expression() {
  return (
    <div className={styles.Expression_all}>
      <div className={styles.Expression_back}>
        <div className={styles.Expression_right}>
          <p className={styles.Expression_p}>ثبت خود اظهاری</p>
          <div className={styles.Expression_divp2}>
          <p className={styles.Expression_p2}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله{" "}
          </p>
          </div>
          <div className={styles.Expression_div_btn}>
          <button className={styles.Expression_btn} >
            <Image alt="" className={styles.Expression_btn_pic} src="/online1.svg" width={24} height={24}/>
            ثبت خود اظهاری
          </button>
          </div>
        </div>
        <div className={styles.Expression_div_pic}>
          <Image alt="" src="/sabtkhodezhari.svg" width={233} height={233} className={styles.Expression_pic}/>
        </div>
      </div>
    </div>
  );
}
