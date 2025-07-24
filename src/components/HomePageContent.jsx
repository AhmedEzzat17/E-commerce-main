import React from "react";
import Billboard from "./Billboard/Billboard";
import RecentProducts from "./RecentProducts/RecentProducts";
import Categories from "./Categories/Categories";
import MostDemandedProducts from "./MostDemandedProducts/MostDemandedProducts";
import Features from "./Features/Features";
import Testimonials from "./Testimonials/Testimonials";

export default function HomePageContent() {
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