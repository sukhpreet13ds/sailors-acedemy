import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Set browser scroll restoration to manual to prevent keeping old scroll offsets
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Instantly scroll to the top of the page on route change
    window.scrollTo(0, 0);

    // Double check after DOM render frame
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);

      // Trigger scroll-reveal animations for hero elements at the top of the page
      const revealEls = document.querySelectorAll(".scroll-reveal");
      revealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add("animate__animated", "animate__fadeInUp");
        }
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
