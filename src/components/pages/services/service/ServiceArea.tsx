import InjectableSvg from "@/components/common/InjectableSvg"
import service_data from "@/data/ServiceData"
import Image from "next/image"
import Link from "next/link"

const ServiceArea = () => {
  return (
    <section className="services__area-five grey-bg section-pt-120 section-pb-90">
      <div className="container">
        <div className="row gutter-24 justify-content-center">
          {service_data.filter((items) => items.page === "inner_page").map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="services__item-three">
                <div className="services__thumb-three">
                  <Link href="/services-details"><Image src={item.img ? item.img : ""} alt="img" /></Link>
                  <Link href="/services-details" className="btn border-btn">Read More <InjectableSvg src="/assets/img/icon/right_arrow.svg" alt="" className="injectable" /></Link>
                </div>
                <div className="services__content-three">
                  <div className="services__icon-three">
                    <i className="flaticon-ship"></i>
                  </div>
                  <h4 className="title"><Link href="/services-details">Ocean Freight</Link></h4>
                  <p>Road transpo arer tation criucial follw roley Logistins coordinated trans portatn the countries destination.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceArea
