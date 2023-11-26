import Image from "next/image";
import "../../styles/aboutme.css";

export default function AboutMe() {
  const arratList = [
    {
      spaceIcon: (
        <Image alt="" src="./spaceicon.svg" width={80} height={80}></Image>
      ),
      icon: <Image alt="" src="./darkhast.svg" width={40} height={40}></Image>,
      title: "درخواست مشاوره",
      description:
        "یکی از راه هایی که شما می توانید برای خرید تجهیزات پزشکی مشاوره دریافت کنید این است که برای ما یک درخواست مشاوره ارسال کنید",
    },
    {
      spaceIcon: (
        <Image alt="" src="./spaceicon.svg" width={80} height={80}></Image>
      ),
      icon: <Image alt="" src="./tamas.svg" width={40} height={40}></Image>,
      title: "تماس با ما",
      description: "راه دیگر تماس مستقیم با کارشناسان ما می باشد.",
    },
    {
      spaceIcon: (
        <Image alt="" src="./spaceicon.svg" width={80} height={80}></Image>
      ),
      icon: <Image alt="" src="./moshavere.svg" width={40} height={40}></Image>,
      title: "دریافت مشاوره",
      description:
        "پس از تماس شما از کارشناسان کارآزموده ما مشاوره های تخصصی در راستای خرید تجهیزات پزشکی دریافت خواهید کرد.",
    },
    {
      spaceIcon: (
        <Image alt="" src="./spaceicon.svg" width={80} height={80}></Image>
      ),
      icon: <Image alt="" src="./kharid.svg" width={40} height={40}></Image>,
      title: "  خرید امن و با کیفیت",
      description:
        "ما به شما نوید یک خرید امن و با کیفیت را با مشاوران خود می دهیم.",
    },
  ];

  return (
    <div className="main_page_about_me">
      <div className="about_me">
        <div className="rout"></div>
        <div className="about_the_center">
          <div className="about_the_center_of_Khursheed_eight">
            <div className="void_of_about_the_center_of_Khursheed_eight"></div>
            <div className="icon_title_space">
              <div className="icon_of_about_the_center_of_Khursheed_eight"></div>
              <div className="icon_of_about_the_center_of_Khursheed_eight2"></div>
              <p className="darbare_kanon">درباره کانون</p>
              <p className="khorshide_hasht">خورشید هشت</p>
            </div>
            <div className="space_of_paragraph_about_the_center_of_Khursheed_eight">
              <div className="paragraph_about_the_center_of_Khursheed_eight">
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
          <div className="picture_of_about_the_center_of_Khursheed_eight">
            <Image
              style={{ borderRadius: "15px" }}
              alt=""
              src="/aboutme.svg"
              width={482}
              height={482}
            ></Image>
          </div>
        </div>
        <div className="viod_in_main_page"></div>
        <div className="title_of_purchase_guide">
          <div className="space_of_icon_of_purchase_guide">
            <div className="icon_of_purchase_guide"></div>
            <div className="icon_of_purchase_guide2"></div>
          </div>
          <div className="space_of_text_of_purchase_guide">
            <p className="rahnama">راهنمای</p>
            <p className="kharid">خرید</p>
            <p className="lavazem">لوازم و تجهیزات پزشکی</p>
          </div>
        </div>
        <div className="space_of_purchase_guide">
          <div className="purchase_guide">
            {arratList.map((item) => {
              return (
                <div className="array_space">
                  <div className="box_array">
                    <div className="space_icon_main">
                      <div className="space_main">
                        {item.spaceIcon}
                        <div className="space_icon">{item.icon}</div>
                      </div>
                    </div>
                    <div className="space_title">
                      <div className="title_array">{item.title}</div>
                    </div>
                    <div className="description_space">
                    <div className="description_array">{item.description}</div></div>
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
