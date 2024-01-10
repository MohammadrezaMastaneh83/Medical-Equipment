"use client";
import { useState } from "react";
import style from "./profil.module.css";

import Image from "next/image";
export default function Profile1() {
  const [boleain, setboleain] = useState<boolean>(false);
  const ali = [
    {
      number: "1",
      name: "Compact Helix PCD کامپکت مارپیچ",
      mark: "Cleaver Sciertific",
      company: "ایران",
      call: "021 77 54 88 99",
      pic: "مشاهده",
      pos: "/cross.svg",
    },
    {
      number: "2",
      name: "Compact Helix PCD کامپکت مارپیچ",
      mark: "MEDITE",
      company: "اسپانیا",
      call: "021 77 54 88 99",
      pic: "مشاهده",
      pos: "/tick-circle.svg",
    },
    {
      number: "3",
      name: "Compact Helix PCD کامپکت مارپیچ",
      mark: "Cleaver Sciertific",
      company: "اتریش",
      call: "021 77 55 88 99",
      pic: "مشاهده",
      pos: "/cross.svg",
    },
    {
      number: "4",
      name: "Compact Helix PCD کامپکت مارپیچ",
      mark: "MEDITE",
      company: "فنلاند",
      call: "021 88 55 66 88",
      pic: "مشاهده",
      pos: "/tick-circle.svg",
    },
    {
      number: "5",
      name: "Compact Helix PCD کامپکت مارپیچ",
      mark: "Cleaver Sciertific",
      company: "ایران",
      call: "021 99 55 44 66",
      pic: "مشاهده",
      pos: "/Question.svg",
    },
    {
      number: "6",
      name: "Compact Helix PCD کامپکت مارپیچ",
      mark: "MEDITE",
      company: "ایران",
      call: "021 55 20 30 21",
      pic: "مشاهده",
      pos: "/Question.svg",
    },
    {
      number: "7",
      name: "Compact Helix PCD کامپکت مارپیچ",
      mark: "Cleaver Sciertific",
      company: "عربستان سعودی",
      call: "021 55 66 88 77",
      pic: "مشاهده",
      pos: "/Question.svg",
    },
  ];

  return (
    <div className={style.profil_all}>
      <div className={style.profil_dad}>
        <div
          className={style.profil_alert_div}
          style={boleain ? { display: "flex" } : { display: "none" }}
        >
          <div className={style.profil_alert_baby_div}>
            <Image alt="" src="/danger.svg" width={24} height={24} />
            <div className={style.profil_alert_p}>
              شما مجاز به ثبت<p className={style.profil_alert_p2}>30</p> عدد
              دستگاه به صورت رایگان هستید .!
            </div>
          </div>
        </div>
        <div className={style.profil_box}>
          <div className={style.profil_header}>
            <div className={style.profil_header_baby}>
              <div className={style.profil_condishiondiv1}>
                <p
                  style={boleain ? {} : { color: "#2C9CF0" }}
                  onClick={() => {
                    setboleain(false);
                  }}
                  className={style.profil_header_p}
                >
                  اطلاعات کاربری
                </p>
                <div
                  className={style.condishiondiv_1}
                  style={boleain ? { display: "none" } : { display: "block" }}
                ></div>
              </div>
              <div className={style.profil_condishiondiv2}>
                <p
                  style={boleain ? { color: "#2C9CF0" } : {}}
                  className={style.profil_header_p}
                  onClick={() => {
                    setboleain(true);
                  }}
                >
                  دستگاه های ثبت شده
                </p>
                <div
                  className={style.condishiondiv_2}
                  style={boleain ? { display: "block" } : { display: "none" }}
                ></div>
              </div>
            </div>
            <div
              style={boleain ? { display: "flex" } : { display: "none" }}
              className={style.profil_btn_div}
            >
              <button className={style.profil_btn2}>
                <Image alt="" src="/pustiv.svg" width={18} height={18} />
                اضافه نمودن دستگاه جدید
              </button>
              <button className={style.profil_btn}>
                <Image alt="" src="/trash.svg" width={28} height={28} />
                حذف درخواست
              </button>
            </div>
          </div>
          {!boleain ? (
            <>
              <div className={style.profil_table}>
                <div className={style.profil_item1}>
                  <div className={style.profil_g}>
                    <p className={style.profil_p1}>نام کامل شرکت</p>
                    <div className={style.profil_red_star}>*</div>
                  </div>
                  <input type="text" className={style.profil_input1} />
                </div>
                <div className={style.profil_item2}>
                  <div className={style.profil_g}>
                    <p className={style.profil_p1}>
                      نام و نام خانوادگی مدیر عامل
                    </p>
                    <div className={style.profil_red_star}>*</div>
                  </div>
                  <input type="text" className={style.profil_input2} />
                </div>
                <div className={style.profil_item3}>
                  <div className={style.profil_g}>
                    <p className={style.profil_p1}>فکس</p>
                    <div className={style.profil_red_star}>*</div>
                  </div>
                  <input type="text" className={style.profil_input3} />
                </div>
                <div className={style.profil_item4}>
                  <div className={style.profil_g}>
                    <p className={style.profil_p1}>وب سایت</p>
                    <div className={style.profil_red_star}>*</div>
                  </div>
                  <input type="text" className={style.profil_input4} />
                </div>
                <div className={style.profil_item5}>
                  <div className={style.profil_g}>
                    <p className={style.profil_p1}>شماره تماس</p>
                    <div className={style.profil_red_star}>*</div>
                  </div>
                  <input type="text" className={style.profil_input5} />
                </div>
                <div className={style.profil_item6}>
                  <div className={style.profil_g}>
                    <p className={style.profil_p1}>ایمیل</p>
                    <div className={style.profil_red_star}>*</div>
                  </div>
                  <input type="text" className={style.profil_input6} />
                </div>
                <div className={style.profil_item7}>
                  <div className={style.profil_g}>
                    <p className={style.profil_p1}> رمز عبور جدید:</p>
                    <div className={style.profil_red_star}>*</div>
                  </div>
                  <input type="text" className={style.profil_input7} />
                </div>
                <div className={style.profil_item8}>
                  <div className={style.profil_g}>
                    <p className={style.profil_p1}>تایید رمز عبور جدید:</p>
                    <div className={style.profil_red_star}>*</div>
                  </div>
                  <input type="text" className={style.profil_input8} />
                </div>
                <div className={style.profil_item9}>
                  <div className={style.profil_g}>
                    <p className={style.profil_p1}>آدرس شرکت</p>
                    <div className={style.profil_red_star}>*</div>
                  </div>
                  <input type="text" className={style.profil_input9} />
                </div>
              </div>
              <div className={style.profil_ubtn_div}>
                <button className={style.profil_ubtn}>ذخیره تغییرات</button>
              </div>
            </>
          ) : (
            <>
              <div className={style.mashion_header}>
                <div className={style.mashion_boxheader1}>
                  <p className={style.mashion_boxheaderp1}>ردیف</p>
                </div>
                <div className={style.mashion_boxheader2}>
                  <p className={style.mashion_boxheaderp2}>نام دستگاه</p>
                </div>
                <div className={style.mashion_boxheader3}>
                  <p className={style.mashion_boxheaderp3}>مارک دستگاه</p>
                </div>
                <div className={style.mashion_boxheader4}>
                  <p className={style.mashion_boxheaderp4}>کشور سازنده</p>
                </div>
                <div className={style.mashion_boxheader5}>
                  <p className={style.mashion_boxheaderp5}>شماره تماس</p>
                </div>
                <div className={style.mashion_boxheader6}>
                  <p className={style.mashion_boxheaderp6}>تصاویر</p>
                </div>
                <div className={style.mashion_boxheader7}>
                  <p className={style.mashion_boxheaderp7}>وضعیت</p>
                </div>
                <div className={style.mashion_boxheader8}>
                  <p className={style.mashion_boxheaderp8}>دلیل رد</p>
                </div>
              </div>
              <div className={style.mashion_map_all}>
                {ali.map((item, index) => {
                  let color;
                  if (index == 1) {
                    color = "#FCFCFC";
                  } else {
                    if (index == 3) {
                      color = "#FCFCFC";
                    } else {
                      if (index == 5) {
                        color = "#FCFCFC";
                      }
                    }
                  }
                  return (
                    <div
                      className={style.mashion_map_div}
                      style={{ background: color }}
                    >
                      <div className={style.mashion_boxheader1}>
                        {item.number}
                      </div>
                      <div className={style.mashion_boxheader2}>
                        {item.name}
                      </div>
                      <div className={style.mashion_boxheader3}>
                        {item.mark}
                      </div>
                      <div className={style.mashion_boxheader4}>
                        {item.company}
                      </div>
                      <div className={style.mashion_boxheader5}>
                      <div className={style.mashion_backgruon}>
                        {item.call}
                      </div>
                      </div>
                      <div className={style.mashion_boxheader6}>
                      <div className={style.mashion_backgruon2} >{item.pic}</div>
                      </div>
                      <div className={style.mashion_boxheader7}>
                        <Image alt="" src={item.pos} width={24} height={24} />
                      </div>
                      <div className={style.mashion_boxheader8}></div>
                    </div>
                  );
                })}
              </div>
              <>
              <div className={style.mashion_footer}>
                <div className={style.mashion_lin}></div>
                <div className={style.mashion_div_p}>
                  <Image alt="" src="/tick-circle.svg" width={24} height={24} />
                  <p className={style.mashion_footer_p}>
                    نشان دهنده تایید دستگاه توسط شرکت خورشید هشت می باشد و
                    دستگاه شما در سایت ثبت شده است.
                  </p>
                </div>
                <div className={style.mashion_div_p}>
                  <Image alt="" src="/cross.svg" width={24} height={24} />
                  <p className={style.mashion_footer_p}>
                    نشان دهنده عدم تایید دستگاه توسط شرکت خورشید هشت می باشد و
                    دستگاه شما در سایت ثبت نشده است.
                  </p>
                </div>
                <div className={style.mashion_div_p}>
                  <Image alt="" src="/Question.svg" width={24} height={24} />
                  <p className={style.mashion_footer_p}> مشخصات دستگاه شما در حال بررسی متخصصین ما می باشد.</p>
                </div>
                </div>
              </>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
