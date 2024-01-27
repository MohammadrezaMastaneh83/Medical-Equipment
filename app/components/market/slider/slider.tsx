"use client";
import Image from "next/image";
import Style from "../slider/slider.module.css";
import style from "./keenSlider.module.css";
import { useKeenSlider } from "keen-slider/react";
import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";

export default function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 4,
      spacing: 15,
    },
  });

  return (
    <>
      <div className={Style.main_slider}>
        <div className={Style.keenslider_back}>
          <div className={Style.keenslider_All}>
            <hr className={Style.keenslider_hr} />
            <div className={Style.keenslider_lozy_with}></div>
            <div className={Style.keenslider_lozy_green}></div>
            <div className={Style.keenslider_headlinp}>
              برخی از
              <p className={Style.someproduct_headlinp2}>محصولات</p>
            </div>
            <hr className={Style.keenslider_hr1} />
            <div
              className={Style.keenslider_arrow}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              // disabled={
              //   currentSlide ===
              //   instanceRef.current.track.details.slides.length - 1
              // }
            >
              <Image
                alt=""
                src="/Arrow - rightCircle.svg"
                width={27}
                height={27}
              />
            </div>
            <div
              className={Style.keenslider_arrow}
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              // disabled={currentSlide === 0}
              // aria-disabled
            >
              <Image
                alt=""
                src="/Arrow - Left Circle.svg"
                width={35}
                height={35}
              />
            </div>

            <hr className={Style.keenslider_hr2} />
          </div>
        </div>
        <div className={Style.keenslider_dad}>
          <div className={Style.navigation_wrapper}>
            <div ref={sliderRef} className={`keen-slider ${Style.keen_slider}`}>
              <div className={`keen-slider__slide ${Style.number_slide1}`}>
                <div className={Style.keenslider_all}>
                  <Image
                    alt=""
                    src="/water_splash_5010_dental_waterjet 1.svg"
                    width={214}
                    height={214}
                  />
                  <div className={Style.keenslider_texte}>
                    <div className={Style.keenslider_texte_baby}>
                      <p className={Style.keenslider_p}>
                        جرم گیر آبی واتر اسپلش مدل 5105
                      </p>
                      <div className={Style.keenslider_div_p}>
                        <div className={Style.keenslider_but}></div>
                        <p className={Style.keenslider_p1}>
                          قابلیت تنظیم فشار از روی دسته
                        </p>
                      </div>
                      <div className={Style.keenslider_div_p1}>
                        <div className={Style.keenslider_but}></div>
                        <p className={Style.keenslider_p1}>
                          قابلیت تنظیم فشار از روی دسته
                        </p>
                      </div>
                      <div className={Style.keenslider_div_pall}>
                        <p className={Style.keenslider_p2}>خرید محصول</p>
                        <Image
                          className={Style.keenslider_pic12}
                          alt=""
                          src="/Arrow-p_Left 3.svg"
                          width={14}
                          height={14}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`keen-slider__slide ${Style.number_slide2}`}>
                <div className={Style.keenslider_all}>
                  <Image
                    alt=""
                    src="/water_splash_5010_dental_waterjet 1.svg"
                    width={214}
                    height={214}
                  />
                  <div className={Style.keenslidSr_texte}>
                    <div className={Style.keenslider_texte_baby}>
                      <p className={Style.keenslider_p}>
                        جرم گیر آبی واتر اسپلش مدل 5105
                      </p>
                      <div className={Style.keenslider_div_p}>
                        <div className={Style.keenslider_but}></div>
                        <p className={Style.keenslider_p1}>
                          قابلیت تنظیم فشار از روی دسته
                        </p>
                      </div>
                      <div className={Style.keenslider_div_p1}>
                        <div className={Style.keenslider_but}></div>
                        <p className={Style.keenslider_p1}>
                          قابلیت تنظیم فشار از روی دسته
                        </p>
                      </div>
                      <div className={Style.keenslider_div_pall}>
                        <p className={Style.keenslider_p2}>خرید محصول</p>
                        <Image
                          className={Style.keenslider_pic12}
                          alt=""
                          src="/Arrow-p_Left 3.svg"
                          width={14}
                          height={14}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`keen-slider__slide ${Style.number_slide3}`}>
                <div className={Style.keenslider_all}>
                  <Image
                    alt=""
                    src="/water_splash_5010_dental_waterjet 1.svg"
                    width={214}
                    height={214}
                  />
                  <div className={Style.keenslider_texte}>
                    <div className={Style.keenslider_texte_baby}>
                      <p className={Style.keenslider_p}>
                        جرم گیر آبی واتر اسپلش مدل 5105
                      </p>
                      <div className={Style.keenslider_div_p}>
                        <div className={Style.keenslider_but}></div>
                        <p className={Style.keenslider_p1}>
                          قابلیت تنظیم فشار از روی دسته
                        </p>
                      </div>
                      <div className={Style.keenslider_div_p1}>
                        <div className={Style.keenslider_but}></div>
                        <p className={Style.keenslider_p1}>
                          قابلیت تنظیم فشار از روی دسته
                        </p>
                      </div>
                      <div className={Style.keenslider_div_pall}>
                        <p className={Style.keenslider_p2}>خرید محصول</p>
                        <Image
                          className={Style.keenslider_pic12}
                          alt=""
                          src="/Arrow-p_Left 3.svg"
                          width={14}
                          height={14}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`keen-slider__slide ${Style.number_slide4}`}>
                <div className={Style.keenslider_all}>
                  <Image
                    alt=""
                    src="/water_splash_5010_dental_waterjet 1.svg"
                    width={214}
                    height={214}
                  />
                  <div className={Style.keenslider_texte}>
                    <div className={Style.keenslider_texte_baby}>
                      <p className={Style.keenslider_p}>
                        جرم گیر آبی واتر اسپلش مدل 5105
                      </p>
                      <div className={Style.keenslider_div_p}>
                        <div className={Style.keenslider_but}></div>
                        <p className={Style.keenslider_p1}>
                          قابلیت تنظیم فشار از روی دسته
                        </p>
                      </div>
                      <div className={Style.keenslider_div_p1}>
                        <div className={Style.keenslider_but}></div>
                        <p className={Style.keenslider_p1}>
                          قابلیت تنظیم فشار از روی دسته
                        </p>
                      </div>
                      <div className={Style.keenslider_div_pall}>
                        <p className={Style.keenslider_p2}>خرید محصول</p>
                        <Image
                          className={Style.keenslider_pic12}
                          alt=""
                          src="/Arrow-p_Left 3.svg"
                          width={14}
                          height={14}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`keen-slider__slide ${Style.number_slide5}`}>
                <div className={Style.keenslider_all}>
                  <Image
                    alt=""
                    src="/water_splash_5010_dental_waterjet 1.svg"
                    width={214}
                    height={214}
                  />
                  <div className={Style.keenslider_texte}>
                    <div className={Style.keenslider_texte_baby}>
                      <p className={Style.keenslider_p}>
                        جرم گیر آبی واتر اسپلش مدل 5105
                      </p>
                      <div className={Style.keenslider_div_p}>
                        <div className={Style.keenslider_but}></div>
                        <p className={Style.keenslider_p1}>
                          قابلیت تنظیم فشار از روی دسته
                        </p>
                      </div>
                      <div className={Style.keenslider_div_p1}>
                        <div className={Style.keenslider_but}></div>
                        <p className={Style.keenslider_p1}>
                          قابلیت تنظیم فشار از روی دسته
                        </p>
                      </div>
                      <div className={Style.keenslider_div_pall}>
                        <p className={Style.keenslider_p2}>خرید محصول</p>
                        <Image
                          className={Style.keenslider_pic12}
                          alt=""
                          src="/Arrow-p_Left 3.svg"
                          width={14}
                          height={14}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`keen-slider__slide ${Style.number_slide6}`}>
                <div className={Style.keenslider_all}>
                  <Image
                    alt=""
                    src="/water_splash_5010_dental_waterjet 1.svg"
                    width={214}
                    height={214}
                  />
                  <div className={Style.keenslider_texte}>
                    <div className={Style.keenslider_texte_baby}>
                      <p className={Style.keenslider_p}>
                        جرم گیر آبی واتر اسپلش مدل 5105
                      </p>
                      <div className={Style.keenslider_div_p}>
                        <div className={Style.keenslider_but}></div>
                        <p className={Style.keenslider_p1}>
                          قابلیت تنظیم فشار از روی دسته
                        </p>
                      </div>
                      <div className={Style.keenslider_div_p1}>
                        <div className={Style.keenslider_but}></div>
                        <p className={Style.keenslider_p1}>
                          قابلیت تنظیم فشار از روی دسته
                        </p>
                      </div>
                      <div className={Style.keenslider_div_pall}>
                        <p className={Style.keenslider_p2}>خرید محصول</p>
                        <Image
                          className={Style.keenslider_pic12}
                          alt=""
                          src="/Arrow-p_Left 3.svg"
                          width={14}
                          height={14}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {loaded && instanceRef.current && <></>}
            <button className={Style.keenslider_btn}>
              مشاهده بیشتر
              <Image alt="" src="/Arrow - Left 3.svg" width={14} height={14} />
            </button>
          </div>
        </div>
        {loaded && instanceRef.current && <div className="dots"></div>}
      </div>{" "}
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
