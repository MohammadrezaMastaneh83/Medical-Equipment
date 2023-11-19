import Image from "next/image";
import "../../styles/sendcode.css";

export default function SendCode() {
  return (
    <div className="main_code">
      <div className="code_box">
        <div className="void_code1"></div>
        <div className="top_code_page">
          <div className="exit_code_btn">
            <Image alt="" src="/add.svg" width={24} height={24}></Image>
          </div>
          <div className="code_logo">
            <Image alt="" src="/LOGO1.svg" width={181} height={129}></Image>
          </div>
        </div>
        <div className="void_code2"></div>
        <div className="body_code_page">
          <div className="content_code_body">
            <p>کد تایید</p>
            <input placeholder="کد تایید را وارد کنید"></input>
          </div>
          <div className="content_code_body">
            <p>رمز عبور جدید</p>
            <input placeholder="رمز عبور جدید را وارد کنید"></input>
          </div>
          <div className="content_code_body">
            <p>تایید رمز عبور جدید</p>
            <input placeholder="رمز عبور جدید را وارد کنید"></input>
          </div>
        </div>
        <div className="void_code3"></div>
        <div className="save_information">
            <button>ذخیره اطلاعات</button>
        </div>
      </div>
    </div>
  );
}
