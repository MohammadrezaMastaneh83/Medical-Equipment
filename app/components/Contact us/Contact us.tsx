import style from "./Contact us.module.css"

export default function Contact_Us (){
    return(
        <div className={style.contact_all}>
            <div className={style.contact_baby}>
                <div className={style.contact_movp}>
            <p className={style.contact_p}>برای ارتباط با ما می توانید فرم زیر را پر کنید.</p>
            </div>
            <div className={style.contact_boxs}>
                <div className={style.contact_box1}>
                    <div className={style.contact_input_all}>
                    <div className={style.contact_input_div1}>
                        <p className={style.contact_input_p1}>نام</p>
                        <input className={style.contact_input1} type="text" />
                    </div>
                    <div className={style.contact_input_div2}>
                        <p className={style.contact_input_p1}>نام خانوادگی</p>
                        <input  className={style.contact_input2} type="text" />
                    </div>
                    </div>
                    <div className={style.contact_input_div3}>
                    <p className={style.contact_input_p1}>شماره تماس</p>
                        <input className={style.contact_input3} type="text" placeholder="66 78 450 0910" />
                    </div>
                    <div className={style.contact_input_div4}>
                    <p className={style.contact_input_p1}>متن پیام</p>
                        <input className={style.contact_input4} type="text" />
                    </div>
                    <button className={style.contact_btn}>ارسال فرم</button>
                </div>
                <div className={style.contact_box2}>
                    <div className={style.contact_baby_box}>
                        <p className={style.contact_adress}>آدرس :</p>
                        <p className={style.contact_praghra}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها ...</p>
                        <p className={style.contact_call}>شماره تماس:</p>
                        <p className={style.contact_number}>+1202-555-0487</p>
                    </div>
                    <div className={style.google_map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12864.094755598027!2d59.623076842732694!3d36.28747510224613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c916c0e0c1fbb%3A0xfe247c2f3b7ea0c2!2z2K3YsdmFINin2YXYp9mFINix2LbYpw!5e0!3m2!1sfa!2s!4v1701853563185!5m2!1sfa!2s" width="510" height="190"  loading="lazy" ></iframe>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}