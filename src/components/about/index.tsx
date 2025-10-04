import FooterTwo from "@/layouts/footers/FooterTwo"
import Breadcumb from "../common/Breadcumb"
import Brand from "../homes/home-one/Brand"
// import Testimonial from "../homes/home-one/Testimonial"
// import Team from "../homes/home-three/Team"
import AboutComponent from "../homes/home-two/About"
import Counter from "./Counter"
import FeaturesArea from "./FeaturesArea"
// import Pricing from "./Pricing"
import VideoArea from "./VideoArea"
import ScrollToTop from "../common/ScrollToTop"
import HeaderTwo from "@/layouts/headers/HeaderTwo"
import BannerSection from "../information-banner"

const About = () => {
   return (
      <div className="theme-red">
         <HeaderTwo />
         <ScrollToTop />
         <main className="fix">
            <Breadcumb sub_title="About Us" title="About Us" />
            <AboutComponent />
            <FeaturesArea />
            <VideoArea />
            <Counter />
            {/* <Pricing /> */}
            {/* <Team style={false} /> */}
            {/* <Testimonial style={true} /> */}
            <BannerSection/>
            <Brand />
            <FooterTwo />
         </main>
      </div>
   )
}

export default About
