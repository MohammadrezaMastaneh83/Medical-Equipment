"use client";
import style from "./footer.module.css";
import Image from "next/image";
import { useEffect } from "react";
export default function Footer() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const pic = [
    {
      pic: "/Doc12.png",
    },
    {
      pic: "/Doc12.png",
    },
    {
      pic: "/Doc12.png",
    },
    {
      pic: "/Doc12.png",
    },
  ];
  return (
    <div className={style.footer_scroll}>
      <div className={style.landnews_scrooldiv}>
        <button
          className={style.landnews_scrool}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          بازگشت به بالا
          <Image alt="" src="/Arrow - Up 2.svg" width={10.667} height={6} />
        </button>
      </div>

      <div className={style.footer_all} >
        <div className={style.footer_every}>
          <div className={style.footer_dad}>
            <div className={style.footer_logodiv}>
              <Image alt="" src="/LOGO 1.svg" width={226} height={160} />
            </div>
            <div className={style.footer_div_soshal}>
              <p className={style.footer_p}>مارادرفضای مجازی دنبال کنید</p>
              <div className={style.footer_logo}>
                <Image
                  alt=""
                  src="/GroupInstagram.svg"
                  width={48}
                  height={48}
                />
                <Image alt="" src="/GroupTelegram.svg" width={48} height={48} />
                <Image alt="" src="/GroupAparat.svg" width={48} height={48} />
              </div>
            </div>
            <div className={style.footer_logodiv}>
              <Image alt="" src="/LOGO 1.svg" width={226} height={160} />
            </div>
          </div>
          <hr className={style.footer_lin}></hr>
        </div>
        <div className={style.footer_section_dad}>
          <div className={style.footer_section}>
            <div className={style.footer_connection}>
              <p className={style.footer_connection_p1}>راه های ارتباطی</p>
              <div className={style.footer_call}>
                <Image alt="" src="/Group_call.svg" width={40} height={40} />
                <p className={style.footer_callp}>021 77 56 37 01 - 3</p>
              </div>
              <div className={style.footer_yahoo}>
                <Image alt="" src="/Group_Gmail.png" width={40} height={40} />
                <p className={style.footer_gmailp}>khrshidhasht@yahoo.com</p>
              </div>
              <div className={style.footer_adress}>
                <Image
                  alt=""
                  src="/Group_location.svg"
                  width={40}
                  height={40}
                />
                <p className={style.footer_adressp}>
                  خیابان شریعتی؛بالاتر از طالقانی؛پلاک 183 واحد 9
                </p>
              </div>
            </div>
            <div className={style.footer_news}>
              <p className={style.footer_news_h1}>اخبار</p>
              <p className={style.footer_newsp}>
                چگونه طراحی یوآی و یوایکس را شروع کنیم؟
              </p>
              <p className={style.footer_newsp2}>
                های خوداگاهی نسبت به مهارت های خود اگاهی کافی{" "}
              </p>
              <p className={style.footer_newsp}>
                چگونه طراحی یوآی و یوایکس را شروع کنیم؟
              </p>
              <p className={style.footer_newsp2}>
                های خوداگاهی نسبت به مهارت های خود اگاهی کافی{" "}
              </p>
              <p className={style.footer_newsp}>
                چگونه طراحی یوآی و یوایکس را شروع کنیم؟
              </p>
              <p className={style.footer_newsp2}>
                های خوداگاهی نسبت به مهارت های خود اگاهی کافی{" "}
              </p>
            </div>
            <div className={style.footer_gallery}>
              <p className={style.footer_gallery_p1}>گالری تصاویر</p>
              <div className={style.footer_gallery_div}>
              {pic.map((item, index) => {
                return (
                    <Image
                      className={style.footer_gallery_pic1}
                      src={item.pic}
                      alt=""
                      width={78}
                      height={80}
                    />
                    );
                  })}
                  </div>
            </div>
            <div className={style.footer_link}>
              <p className={style.footer_link_p1}>لینک های مفید</p>
              <p className={style.footer_link_p2}>درباره ما</p>
              <p className={style.footer_link_p2}>تماس باما</p>
              <p className={style.footer_link_p2}>اخبار</p>
              <p className={style.footer_link_p2}>مقالات</p>
            </div>
          </div>
        </div>
          <div className={style.footer_end_div}>
            <div className={style.footer_end_p}>تمامی حقوق های مادی و معنوی برای <p className={style.footer_end_p2}>خورشید هشت</p>محفوظ است</div>
          </div>
      </div>
    </div>
  );
}
