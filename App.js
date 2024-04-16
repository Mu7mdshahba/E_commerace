import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";

const App = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    ScrollReveal({
      reset: true,
      distance: "60px",
      duration: 2500,
      delay: 100
    });
    ScrollReveal().reveal(".main");
    ScrollReveal().reveal(".reveal", { delay: 400, origin: "top" });
    ScrollReveal().reveal(".reveal0", { delay: 1500 });
    // Other ScrollReveal configurations...

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 400) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  const handleProductClick = () => {
    window.open(
      "file:///D:/shahba/Mu7md%20shahba/newPort/payment/payment.html",
      "_blank"
    );
  };

  return (
    <div>
      {/* Your JSX content here */}
      {showBtn && (
        <button id="btn" onClick={scrollToTop}>
          Scroll to Top
        </button>
      )}

      <div className="main">Main content</div>
      <nav style={{ opacity: 1 }}>Logo</nav>
      <ul style={{ opacity: 1 }}>List items</ul>
      <div className="textArea" style={{ opacity: 1 }}>
        Text area
      </div>

      <div className="projectcard" onClick={handleProductClick}>
        Product Card
      </div>
    </div>
  );
};

export default App;
