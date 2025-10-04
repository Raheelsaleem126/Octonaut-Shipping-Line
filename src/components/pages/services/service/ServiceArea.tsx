import InjectableSvg from "@/components/common/InjectableSvg";
import service_data from "@/data/ServiceData";
import Image from "next/image";
import Link from "next/link";

const ServiceArea = () => {
  // Helper function to generate slug from title
  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  };

  return (
    <section className="services__area-five grey-bg section-pt-120 section-pb-90">
      <div className="container">
        <div className="row gutter-24 justify-content-center">
          {service_data
            .filter((items) => items.page === "inner_page")
            .map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="services__item-three">
                  <div className="services__thumb-three">
                    <Link href={`/services-details/${generateSlug(item.title)}`}>
                      <Image src={item.img ? item.img : ""} alt={item.title} />
                    </Link>
                    <Link
                      href={`/services-details/${generateSlug(item.title)}`}
                      className="btn border-btn"
                    >
                      Read More{" "}
                      <InjectableSvg
                        src="/assets/img/icon/right_arrow.svg"
                        alt=""
                        className="injectable"
                      />
                    </Link>
                  </div>
                  <div className="services__content-three">
                    <div className="services__icon-three">
                      <i className={item.icon}></i>
                    </div>
                    <h4 className="title">
                      <Link href={`/services-details/${generateSlug(item.title)}`}>
                        {item.title}
                      </Link>
                    </h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;