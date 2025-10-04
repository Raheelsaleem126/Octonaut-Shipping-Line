import InjectableSvg from "@/components/common/InjectableSvg"
import Image from "next/image"
import Link from "next/link"
import Count from "@/components/common/Count"

import about_img1 from "@/assets/img/images/h2_about_img01.jpg"
import about_img2 from "@/assets/img/images/h2_about_img02.jpg"
import about_img3 from "@/assets/img/images/h2_about_img03.jpg"

const AboutComponent = () => {
   return (
      <section className="about__area-three section-py-120">
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-lg-6 col-md-9">
                  <div className="about__img-three">
                     <Image src={about_img1} alt="Octaunot Shipping" data-aos="fade-right" data-aos-delay="200" />
                     <Image src={about_img2} alt="Octaunot Logistics" data-aos="fade-left" data-aos-delay="400" />
                     <Image src={about_img3} alt="Octaunot Transport" data-aos="fade-up" data-aos-delay="600" />
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="about__content-three">
                     <div className="section__title mb-20">
                        <span className="sub-title">About Octaunot</span>
                        <h2 className="title">Your Trusted Partner in Global NVOCC Shipping & Logistics</h2>
                     </div>
                   <p>
   At <strong>Octaunot</strong>, we are your trusted partner in global NVOCC shipping and logistics. With years of 
   expertise and a strong worldwide network, we deliver reliable and cost-effective solutions that simplify 
   international trade, allowing businesses to focus on growth while we manage the logistics.
</p>
<p>
   Serving industries such as mining, automotive, machinery, oil & gas, energy, cement, and steel, we are built on 
   trust, reliability, and customer satisfaction. <strong>Octaunot</strong> continues to connect businesses across 
   borders with seamless NVOCC shipping and logistics solutions worldwide.
</p>

                     <div className="about__content-inner-two">
                        <div className="counter__wrap counter__wrap-two">
                           <div className="counter__item counter__item-three">
                              <div className="counter__icon counter__icon-three">
                                 <i className="flaticon-package icon-blue"></i>
                              </div>
                              <div className="counter__content counter__content-three">
                                 <h2 className="count"><span className="counter-number"><Count number={120} /></span>K</h2>
                                 <p>Delivered Shipments</p>
                              </div>
                           </div>
                           <div className="counter__item counter__item-three">
                              <div className="counter__icon counter__icon-three">
                                 <i className="flaticon-planet-earth icon-blue"></i>
                              </div>
                              <div className="counter__content counter__content-three">
                                 <h2 className="count"><span className="counter-number"><Count number={500} /></span>+</h2>
                                 <p>Clients Worldwide</p>
                              </div>
                           </div>
                        </div>
                        <div className="about__list-box about__list-box-five">
                           <ul className="list-wrap">
                              <li><i className="flaticon-check icon-blue"></i>Trusted Global Network</li>
                              <li><i className="flaticon-check icon-blue"></i>Tailored Shipping Solutions</li>
                              <li><i className="flaticon-check icon-blue"></i>Expert Industry Knowledge</li>
                              <li><i className="flaticon-check icon-blue"></i>Reliable & On-Time Deliveries</li>
                           </ul>
                        </div>
                     </div>
                     <Link href="/services" className="btn">
                        Explore Our Services{" "}
                        <InjectableSvg src="/assets/img/icon/right_arrow.svg" alt="" className="injectable" />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default AboutComponent
