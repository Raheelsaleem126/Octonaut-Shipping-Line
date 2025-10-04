import Link from "next/link"
import ContactForm from "../form/ContactForm"

const ContactArea = () => {
   return (
      <section className="contact__area section-py-120">
         <div className="container">
            <div className="row">
               <div className="col-12">
                <div className="contact-map contact-map-two">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12947.103829294806!2d55.2818996!3d25.191884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f690035a22c95%3A0xbbc2365326a0d1aa!2sEmpire%20Heights%20Tower%20A!5e0!3m2!1sen!2sbd!4v1697163200000!5m2!1sen!2sbd"
    style={{ border: "0", width: "100%", height: "400px" }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

               </div>
            </div>
            <div className="row">
               {/* <div className="col-lg-4 col-sm-6">
                  <div className="contact__info-item">
                     <h4 className="title">Office in New York</h4>
                     <p className="info-one">58 Street Commercial Road Fratton, <br/> Australia</p>
                     <h4 className="title"><Link href="tel:0123456789">+(09) 3456 7890</Link></h4>
                     <p className="info-two">Monday – Friday: 9:00-20:00 <br/> Saturday: 11:00 – 15:00</p>
                     <Link href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</Link>
                  </div>
               </div> */}
               <div className="col-lg-4 col-sm-6">
                  <div className="contact__info-item">
                     <h4 className="title">Office in Karachi,Pakistan</h4>
                     <p className="info-one">Tariq Road Dulara Building Office No # 101
Karachi, Pakistan</p>
                     <h4 className="title"><Link href="tel:0123456789">+92 3363860313</Link></h4>
                     <p className="info-two">Monday – Friday: 9:00-8:00 </p>
                     <Link href="mailto:contactinfo@gmail.com">www.octonaut-line.com</Link>
                  </div>
               </div>
               <div className="col-lg-4 col-sm-6">
                  <div className="contact__info-item">
                     <h4 className="title">Office In Dubai</h4>
                     <p className="info-one">Empire Heights A - 16F - A - 04 Business <br/> Bay</p>
                     <h4 className="title"><Link href="tel:0123456789">+92 3363860313</Link></h4>
                     <p className="info-two">Monday – Friday: 9:00-8:00 </p>
                     <Link href="mailto:contactinfo@gmail.com">www.octonaut-line.com</Link>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-12">
                  <div className="contact__form-wrap">
                     <h2 className="title">Send Us Message</h2>
                     <ContactForm />
                     <p className="ajax-response mb-0"></p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ContactArea
