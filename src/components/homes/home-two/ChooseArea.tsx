import Image from "next/image"
import InjectableSvg from "@/components/common/InjectableSvg"
import Link from "next/link"

import about_img1 from "@/assets/img/images/h2_choose_img.jpg"
// import about_img2 from "@/assets/img/images/choose_logo.svg"
// import shape from "@/assets/img/images/choose_shape.svg"

const ChooseArea = () => {
   return (
      <section className="choose__area-two section-py-120">
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-lg-5 col-md-8">
                  <div className="choose__img-two">
                     <div className="main-img wow img-custom-anim-left animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                        <Image src={about_img1} alt="img" />
                     </div>
                     {/* <Image src={about_img2} alt="shape" className="shape" /> */}
                  </div>
               </div>
               <div className="col-lg-7">
                  <div className="choose__content-two">
                     <div className="section__title mb-15">
                        <span className="sub-title">Why Choose Us</span>
                        <h2 className="title">Your Trusted Partner in Global NVOCC Shipping & Logistics</h2>
                     </div>
                     <p>
                        At <strong>Octaunot</strong>, we specialize in delivering seamless NVOCC shipping and logistics 
                        solutions worldwide. With a strong global network and years of experience, we ensure every 
                        shipment is handled with reliability, efficiency, and care.
                     </p>
                     <div className="choose__list-wrap">
                        <div className="row gutter-20">
                           <div className="col-md-6">
                              <div className="choose__list-item">
                                 <div className="icon">
                                    <i className="flaticon-planet-earth icon-blue"></i>
                                 </div>
                                 <div className="content">
                                    <h5 className="title">Worldwide Services</h5>
                                    <p>Strong international presence with trusted partners across major trade routes.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="choose__list-item">
                                 <div className="icon">
                                    <i className="flaticon-truck"></i>
                                 </div>
                                 <div className="content">
                                    <h5 className="title"> On-Time Delivery</h5>
                                    <p>We prioritize secure handling and timely transportation for every shipment.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="choose__content-inner">
                        <div className="about__list-box about__list-box-three">
                           <ul className="list-wrap">
                              <li><i className="flaticon-check"></i>Reliable Global Network</li>
                              <li><i className="flaticon-check"></i>Advanced Logistics Solutions</li>
                              <li><i className="flaticon-check"></i>Commitment to Customer Satisfaction</li>
                           </ul>
                        </div>
                        <p>
                           Backed by modern systems and a customer-first approach, we make global shipping simpler, 
                           faster, and more dependable for businesses across industries.
                        </p>
                     </div>
                     <Link href="/contact" className="btn">Request a Quote <InjectableSvg src="/assets/img/icon/right_arrow.svg" alt="" className="injectable" /></Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="choose__shape">
            {/* <Image src={shape} alt="shape" data-aos="fade-left" data-aos-delay="400" /> */}
         </div>
      </section>
   )
}

export default ChooseArea
