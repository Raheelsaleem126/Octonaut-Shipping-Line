import Breadcumb from "@/components/common/Breadcumb"
import ScrollToTop from "@/components/common/ScrollToTop"
import FooterTwo from "@/layouts/footers/FooterTwo"
import ContactArea from "./ContactArea"
import HeaderTwo from "@/layouts/headers/HeaderTwo"

const Contact = () => {
   return (
      <div className="theme-red">
         <ScrollToTop />
         <HeaderTwo />
         <main className="fix">
            <Breadcumb title="Contact Us" sub_title="Contact" />
            <ContactArea />
         </main>
         <FooterTwo />
      </div>
   )
}

export default Contact
