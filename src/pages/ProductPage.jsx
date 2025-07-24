import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// لا نحتاج لاستيراد Navbar أو Footer هنا لأن App.js يقوم بتضمينهما عالمياً
// import Navbar from '../../Navbar.jsx'; 
import ProductDetails from '../components/ProductDetails/ProductDetails'; // المسار صحيح لأنهما في نفس المجلد
import MostDemandedProducts from '../components/MostDemandedProducts/MostDemandedProducts'; // تأكد من المسار الصحيح
// import FAQSection from '../FAQSection'; // تأكد من المسار الصحيح
// import ContactSection from '../ContactSection'; // تأكد من المسار الصحيح
// import Footer from '../../components/Footer'; 
import '../assets/css/style.css';
import '../assets/js/main.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


function ProductPage() { // تم تغيير اسم الدالة ليتوافق مع اصطلاحات React (PascalCase)
  return (
    <div>
      <ProductDetails/>
      <MostDemandedProducts title="قد يعجبك ايضا" />
      {/* <FAQSection />
      <ContactSection /> */}
    </div>
  );
}

export default ProductPage;