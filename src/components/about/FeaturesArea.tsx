import Image from "next/image"
import shape from "@/assets/img/images/features_shape.png"

const FeaturesArea = () => {
   const services = [
      {
         title: "Automotives",
         desc: "Efficient logistics solutions powering automotive trade.",
         img: "/assets/img/new images/automotives.png",
         number: "01",
      },
      {
         title: "Mining",
         desc: "Reliable transport services supporting mining trade.",
         img: "/assets/img/new images/Mining (1).png",
         number: "02",
      },
      {
         title: "Machinery",
         desc: "Secure freight solutions simplifying machinery trade.",
         img: "/assets/img/new images/machinery.png",
         number: "03",
      },
      {
         title: "Power",
         desc: "Trusted logistics services supporting power trade.",
         img: "/assets/img/new images/power.png",
         number: "04",
      },
      {
         title: "Steel",
         desc: "Reliable freight solutions powering global steel trade.",
         img: "/assets/img/new images/steel.png",
         number: "05",
      },
      {
         title: "Oil",
         desc: "Efficient logistics services powering oil trade.",
         img: "/assets/img/new images/oil.png",
         number: "06",
      },
      {
         title: "Energy",
         desc: "Global freight services supporting energy trade.",
         img: "/assets/img/new images/power.png",
         number: "07",
      },
      {
         title: "Cement",
         desc: "Reliable logistics services powering cement trade.",
         img: "/assets/img/new images/cement.png",
         number: "08",
      },
      {
         title: "Health",
         desc: "Trusted freight solutions supporting healthcare trade.",
         img: "/assets/img/new images/health.png",
         number: "09",
      },
      
      {
         title: "Pharmaceutical",
         desc: "Global freight services supporting energy trade.",
         img: "/assets/img/new images/pharmaceutical.png",
         number: "07",
      },
      {
         title: "Manufacturing",
         desc: "Reliable logistics services powering cement trade.",
         img: "/assets/img/new images/manufacturing.png",
         number: "08",
      },
      {
         title: "Construction",
         desc: "Trusted freight solutions supporting healthcare trade.",
         img: "/assets/img/new images/construction.png",
         number: "09",
      }
   ]

   return (
      <section className="features__area section-pb-90">
         <div className="container">
            <div className="row justify-content-center gutter-24">
               {services.map((service, index) => (
                  <div
                     className="col-lg-4 col-md-6"
                     data-aos="fade-up"
                     // data-aos-delay={}
                     key={index}
                  >
                     <div className="features__item">
                        <div className="features__icon">
                           <Image
                              src={service.img}
                              alt={service.title}
                              width={350}   // Bigger but not full 530px
                              height={350}  // Keeps ratio close to 530x300
                              style={{
                                 objectFit: "contain",
                                 borderRadius: "12px", // optional rounded look
                              }}
                           />
                        </div>
                        <div className="features__content">
                           <h2 className="title">{service.title}</h2>
                           <p>{service.desc}</p>
                           <h2 className="number">{service.number}</h2>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="features__shape">
            <Image
               src={shape}
               alt="shape"
               data-aos="fade-left"
               data-aos-delay="400"
            />
         </div>
      </section>
   )
}

export default FeaturesArea
