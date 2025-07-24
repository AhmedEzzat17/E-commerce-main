import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import '../../assets/css/style.css';
import img1 from '../../assets/images/z67vtaB9KUhN89fvJVXAuz5RrvuSsGKv3oZVocWW.webp';
import img2 from '../../assets/images/60qIw5HjeWOlwHcA16C5pLS7zRGFSH58Pix3mI9h.webp';
import img3 from '../../assets/images/yCBpE03GZbIojSNmgUPtLQqeyhsJZlMGlVadqQ0O.jpg';
import img4 from '../../assets/images/RQkLcoyAoCByPWP5wFnJD5tMLV463ZqPh1UqftSC.webp';

export default function MostDemandedProducts({ title = "الأكثر طلباً" }) {
  useEffect(() => {
    // تفعيل التولتيب الخاص بـ Bootstrap
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const products = [
    {
      id: 1,
      img: img1,
      price: "80ر.س",
      title: "علب كرافت ورقية مع غطاء سحاب شفاف ثلجي غير شفاف (12 حبة)",
      discount: "10% خصم",
    },
    {
      id: 2,
      img: img2,
      price: "70ر.س",
      title: "علب كرافت ورقية مع غطاء سحاب شفاف ثلجي غير شفاف (12 حبة)",
    },
    {
      id: 3,
      img: img3,
      price: "87ر.س",
      title: "علب كرافت ورقية مع غطاء سحاب شفاف ثلجي غير شفاف (12 حبة)",
    },
    {
      id: 4,
      img: img4,
      price: "80ر.س",
      title: "علب كرافت ورقية مع غطاء سحاب شفاف ثلجي غير شفاف (12 حبة)",
      discount: "10% خصم",
    },
    {
      id: 5,
      img: img1,
      price: "70ر.س",
      title: "علب كرافت ورقية مع غطاء سحاب شفاف ثلجي غير شفاف (12 حبة)",
    },
    {
      id: 6,
      img: img1,
      price: "87ر.س",
      title: "علب كرافت ورقية مع غطاء سحاب شفاف ثلجي غير شفاف (12 حبة)",
    },
  ];

  return (
    <section id="best-selling" className="position-relative py-5">
      {/* SVG Sprite */}
      <svg style={{ display: "none" }}>
        <symbol id="cart" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 
             0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7.2 
             12l.94-2h8.17c.75 0 1.41-.41 1.75-1.03l3.58-6.49a.996.996 0 
             10-1.74-.96L16.42 8H8.53l-1.1-2H2v2h3.6l1.86 4-1.35 2.44C5.16 
             15.28 6.48 18 8.5 18h11v-2H8.42c-.14 0-.25-.11-.25-.25 0-.04.01-.08.02-.11L7.2 12z"
          />
        </symbol>

        <symbol id="heart" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
             2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 
             2.09C13.09 4.01 14.76 3 16.5 3 
             19.58 3 22 5.42 22 8.5c0 3.78-3.4 
             6.86-8.55 11.54L12 21.35z"
          />
        </symbol>

        <symbol
          id="alt-arrow-left-outline"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14 7l-5 5 5 5V7z" />
        </symbol>

        <symbol
          id="alt-arrow-right-outline"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10 17l5-5-5-5v10z" />
        </symbol>
      </svg>

      <div className="container">
        <div className="section-title d-md-flex justify-content-between align-items-center mb-4">
          <div>
            <h3 className="d-flex align-items-center" data-aos="fade-down">{title}</h3>
            <div className="title-underline mx-auto" data-aos="fade-down"></div>
          </div>
          <a href="./Most/index.html" className="btn" data-aos="fade-down">
            <span>عرض الكل</span>
          </a>
        </div>

        {/* <div
          className="position-absolute top-50 end-0 pe-0 pe-xxl-5 me-0 me-xxl-5 swiper-next product-slider-button-next"
          style={{ zIndex: 100 }}
        >
          <svg
            className="chevron-forward-circle d-flex justify-content-center align-items-center p-2"
            width="80"
            height="80"
          >
            <use xlinkHref="#alt-arrow-right-outline"></use>
          </svg>
        </div>

        <div
          className="position-absolute top-50 start-0 ps-0 pe-xxl-5 ms-0 ms-xxl-5 swiper-prev product-slider-button-prev"
          style={{ zIndex: 100 }}
        >
          <svg
            className="chevron-back-circle d-flex justify-content-center align-items-center p-2"
            width="80"
            height="80"
          >
            <use xlinkHref="#alt-arrow-left-outline"></use>
          </svg>
        </div> */}

        <Swiper
          modules={[Navigation, Autoplay]}
           data-aos="fade-up"
          navigation={{
            nextEl: ".product-slider-button-next",
            prevEl: ".product-slider-button-prev",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            660: { slidesPerView: 3 },
            980: { slidesPerView: 4 },
            1500: { slidesPerView: 5 },
          }}
          className="product-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="card position-relative border rounded-3 p-4">
                {product.discount && (
                  <div className="position-absolute">
                    <p className="bg-primary py-1 px-3 fs-6 text-white rounded-2">
                      {product.discount}
                    </p>
                  </div>
                )}
                <img
                  src={product.img}
                  className="img-fluid shadow-sm"
                  alt="product item"
                />
                <h6 className="mt-4 mb-0 fw-bold">
                  <a href="index.html">{product.title}</a>
                </h6>
                <div className="review-content d-flex"></div>
                <span className="price text-primary fw-bold mb-2 mt-3 fs-5">
                  {product.price}
                </span>
                <div className="card-concern position-absolute start-0 end-0 d-flex gap-2">
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Tooltip on top"
                  >
                    <svg className="cart">
                      <use xlinkHref="#cart"></use>
                    </svg>
                  </button>
                  <a href="#" className="btn btn-dark">
                    <span>
                      <svg className="wishlist">
                        <use xlinkHref="#heart"></use>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
