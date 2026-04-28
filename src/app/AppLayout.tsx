import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StickyMobileCTA from "../components/layout/StickyMobileCTA";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-cyan/30">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}