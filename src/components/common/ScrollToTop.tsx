"use client"
import UseSticky from "@/hooks/UseSticky";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const { sticky }: { sticky: boolean } = UseSticky();

  const [showScroll, setShowScroll] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <>
      {showScroll && (
        <button
          onClick={scrollTop}
          className={`scroll__top scroll-to-target ${sticky ? "open" : ""}`}
          data-target="html"
          style={{
            backgroundColor: "#001B90", // blue background
            color: "white", // makes the icon white
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
        >
          <i className="tg-flaticon-arrowhead-up" style={{ color: "white", fontSize: "20px" }}></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
