import Image from "next/image"
import banner from "@/assets/img/banner/business-card.jpg" // put your uploaded image here

export default function BannerSection() {
  return (
    <section
      style={{
        padding: "80px 0", // top & bottom spacing
        backgroundColor: "#f9fafb",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px", // limit max size of the banner
          width: "100%", // responsive width
          margin: "0 auto",
        }}
      >
        <Image
          src={banner}
          alt="Business Banner"
          style={{
            borderRadius: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            width: "100%", // responsive scaling
            maxHeight: "450px", // keeps aspect ratio
          }}
        />
      </div>
    </section>
  )
}
