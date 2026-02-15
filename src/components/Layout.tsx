import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="fill-content">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
