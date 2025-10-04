"use client";
import VideoPopup from "@/modals/VideoPopup";
import { useState } from "react";
import Image from "next/image";
import ServiceSidebar from "./ServiceSidebar";
import { useInView } from "react-intersection-observer";
import service_details2 from "@/assets/img/services/services_details_inner_img.jpg";
import { StaticImageData } from "next/image";

interface Service {
  slug: string;
  title: string;
  sub_title: string;
  description: string;
  img?: StaticImageData;
  details: {
    title: string;
    description: string;
    progress: { title: string; value: number }[];
    inner_title: string;
    inner_description: string;
    benefits: string[];
    faqs: { question: string; answer: string }[];
  };
}

interface Props {
  service: Service;
}

const ServiceDetailsArea = ({ service }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="services__details-area section-py-130">
        <div className="container">
          <div className="services__details-inner">
            <div className="row">
              <div className="col-70 order-0 order-lg-2">
                <div className="services__details-thumb">
                  <Image src={service.img ? service.img : service_details2} alt={service.title} />
                </div>
                <div className="services__details-content">
                  <h2 className="title">{service.title}</h2>
                  <p>{service.description}</p>
                  <div className="services__details-content-inner">
                    <div className="row align-items-end">
                      <div className="col-md-6">
                        <h2 className="title-two">{service.details.title}</h2>
                        <p>{service.details.description}</p>
                      </div>
                      <div className="col-md-6">
                        <div className="progress__wrap progress__wrap-three" ref={ref}>
                          {service.details.progress.map((item, index) => (
                            <div key={index} className="progress__item progress__item-three">
                              <div className="progress__item-top">
                                <h3 className="progress__title">{item.title}</h3>
                                <div className="progress-value">
                                  <span className="counter-number">{item.value}</span>%
                                </div>
                              </div>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: `${item.value}%`,
                                    animation: inView ? "animate-positive 1.8s" : "none",
                                    opacity: inView ? "1" : "0",
                                  }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <p>
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged.
                  </p> */}
                  <div className="services__details-content-inner-two">
                    <div className="row gutter-24">
                      <div className="col-44">
                        <div className="services__details-inner-img">
                          <Image src={service_details2} alt="img" />
                          {/* <a
                            onClick={() => setIsVideoOpen(true)}
                            style={{ cursor: "pointer" }}
                            className="play-btn popup-video"
                          >
                            <i className="fas fa-play"></i>
                          </a> */}
                        </div>
                      </div>
                      <div className="col-56">
                        <h2 className="title-two">{service.details.inner_title}</h2>
                        <p>{service.details.inner_description}</p>
                        <div className="about__list-box about__list-box-two about__list-box-three">
                          <ul className="list-wrap">
                            {service.details.benefits.map((benefit, index) => (
                              <li key={index}>
                                <i className="flaticon-check"></i>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <p>
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book has
                    survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged.
                  </p> */}
                  <div className="services__details-benefit">
                    <h2 className="title-two">Service Key Benefits</h2>
                    <p>{service.details.description}</p>
                    <div className="faq__wrap">
                      <div className="accordion" id="accordionExample">
                        {service.details.faqs.map((faq, index) => (
                          <div className="accordion-item" key={index}>
                            <h2 className="accordion-header">
                              <button
                                className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={`collapse${index}`}
                              >
                                {faq.question}
                              </button>
                            </h2>
                            <div
                              id={`collapse${index}`}
                              className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p>{faq.answer}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>
      <VideoPopup isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={"Ml4XCF-JS0k"} />
    </>
  );
};

export default ServiceDetailsArea;