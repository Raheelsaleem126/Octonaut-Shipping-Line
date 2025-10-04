import Breadcumb from "@/components/common/Breadcumb"
import ServiceArea from "./ServiceArea"
import FooterTwo from "@/layouts/footers/FooterTwo"
import ScrollToTop from "@/components/common/ScrollToTop"
import HeaderTwo from "@/layouts/headers/HeaderTwo"

const Service = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderTwo />
         <main className="fix">
            <Breadcumb title="Our Services" sub_title="Services" />
            <ServiceArea />
         </main>
         <FooterTwo />
      </div>
   )
}

export default Service
