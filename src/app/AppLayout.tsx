import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StickyMobileCTA from "../components/layout/StickyMobileCTA";
import ScrollToTop from "../components/layout/ScrollToTop";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-cyan/30">
      <Navbar />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}