'use client'
import { useRouter } from "next/navigation";
import style from "./not-found.module.css";
import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  const router = useRouter()
  return (
    
    <div className={style.notfound_all}>
      <div className={style.notfound_move}>
      <Image src="/404.png" alt="" width={450} height={100} />
      </div>
      <p className={style.notFound_sorry}>متاسفیم</p>
      <p className={style.notfound_pagenotfound}>صفحه مورد نظر یافت نشد</p>
      <div className={style.notfound_btn_div}>
        <Link href="/">
        <button className={style.notfound_btn1}>صفحه اصلی</button>
        </Link>
        <button className={style.notfound_btn2} onClick={() => router.back()}>بازگشت به صفحه قبل</button>
      </div>
      <div className={style.notfound_inpt_div}>
        <input
          type="text"
          className={style.notfound_inpt}
          placeholder="جستجو..."
        />
        <button className={style.notfound_btn_search}>
          <Image src="/Search_404.svg" alt="" width={32} height={32} />
        </button>
      </div>
      <div className={style.notfound_footer_div}>
        <Link href="/">
        <div className={style.notfound_footer_p1}>خانه
        <hr className={style.notfound_hr} />
        </div>
        </Link>
        <Link href="/Contactus">
        <div className={style.notfound_footer_p2}>تماس با ما
        <hr className={style.notfound_hr} />
        </div>
        </Link>
        <Link href="/">
        <div className={style.notfound_footer_p3}>درباره ما
        <hr className={style.notfound_hr} />
        </div>
        </Link>
        <Link href="/gallery">
        <div className={style.notfound_footer_p4}>گالری تصاویر
        </div>
        </Link>
      </div>
    </div>
  );
}
