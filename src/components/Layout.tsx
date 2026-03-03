import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import LoadingPage from "./LoadingPage";

export default function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setLoading(true);
      setTimeout(() => setLoading(false), 300);
    });
  }, [location]);

  return (
    <>
      {loading && <LoadingPage />}
      <Header />
      <div className="fill-content">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
