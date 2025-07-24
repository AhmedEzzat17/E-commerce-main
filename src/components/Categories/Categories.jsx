import React, { useEffect } from "react";
import '../../assets/css/style.css';
import img1 from '../../assets/images/eCP43NJELbYkzuYC2hzi2sL9iUu6TjCZbAX8hQJe.webp';
import img2 from '../../assets/images/yCBpE03GZbIojSNmgUPtLQqeyhsJZlMGlVadqQ0O.jpg';
import img3 from '../../assets/images/z67vtaB9KUhN89fvJVXAuz5RrvuSsGKv3oZVocWW - Copy.webp';
import img4 from '../../assets/images/z67vtaB9KUhN89fvJVXAuz5RrvuSsGKv3oZVocWW.webp';
import img5 from '../../assets/images/60qIw5HjeWOlwHcA16C5pLS7zRGFSH58Pix3mI9h.webp';

export default function Categories() {
  useEffect(() => {
    const scrollContainer = document.querySelector(
      ".category-scroll-container"
    );
    let isDown = false;
    let startX;
    let scrollLeft;

    if (!scrollContainer) return;

    const mouseDownHandler = (e) => {
      isDown = true;
      scrollContainer.classList.add("active");
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const mouseLeaveHandler = () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    };

    const mouseUpHandler = () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    };

    const mouseMoveHandler = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener("mousedown", mouseDownHandler);
    scrollContainer.addEventListener("mouseleave", mouseLeaveHandler);
    scrollContainer.addEventListener("mouseup", mouseUpHandler);
    scrollContainer.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      scrollContainer.removeEventListener("mousedown", mouseDownHandler);
      scrollContainer.removeEventListener("mouseleave", mouseLeaveHandler);
      scrollContainer.removeEventListener("mouseup", mouseUpHandler);
      scrollContainer.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <section className="categories-section" id="categories" data-aos="fade-down">
      <div className="container">
        <div className="section-header" data-aos="fade-down">
          <h2>الأقسام</h2>
          <p>مناسب مختلف المجالات</p>
          <div className="title-underline mx-auto" data-aos="fade-down"></div>
        </div>

        <div className="category-gallery-sidebar" data-aos="fade-up">
          <div className="category-scroll-container" data-aos="fade-up">
            <div className="category-thumbnail-item category-item">
              <div className="category-icon-wrapper">
                <img
                  src={img1}
                  alt="Food & Drink Packaging"
                />
              </div>
              <h4>تغليف الأطعمة و المشروبات</h4>
              <p>اكتشف تشكيلتنا المميزة من حلول تغليف الأطعمة والمشروبات.</p>
            </div>

            <div className="category-thumbnail-item category-item">
              <div className="category-icon-wrapper">
                <img
                  src={img2}
                  alt="Paper Packaging"
                />
              </div>
              <h4>تغليف ملابس</h4>
              <p>
                مستلزمات تغليف الملابس من أكياس سيلوفان وورق تغليف
                والمزيد.
              </p>
            </div>
            <div className="category-thumbnail-item category-item">
              <div className="category-icon-wrapper">
                <img
                  src={img3}
                  alt="Food & Drink Packaging"
                />
              </div>
              <h4>كراتين شحن</h4>
              <p>كراتين شحن تغليف لمناسب جميع المجالات</p>
            </div>

            <div className="category-thumbnail-item category-item">
              <div className="category-icon-wrapper">
                <img
                  src={img4}
                  alt="Paper Packaging"
                />
              </div>
              <h4>علب هدايا</h4>
              <p>علب تغليف وتوزيعات هدايا لمختلف المجالات</p>
            </div>
            <div className="category-thumbnail-item category-item">
              <div className="category-icon-wrapper">
                <img
                  src={img5}
                  alt="Food & Drink Packaging"
                />
              </div>
              <h4>تغليف الأطعمة و المشروبات</h4>
              <p>اكتشف تشكيلتنا المميزة من حلول تغليف الأطعمة والمشروبات.</p>
            </div>

            <div className="category-thumbnail-item category-item">
              <div className="category-icon-wrapper">
                <img
                  src={img5}
                  alt="Paper Packaging"
                />
              </div>
              <h4>أوراق تغليف</h4>
              <p>اكتشف أفضل أوراق تغليف لكل مناسبة.</p>
            </div>
            <div className="category-thumbnail-item category-item">
              <div className="category-icon-wrapper">
                <img
                  src={img5}
                  alt="Food & Drink Packaging"
                />
              </div>
              <h4>أكياس تغليف</h4>
              <p>مختلف أنواع الأكياس من اكياس شحن و سيلوفان و تغليف</p>
            </div>

            {/* <div className="category-thumbnail-item category-item">
              <div className="category-icon-wrapper">
                <img
                  src="src/assets/images/60qIw5HjeWOlwHcA16C5pLS7zRGFSH58Pix3mI9h.webp"
                  alt="Paper Packaging"
                />
              </div>
              <h4>أوراق تغليف</h4>
              <p>اكتشف أفضل أوراق تغليف لكل مناسبة.</p>
            </div> */}

            {/* كرر المزيد من العناصر حسب الحاجة */}
          </div>
        </div>
      </div>
    </section>
  );
}
