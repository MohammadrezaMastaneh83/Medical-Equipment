import Image from "next/image";
import Style from "../pruduct/product.module.css";

import React from "react";
import Link from "next/link";
import App from "../slider/slider";

export default function Product() {
  return (
    <div className={Style.main_prud}>
      <div className={Style.specifications_box}>
        <div className={Style.img_prud}>
          <Image
            alt=""
            src={"/water_splash_5010_dental_waterjet.png"}
            width={280}
            height={280}
          ></Image>
        </div>
        <div className={Style.details_prud}>
          <div className={Style.tamas_baraye_kharid}>
            <p>اطلاعات دستگاه</p>
            <button>
              تماس برای خرید دستگاه
              <Image
                className={Style.img_btn}
                alt=""
                src={"/callwithour.svg"}
                width={24}
                height={24}
              ></Image>
            </button>
          </div>
          <div className={Style.dastgah_sherkat}>
            <div className={Style.dastgah}>
              <p
                style={{
                  color: "#777777",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                نام دستگاه:
              </p>
              <p
                style={{
                  color: "#161616",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                بلبرینگ استیل
              </p>
            </div>
            <div className={Style.sherkat}>
              <p
                style={{
                  color: "#777777",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                نام شرکت فروشنده:
              </p>
              <p
                style={{
                  color: "#161616",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                اطلس آرمان مد
              </p>
            </div>
          </div>
          <div className={Style.line_prud}></div>
          <div className={Style.dastgah_sherkat}>
            <div className={Style.dastgah}>
              <p
                style={{
                  color: "#777777",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                مارک دستگاه:
              </p>
              <p
                style={{
                  color: "#161616",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                لورم ایپسوم
              </p>
            </div>
            <div className={Style.sherkat}>
              <p
                style={{
                  color: "#777777",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                شماره شرکت:
              </p>
              <p
                style={{
                  color: "#161616",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                ۰۲۱ - ۷۷ ۵۳ ۷۷ ۲۲
              </p>
            </div>
          </div>
          <div className={Style.line_prud}></div>
          <div className={Style.dastgah_sherkat}>
            <div className={Style.dastgah}>
              <p
                style={{
                  color: "#777777",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                کشور سازنده:
              </p>
              <p
                style={{
                  color: "#161616",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                آلمان
              </p>
            </div>
            <div className={Style.sherkat}>
              <p
                style={{
                  color: "#777777",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                نام مسئول فروش:
              </p>
              <p
                style={{
                  color: "#161616",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                پارسا یاهو زاده
              </p>
            </div>
          </div>
          <div className={Style.line_prud}></div>
          <div className={Style.dastgah_sherkat}>
            <div className={Style.dastgah}>
              <p
                style={{
                  color: "#777777",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                گروه کاربردی:
              </p>
              <p
                style={{
                  color: "#161616",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                دندان پزشکی
              </p>
            </div>
          </div>
          <div className={Style.line_prud}></div>
          <div className={Style.dastgah_sherkat}>
            <div className={Style.dastgah}>
              <p
                style={{
                  color: "#777777",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                فکس شرکت:
              </p>
              <p
                style={{
                  color: "#161616",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                ۹۸۷۷۸۶۷۸۶۵۶
              </p>
            </div>
            <div className={Style.sherkat}>
              <p
                style={{
                  color: "#777777",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                وب سایت:
              </p>
              <p
                style={{
                  color: "#161616",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                www.Armanmed.ir
              </p>
            </div>
          </div>
          <div className={Style.line_prud}></div>
          <div className={Style.dastgah_sherkat}>
            <div className={Style.dastgah}>
              <p
                style={{
                  color: "#777777",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                ایمیل:
              </p>
              <p
                style={{
                  color: "#161616",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                لورم ایپسوم
              </p>
            </div>
            <div className={Style.sherkat}>
              <p
                style={{
                  color: "#777777",
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                آدرس:
              </p>
              <p
                style={{
                  color: "#161616",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                طالقانی کریم خان کوچه اجمدی پلاک ۱۷
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.space_slider}>
        <App/>
      </div>
    </div>
  );
}
