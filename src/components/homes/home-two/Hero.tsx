"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import InjectableSvg from "@/components/common/InjectableSvg"
import Image from "next/image";
import Link from "next/link"

import shape from "@/assets/img/slider/slider_shape.svg"

interface DataType {
   id: number;
   img: string;
   title: string;
   desc: JSX.Element;
}

const hero_data: DataType[] = [
   {
      id: 1,
      img: "/assets/img/slider/slider_bg01.jpg",
      title: "Logistics & Cargo For Pro Business",
      desc: (<>when an unknown printer took a galley of type and company need scra make it better future to make attempt type specimen.</>)
   },
   {
      id: 2,
      img: "/assets/img/slider/slider_bg02.jpg",
      title: "We Deliver your Product Anywhere!",
      desc: (<>when an unknown printer took a galley of type and company need scra make it better future to make attempt type specimen.</>)
   },
];

const Hero = () => {
   return (
      <section className="slider__area">
         <Swiper
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 10000 }}
            modules={[EffectFade, Autoplay]}
            className="slider__active"
            effect="fade"   >
            {hero_data.map((item) => (
               <SwiperSlide key={item.id} className=" slider__single">
                  <div className="slider__bg" style={{ backgroundImage: `url(${item.img})` }}></div>
                  <div className="container">
              <div className="slider__content">
                <div className="row">
                  <div className="col-lg-6">
                    {/* Welcome text styled like button but stretched */}
                    <div
                      style={{
                        marginBottom: "15px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#001B90",
                          color: "white",
                          padding: "4px 40px",
                          borderRadius: "30px",
                          fontWeight: "500",
                          display: "inline-block",
                          border: "2px solid #001B90",
                          fontSize: "1rem",
                          textAlign: "center",
                          minWidth: "220px",
                        }}
                      >
                        Welcome To
                      </span>
                    </div>

                    {/* Brand name with gradient */}
                    <h2
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #FFA500 0%, #FFFFFF 50%, #001B90 50%, #FFFFFF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                        display: "inline-block",
                        fontSize: "3rem",
                        fontWeight: "900",
                        marginBottom: "20px",
                        // Shadow options:
                        filter: "drop-shadow(8px 8px 8px rgba(0,0,0,0.6))",
                      }}
                      className="title"
                    >
                      Octonaut
                    </h2>

                    {/* Tagline */}
                    <p
                      style={{
                        color: "#F5F5F5",
                        fontSize: "1.1rem",
                        lineHeight: "1.6",
                        marginBottom: "30px",
                      }}
                    >
                      Navigating global logistics with precision. <br />
                      We deliver smart, efficient, and dependable <br />
                      shipping solutions built for your business.
                    </p>

                    {/* Call to action button */}
                    <Link
                      href="/services"
                      className="btn"
                      style={{
                        backgroundColor: "#001B90",
                        color: "white",
                        padding: "12px 28px",
                        borderRadius: "30px",
                        fontWeight: "500",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        border: "2px solid #001B90",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#FFFFFF"; // hover white
                        e.currentTarget.style.color = "#001B90"; // navy text on hover
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#001B90"; // back to navy
                        e.currentTarget.style.color = "white"; // back to white text
                      }}
                    >
                      Explore Our Services
                      <InjectableSvg
                        src="/assets/img/icon/right_arrow.svg"
                        alt=""
                        className="injectable"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
                  <Image src={shape} alt="shape" className="shape" />
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   )
}

export default Hero
