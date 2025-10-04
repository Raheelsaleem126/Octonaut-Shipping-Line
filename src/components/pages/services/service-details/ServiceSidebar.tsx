import Image from "next/image";
import Link from "next/link";
import service_data from "@/data/ServiceData";
import sevice_details1 from "@/assets/img/logo/octonaut-logo(1).png";
import InjectableSvg from "@/components/common/InjectableSvg";

interface Props {
  currentSlug?: string; // Optional prop to highlight active service
}

// Map service titles to their respective icons
const serviceIcons: { [key: string]: string } = {
  "Ocean Freight": "flaticon-ship",
  "Road Freight": "flaticon-truck",
  "Air Freight": "flaticon-air-freight",
  "Train Freight": "flaticon-train",
  "Modern Storage": "flaticon-delivery-cart",
  "House Shifting": "flaticon-delivery-man",
};

const ServiceSidebar = ({ currentSlug }: Props) => {
  // Helper function to generate slug from title
  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  };

  return (
    <div className="col-30">
      <aside className="services__sidebar">
        <div className="services__widget">
          <div className="services__cat-list">
            <ul className="list-wrap">
              {service_data
                .filter((items) => items.page === "inner_page")
                .map((item) => (
                  <li key={item.id} className={generateSlug(item.title) === currentSlug ? "active" : ""}>
                    <Link href={`/services-details/${generateSlug(item.title)}`}>
                      <span>
                        <i className={serviceIcons[item.title] || "flaticon-ship"}></i>
                        {item.title}
                      </span>
                      <i className="flaticon-right-arrow"></i>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="services__widget services__widget-two">
          <div className="sidebar__logo">
            <Link href="/">
              <Image src={sevice_details1} alt="logo" />
            </Link>
          </div>
          <div className="sidebar__contact">
            <h2 className="title">
              Logistics & Cargo <br /> for Business
            </h2>
            <Link href="tel:1235658901" className="sidebar__phone">
              <i className="flaticon-telephone"></i>(+92) 3000721243
            </Link>
            <Link href="/contact" className="btn">
              Contact With us{" "}
              <InjectableSvg
                src="/assets/img/icon/right_arrow.svg"
                alt=""
                className="injectable"
              />
            </Link>
          </div>
          <div
            className="sidebar__shape"
            style={{ backgroundImage: `url(/assets/img/services/services_sidebar_shape.png)` }}
          ></div>
        </div>
        <div className="services__widget services__widget-three">
          <h4 className="sidebar__widget-title">Brochure</h4>
          <div className="sidebar__brochure">
            <p>when an unknown printer took a galley of type and scrambled it.</p>
            <Link href="/assets/img/services/services_img01.jpg" target="_blank" download>
              <InjectableSvg src="/assets/img/icon/pdf.svg" alt="" className="injectable" />
              PDF. Download
            </Link>
            <Link href="/assets/img/services/services_img01.jpg" target="_blank" download>
              <InjectableSvg src="/assets/img/icon/doc.svg" alt="" className="injectable" />
              DOC. Download
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ServiceSidebar;