import React from 'react'

const Counter = () => {
   return (
      <section className="counter__area counter__bg section-pt-120 section-pb-90" data-background="assets/img/bg/vector_bg05.svg">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-sm-6">
                  <div className="counter__item-two">
                     {/* <div className="counter__icon-two">
                        <i className="flaticon-air-plane"></i>
                     </div> */}
                     <div className="counter__content-two">
                        <h2 className="count"><span className="counter-number">100</span>+</h2>
                        <p>Trusted Agents</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <div className="counter__item-two">
                     {/* <div className="counter__icon-two">
                        <i className="flaticon-parcels"></i>
                     </div> */}
                     <div className="counter__content-two">
                        <h2 className="count"><span className="counter-number">80</span>+</h2>
                        <p>Operating Ports</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <div className="counter__item-two">
                     {/* <div className="counter__icon-two">
                        <i className="flaticon-parcel"></i>
                     </div> */}
                     <div className="counter__content-two">
                        <h2 className="count"><span className="counter-number">15</span>+</h2>
                        <p>Years of Experience</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-3 col-sm-6">
                  <div className="counter__item-two">
                     {/* <div className="counter__icon-two">
                        <i className="flaticon-protected"></i>
                     </div> */}
                     <div className="counter__content-two">
                        <h2 className="count"><span className="counter-number">95</span>%</h2>
                        <p>Secure Parcel</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Counter
