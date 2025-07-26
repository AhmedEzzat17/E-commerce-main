import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePageContent from "../components/HomePageContent";
import ProductPage from "../pages/ProductPage";
import FullRecentProductsPage from "../pages/FullRecentProductsPage";
import ShoppingCartSection from "../pages/ShoppingCartSection";
import WishListSection from "../pages/WishListSection";
const Dashboard = lazy(() => import("../A-Dashboard/Dashboard"));
const UserShow = lazy(() => import("../A-Dashboard/users/UserShow"));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePageContent />} />
    <Route path="/productPage" element={<ProductPage />} />
    <Route
      path="/FullRecentProductsPage"
      element={<FullRecentProductsPage />}
    />
    <Route path="/ShoppingCartSection" element={<ShoppingCartSection />} />
    <Route path="/WishListSection" element={<WishListSection />} />
    <Route
      path="/Dashboard/*"
      element={
        <Suspense fallback={<div>جارٍ التحميل...</div>}>
          <Dashboard />
        </Suspense>
      }
    >
      <Route
        path="UserShow"
        element={
          <Suspense fallback={<div>جارٍ التحميل...</div>}>
            <UserShow />
          </Suspense>
        }
      />
    </Route>
  </Routes>
);

export default AppRoutes;
