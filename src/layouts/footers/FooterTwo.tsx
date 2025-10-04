import Image from "next/image";
import Link from "next/link";
import service_data from "@/data/ServiceData";
import logo from "@/assets/img/logo/PNG A(1).png";
import shape_1 from "@/assets/img/images/inner_footer_shape01.svg";
import shape_2 from "@/assets/img/images/inner_footer_shape02.svg";

interface propsType {
  style?: boolean;
}

const FooterTwo = ({ style }: propsType) => {
  // Filter services for inner_page
  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  };
  const innerPageServices = service_data?.filter((item) => item.page === "inner_page") || [];

  return (
    <footer
      className={`footer__area-two fix ${style ? "footer__area-three" : ""}`}
      style={{ backgroundColor: "#000000" }}
    >
      <div className="container">
        <div className="footer__top">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-6">
              <div className="footer__widget">
                <div className="footer__logo">
                  <Link href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                </div>
                <div className="footer__content footer__content-two">
                  <p>
                    Octonaut Shipping Line — Navigating the world’s oceans with precision,
                    reliability, and a commitment to moving global trade forward
                  </p>
                </div>
                <div className="footer__social footer__social-two">
                  <ul className="list-wrap">
                    <li>
                      <Link href="https://www.facebook.com/" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com" target="_blank">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.whatsapp.com/" target="_blank">
                        <i className="fab fa-whatsapp"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/" target="_blank">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/" target="_blank">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="copyright-text copyright-text-two">
                  <p>
                    Copyright <Link href="/">Octonaut</Link> | All Right Reserved | 2025
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h4 className="footer__widget-title footer__widget-title-two">Our Services</h4>
                <div className="footer__link footer__link-two">
                  <ul className="list-wrap">
                    {innerPageServices.length > 0 ? (
                      innerPageServices.map((item) => (
                        <li key={item.id}>
                          <Link href={`/services-details/${generateSlug(item.title)}`}>{item.title}</Link>
                        </li>
                      ))
                    ) : (
                      <li>No services available</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h4 className="footer__widget-title footer__widget-title-two">Quick Links</h4>
                <div className="footer__link footer__link-two">
                  <ul className="list-wrap">
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/who-we-are">Who We Are</Link>
                    </li>
                    {/* <li><Link href="/pricing">Pricing</Link></li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer__widget">
                <h4 className="footer__widget-title footer__widget-title-two">Information</h4>
                <div className="footer__info-wrap footer__info-wrap-two">
                  <ul className="list-wrap">
                    <li>
                      <i className="flaticon-location-1"></i>
                      <p>
                        Tariq Road Dulara Building Office No # 101
                        <br /> Karachi, Pakistan
                      </p>
                    </li>
                    <li>
                      <i className="flaticon-telephone"></i>
                      <Link href="tel:0123456789">+92 3363860313</Link>
                    </li>
                    <li>
                      <i className="flaticon-time"></i>
                      <p>
                        Mon – Fri: 9:30 am – 7 pm, <br />
                        Saturday | Sunday: <span>CLOSED</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__shape footer__shape-two">
        <Image src={shape_1} alt="shape" data-aos="fade-down" data-aos-delay="400" />
        <Image src={shape_2} alt="shape" data-aos="fade-left" data-aos-delay="400" />
      </div>
    </footer>
  );
};

export default FooterTwo;