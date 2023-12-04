"use client";
import Image from "next/image";
import { useState } from "react";
import "../../styles/purchaseexpert.css";

export default function PurchaseExpert() {
  const [open, setOpen] = useState(0);

  return (
    <div className="purchase_expert_main_page">
      <div className="purchase_expert">
        <div className="purchase_expert_rout"></div>
        <div className="purchase_expert_position">
          <div className="purchase_expert_image">
            <Image
              alt=""
              src="/PurchaseExpert.png"
              width={200}
              height={250}
            ></Image>
          </div>
          <div className="space_of_purchase_expert_description">
            <div className="purchase_expert_description">
              <div className="name_person_of_purchase_expert_description">
                بهراد آب نیکی
              </div>
              <div className="title_of_purchase_expert_description">
                <p className="jayegah">جایگاه : </p>
                <p className="karshenas_tajhizat">
                  {" "}
                  کارشناس تجهیزات مکانیک پزشکی{" "}
                </p>
              </div>
              <div className="description">
                راحله بهرامیان هستم، محل تولدم شیراز اما بیشتر زندگیم را اصفهان
                گذروندم. از دانشگاه شهرکرد فارغ التحصیل شدم و بعد از اینکه درسم
                تموم شد سریع وارد بازار کار شدم. 12 سال سابقه فعالیت در شرکت‌های
                فنی و مهندسی تحت نظر انجمن کارفرمایان دارم. نزدیک به چهارساله که
                در بخش فروش میلگرد در مرکزآهن فعالیت می‌کنم. کار توی حوزه
                آهن‌آلات تجربیات زیادی را برام فراهم کرده و بودن در کنار یک تیم
                حرفه‌ای برام بهترین اتفاق بود. حالا در خدمت شما هستم و امیدوارم
                بتونم در روند خرید و فروش رضایت شما مشتریان عزیز را جلب کنم
              </div>
              <div className="phone_number_of_purchase_expert">
                <Image
                  alt=""
                  src="./socialmedialogo.svg"
                  width={24}
                  height={24}
                ></Image>{" "}
                <p>0910 222 3344</p>
              </div>
            </div>
          </div>
        </div>
        <div className="void_of_purchase_expert"></div>
        <div className="contact_the_expert">
          <div className="space_of_text_of_contact_the_expert">
            <div className="title_of_contact_the_expert">
              <Image
                alt=""
                src="./call-calling.svg"
                width={24}
                height={24}
              ></Image>
              <p>ارتباط با کارشناس</p>
            </div>
            <div className="inputs_contact_the_expert">
              <input placeholder="نام"></input>
              <div className="icon_input1">
                <Image
                  alt=""
                  src="./profile.svg"
                  width={18}
                  height={18}
                ></Image>
              </div>
              <input placeholder="نام خانوادگی"></input>
              <div className="icon_input2">
                <Image
                  alt=""
                  src="./call-calling.svg"
                  width={18}
                  height={18}
                ></Image>
              </div>
              <input placeholder="شماره تماس"></input>
              <div className="icon_input3">
                <Image alt="" src="./people.svg" width={18} height={18}></Image>
              </div>
            </div>
            <div className="input_message">
              <textarea placeholder="متن پیام"></textarea>
              <div className="icon_input4">
                <Image alt="" src="./people.svg" width={18} height={18}></Image>
              </div>
            </div>
            <div className="btn_contact_the_expert">
              <button>ثبت درخواست</button>
            </div>
          </div>
        </div>
        <div className="void_of_purchase_expert2"></div>
        <div className="title_of_purchase_export">
          <div className="space_of_icon_of_purchase_export">
            <div className="icon_of_purchase_export"></div>
            <div className="icon_of_purchase_export2"></div>
          </div>
          <div className="space_of_text_of_purchase_export">
            <p>سوالات متداول</p>
          </div>
        </div>
        <div className="asked_questions">
          <div className="space_drop_down">
            <div
              className="box_drop_down
            "
              onClick={() => {
                setOpen(1);
              }}
              style={
                open === 1
                  ? {
                      height: "122px",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      display: "flex",
                    }
                  : {}
              }
            >
              <div
                className="sideHide_drop_content"
                style={
                  open == 1
                    ? { transform: "scaley(1)", transition: "all 0.2s" }
                    : { transform: "scaley(0)" }
                }
              >
                <p>
                  لورم ایپسوم یک متن فرضی است که در متن های داینامیک استفاده
                  میشود. لورم ایپسوم یک متن فرضی است که در متن های داینامیک
                  استفاده میشود.
                </p>
              </div>
              <div className="drop_content_conteiner">
                <div className="rightSide_content_drop">
                  <Image
                    alt="gozo"
                    height={24}
                    width={24}
                    src={"./ques.svg"}
                  ></Image>
                  <p className="fontSize_drop">چگونه در سایت ثبت نام کنیم؟</p>
                </div>
                <div className="leftSide_content_drop">
                  <Image
                    alt="gozo"
                    height={16}
                    width={16}
                    src={"./down.svg"}
                    className="imageIcon_drop"
                    style={
                      open === 1
                        ? { transform: "rotate(0deg)", transition: "all 0.4s" }
                        : {}
                    }
                  ></Image>
                </div>
              </div>
            </div>
            <div
              className="box_drop_down
            "
              onClick={() => {
                setOpen(2);
              }}
              style={
                open === 2
                  ? {
                      height: "122px",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      display: "flex",
                    }
                  : {}
              }
            >
              <div
                className="sideHide_drop_content"
                style={
                  open == 2
                    ? { transform: "scaley(1)", transition: "all 0.2s" }
                    : { transform: "scaley(0)" }
                }
              >
                <p>
                  کاربر گرامی شما باید ابتدا در سایت ثبت نام کرده و سپس به بخش
                  اطلاعات حساب کاربری رفته و اطلاعات خود را تکمیل کنید؛ سپس می
                  توانید دستگاه خود را ثبت کنید.
                </p>
              </div>
              <div className="drop_content_conteiner">
                <div className="rightSide_content_drop">
                  <Image
                    alt="gozo"
                    height={24}
                    width={24}
                    src={"./ques.svg"}
                  ></Image>
                  <p className="fontSize_drop">
                    چگونه میتوانیم در دروره های اموزشی شرکت کنیم؟
                  </p>
                </div>
                <div className="leftSide_content_drop">
                  <Image
                    alt="gozo"
                    height={16}
                    width={16}
                    src={"./down.svg"}
                    className="imageIcon_drop"
                    style={
                      open === 2
                        ? { transform: "rotate(0deg)", transition: "all 0.4s" }
                        : {}
                    }
                  ></Image>
                </div>
              </div>
            </div>
            <div
              className="box_drop_down
            "
              onClick={() => {
                setOpen(3);
              }}
              style={
                open === 3
                  ? {
                      height: "122px",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      display: "flex",
                    }
                  : {}
              }
            >
              <div
                className="sideHide_drop_content"
                style={
                  open == 3
                    ? { transform: "scaley(1)", transition: "all 0.2s" }
                    : { transform: "scaley(0)" }
                }
              >
                <p>
                  ما در این سایت یک مرجع برای خرید و فروش ؛ معرفی تجهیزات پزشکی
                  برای شرکت ها فراهم آورده اییم تا کاربران بتوانند به راحتی به
                  خرید و فروش آن بپردازند.
                </p>
              </div>
              <div className="drop_content_conteiner">
                <div className="rightSide_content_drop">
                  <Image
                    alt="gozo"
                    height={24}
                    width={24}
                    src={"./ques.svg"}
                  ></Image>
                  <p className="fontSize_drop">چگونه در سایت ثبت نام کنیم؟</p>
                </div>
                <div className="leftSide_content_drop">
                  <Image
                    alt="gozo"
                    height={16}
                    width={16}
                    src={"./down.svg"}
                    className="imageIcon_drop"
                    style={
                      open === 3
                        ? { transform: "rotate(0deg)", transition: "all 0.4s" }
                        : {}
                    }
                  ></Image>
                </div>
              </div>
            </div>
            <div
              className="box_drop_down
            "
              onClick={() => {
                setOpen(4);
              }}
              style={
                open === 4
                  ? {
                      height: "122px",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      display: "flex",
                    }
                  : {}
              }
            >
              <div
                className="sideHide_drop_content"
                style={
                  open == 4
                    ? { transform: "scaley(1)", transition: "all 0.2s" }
                    : { transform: "scaley(0)" }
                }
              >
                <p>
                  لورم ایپسوم یک متن فرضی است که در متن های داینامیک استفاده
                  میشود. لورم ایپسوم یک متن فرضی است که در متن های داینامیک
                  استفاده میشود.
                </p>
              </div>
              <div className="drop_content_conteiner">
                <div className="rightSide_content_drop">
                  <Image
                    alt="gozo"
                    height={24}
                    width={24}
                    src={"./ques.svg"}
                  ></Image>
                  <p className="fontSize_drop">
                    چگونه میتوانیم در دروره های اموزشی شرکت کنیم؟
                  </p>
                </div>
                <div className="leftSide_content_drop">
                  <Image
                    alt="gozo"
                    height={16}
                    width={16}
                    src={"./down.svg"}
                    className="imageIcon_drop"
                    style={
                      open === 4
                        ? { transform: "rotate(0deg)", transition: "all 0.4s" }
                        : {}
                    }
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="img_drop_down">
            <Image alt="" src="/frame.png" width={396} height={340}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
