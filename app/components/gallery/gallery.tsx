import style from "./gallery.module.css";
import Image from "next/image";

export default function Gallery() {
  const pic = [
    {
      pic: "/gallery1.svg",
    },
    {
      pic: "/gallery2.svg",
    },
    {
      pic: "/gallery3.svg",
    },
    {
      pic: "/gallery1.svg",
    },
    {
      pic: "/gallery2.svg",
    },
    {
      pic: "/gallery3.svg",
    },
    {
      pic: "/gallery1.svg",
    },
    {
      pic: "/gallery2.svg",
    },
    {
      pic: "/gallery3.svg",
    },
  ];
  return (
    <div className={style.gallery_all}>
      <div className={style.gallery_baby}>
        {pic.map((item, index) => {
          return (
            <Image
              className={style.gallery_pic}
              alt=""
              src={item.pic}
              width={384}
              height={195}
            />
          );
        })}
      </div>
    </div>
  );
}
