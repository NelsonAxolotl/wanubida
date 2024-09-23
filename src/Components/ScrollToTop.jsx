import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Défile vers le haut de la page
  }, [pathname]);

  return null;
};

export default ScrollToTop;
