import Link from "next/link"
import style from "./header2.module.css"


export default function Header2(){
    return(
        <div className={style.header2_uldiv}>
        <div className={style.header2_box}>
          <Link href="/">
        <p className={style.header2_p}>صفحه اصلی</p>
        </Link>
        <span className={style.header_span}></span>
        <Link href="/listofMedicalEquipment">
        <p className={style.header2_p}>لیست تجهیزات پزشکی</p>
        </Link>
        <span className={style.header_span}></span>
        <p className={style.header2_p}>بازار تجهیزات پزشکی</p>
        <span className={style.header_span}></span>
        <p className={style.header2_p}>کارشناس خرید تجهیزات پزشکی</p>
        <span className={style.header_span}></span>
        <p className={style.header2_p}>همایش ها</p>
        <span className={style.header_span}></span>
        <p className={style.header2_p}>اخبار</p>
        <span className={style.header_span} ></span>
        <Link href="/gallery">
        <p className={style.header2_p}>گالری تصاویر</p>
        </Link>
        <span className={style.header_span}></span>
        <p className={style.header2_p}>درباره ما</p>
        <span className={style.header_span}></span>
        <Link href="/Contactus">
        <p className={style.header2_p}>ارتباط با ما</p>
        </Link>
        <span className={style.header_span}></span>
        </div>
      </div>
    )
}