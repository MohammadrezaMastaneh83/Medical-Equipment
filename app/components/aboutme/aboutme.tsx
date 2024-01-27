import Image from "next/image";
import Style from "../aboutme/aboutme.module.css";

export default function AboutMe() {
  const arratList = [
    {
      spaceIcon: (
        <Image alt="" src="./Ellipse.svg" width={80} height={80}></Image>
      ),
      icon: <Image alt="" src="./moshavere.svg" width={40} height={40}></Image>,
      title: "درخواست مشاوره",
      description:
        "یکی از راه هایی که شما می توانید برای خرید تجهیزات پزشکی مشاوره دریافت کنید این است که برای ما یک درخواست مشاوره ارسال کنید",
    },
    {
      spaceIcon: (
        <Image alt="" src="./Ellipse.svg" width={80} height={80}></Image>
      ),
      icon: <Image alt="" src="./tamasss.svg" width={40} height={40}></Image>,
      title: "تماس با ما",
      description: "راه دیگر تماس مستقیم با کارشناسان ما می باشد.",
    },
    {
      spaceIcon: (
        <Image alt="" src="./Ellipse.svg" width={80} height={80}></Image>
      ),
      icon: <Image alt="" src="./daryaft.svg" width={40} height={40}></Image>,
      title: "دریافت مشاوره",
      description:
        "پس از تماس شما از کارشناسان کارآزموده ما مشاوره های تخصصی در راستای خرید تجهیزات پزشکی دریافت خواهید کرد.",
    },
    {
      spaceIcon: (
        <Image alt="" src="./Ellipse.svg" width={80} height={80}></Image>
      ),
      icon: <Image alt="" src="./rezayat.svg" width={40} height={40}></Image>,
      title: "  خرید امن و با کیفیت",
      description:
        "ما به شما نوید یک خرید امن و با کیفیت را با مشاوران خود می دهیم.",
    },
  ];

  return (
    <div className={Style.main_page_about_me}>
      <div className={Style.about_me}>
        <div className={Style.rout}></div>
        <div className={Style.about_the_center}>
          <div className={Style.about_the_center_of_Khursheed_eight}>
            <div
              className={Style.void_of_about_the_center_of_Khursheed_eight}
            ></div>
            <div className={Style.icon_title_space}>
              <div
                className={Style.icon_of_about_the_center_of_Khursheed_eight}
              ></div>
              <div
                className={Style.icon_of_about_the_center_of_Khursheed_eight2}
              ></div>
              <p className={Style.darbare_kanon}>درباره کانون</p>
              <p className={Style.khorshide_hasht}>خورشید هشت</p>
            </div>
            <div
              className={
                Style.space_of_paragraph_about_the_center_of_Khursheed_eight
              }
            >
              <div
                className={Style.paragraph_about_the_center_of_Khursheed_eight}
              >
                کانون تبلیغاتی خورشید هشت با مجوز رسمی از وزارت فرهنگ و ارشاد
                اسلامی، از جمله کانون های فعال در حوزه سلامت می باشد که با سابقه
                ای بالغ بر 3 دهه توانسته است در زمینه های گوناگون از جمله چاپ
                کتاب راهنمای خرید تجهیزات پزشکی خورشید هشت و ارسال رایگان آن به
                تمامی بیمارستانها و مراکز پزشکی کشور و همچنین برگزاری کنگره های
                پزشکی ساخت و تجهیز بیمارستان و کنگره کنترل عفونت و استریلیزاسیون
                در زمینه معرفی محصول پزشکی فعالیت های چشمگیری داشته باشد. باعث
                افتخار است از این پس بتواند هر چه بهتر در جهت ارتقای کمی و کیفی
                بار تبلیغاتی به مخاطبین در این حرفه موفق و سربلند باشد.
              </div>
            </div>
          </div>
          <div className={Style.picture_of_about_the_center_of_Khursheed_eight}>
            <Image
              style={{ borderRadius: "15px" }}
              alt=""
              src="/kanon.png"
              width={482}
              height={482}
            ></Image>
          </div>
        </div>
        <div className={Style.viod_in_main_page}></div>
        <div className={Style.title_of_purchase_guide}>
          <div className={Style.space_of_icon_of_purchase_guide}>
            <div className={Style.icon_of_purchase_guide}></div>
            <div className={Style.icon_of_purchase_guide2}></div>
          </div>
          <div className={Style.space_of_text_of_purchase_guide}>
            <p className={Style.rahnama}>راهنمای</p>
            <p className={Style.kharid}>خرید</p>
            <p className={Style.lavazem}>لوازم و تجهیزات پزشکی</p>
          </div>
        </div>
        <div className={Style.space_of_purchase_guide}>
          <div className={Style.purchase_guide}>
            {arratList.map((item) => {
              return (
                <div className={Style.array_space}>
                  <div className={Style.box_array}>
                    <div className={Style.space_icon_main}>
                      <div className={Style.space_main}>
                        {item.spaceIcon}
                        <div className={Style.space_icon}>{item.icon}</div>
                      </div>
                    </div>
                    <div className={Style.space_title}>
                      <div className={Style.title_array}>{item.title}</div>
                    </div>
                    <div className={Style.description_space}>
                      <div className={Style.description_array}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
