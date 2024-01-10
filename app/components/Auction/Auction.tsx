import style from "./Auction.module.css";
export default function Auction() {
  return (
    <div
      className={style.auction_back}
      style={{
        backgroundImage: "url(./partnership.png)",
        width: "100%",
        height: "496px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={style.auction_all}>
        <div className={style.auction_divp}>
          بزرگترین
          <p className={style.auction_p}>مناقصه و مزایده</p>
          های دستگاه های
        </div>
        <p className={style.auction_p2}> تجهیزات پزشکی</p>
        <div className={style.auction_divp2}>
          <p className={style.auction_p3}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جا
          </p>
        </div>
        <button className={style.auction_btn}>
          <img src="/Transaction 1.svg" alt="" width={24} height={24} />
          مشاهده بخش مناقصات
        </button>
      </div>
    </div>
  );
}
