import style from "./not-found.module.css";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className={style.notfound_all}>
      <div className={style.notfound_move}>
      <Image src="/404.png" alt="" width={450} height={100} />
      
      </div>
      <p className={style.notFound_sorry}>متاسفیم</p>
      <p className={style.notfound_pagenotfound}>صفحه مورد نظر یافت نشد</p>
      <div className={style.notfound_btn_div}>
        <button className={style.notfound_btn1}>صفحه اصلی</button>
        <button className={style.notfound_btn2}>بازگشت به صفحه قبل</button>
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
      
    </div>
  );
}
