import styles from "./cardbox.module.css";

export default function CardBox() {
  const Guide = [
    {
        number:"1",
      img: "/1.svg",
      title: "درخواست مشاوره",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده چاپ، و با استفاده ",
    },
    { 
        number:"2",
      img: "/2.svg",
      title: "تماس با ما",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده چاپ، و با استفاده ",
    },
    {
        number:"3",
      img: "/3.svg",
      title: "دریافت مشاوره ",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده چاپ، و با استفاده ",
    },
    { 
        number:"4",
      img: "/4.svg",
      title: "خرید امن و با کیفیت",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده چاپ، و با استفاده ",
    },
  ];
  return (
    <div className={styles.cardbox_dad}>
      <div className={styles.cardbox_all}>
        {Guide.map((item, index) => {
          return (
            <div className={styles.box}>
                <div className={styles.number_div}>{item.number}</div>
              <div className={styles.cardbox_img_div}>
                <img
                  src={item.img}
                  width="40px"
                  height="40px"
                  alt=""
                  className={styles.svg}
                />
              </div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.texte}>{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
