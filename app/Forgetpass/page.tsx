import Image from "next/image";
import "../../styles/forgetpass.css";
import Link from "next/link";

export default function ForgetPass() {
  return (
    <div className="main_forget">
      <div className="forget_box">
        <div className="void_forget1"></div>
        <div className="top_forget_page">
          <div className="exit_forget_btn">
            <Image alt="" src="/add.svg" width={24} height={24}></Image>
          </div>
          <div className="forget_logo">
            <Image alt="" src="/LOGO1.svg" width={181} height={129}></Image>
          </div>
        </div>
        <div className="void_forget2"></div>
        <div className="body_forget_page">
          <div className="content_forget_body">
            <p>نام کاربری</p>
            <input placeholder="ایمیل خود را وارد کنید"></input>
          </div>
        </div>
        <div className="void_forget3"></div>
        <div className="register_forget">
          <Link href="/Sendcode" style={{ width: 400, height: 40 }}>
            <button>ارسال کد تایید</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
