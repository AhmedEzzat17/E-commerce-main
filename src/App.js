import React, { lazy, Suspense, useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// AOS library
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from "./components/Navbar/Navbar";
import Billboard from "./components/Billboard/Billboard";
import RecentProducts from "./components/RecentProducts/RecentProducts";
import Categories from "./components/Categories/Categories";
import MostDemandedProducts from "./components/MostDemandedProducts/MostDemandedProducts";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQSection from "./components/FAQSection/FAQSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";
import ProductPage from "./pages/ProductPage";
import FullRecentProductsPage from "./pages/FullRecentProductsPage";
import AppRoutes from "./router/index";
const Dashboard = lazy(() => import("./A-Dashboard/Dashboard"));



function HomePageContent() {
  return (
    <>
      <Billboard />
      <RecentProducts />
      <Categories />
      <MostDemandedProducts title="الأكثر طلباً" />
      <MostDemandedProducts title="مستلزمات الأكياس" />
      <MostDemandedProducts title="مستلزمات التغليف" />
      <MostDemandedProducts title="مستلزمات الأكسسوارات" />
      <Features />
      <Testimonials />
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/Dashboard";

  return (
    <>
      {!isDashboardPage && <Navbar />}
      <AppRoutes />
      {!isDashboardPage && (
        <>
          <FAQSection />
          <ContactSection />
          <Footer />
          <FloatingButtons />
        </>
      )}
    </>
  );
}

function App() {

  useEffect(() => {
    AOS.init({ duration: 1500, once: false, });
  }, []);


  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
