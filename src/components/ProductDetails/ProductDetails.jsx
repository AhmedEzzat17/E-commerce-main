import React, { useEffect } from "react";
// import '../../assets/css/style.css';
import "../../assets/css/product.css";
import img1 from '../../assets/images/RQkLcoyAoCByPWP5wFnJD5tMLV463ZqPh1UqftSC.webp';
import img2 from '../../assets/images/60qIw5HjeWOlwHcA16C5pLS7zRGFSH58Pix3mI9h.webp';
import img3 from '../../assets/images/z67vtaB9KUhN89fvJVXAuz5RrvuSsGKv3oZVocWW - Copy.webp';
import img4 from '../../assets/images/yCBpE03GZbIojSNmgUPtLQqeyhsJZlMGlVadqQ0O.jpg';

export default function ProductDetails() {
  useEffect(() => {
    const thumbnails = document.querySelectorAll(".thumbnail-item");
    const mainProductImage = document.getElementById("mainProductImage");
    const mainImageContainer = document.querySelector(".main-image-container");

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        thumbnails.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");

        mainProductImage.style.opacity = "0";
        mainProductImage.style.transition = "opacity 0.2s ease-out";

        setTimeout(() => {
          mainProductImage.src = this.src;
          mainProductImage.style.opacity = "1";
          mainProductImage.style.transition =
            "opacity 0.2s ease-in, transform 0.3s ease-out";
          mainProductImage.style.transform = "scale(1)";
          mainProductImage.style.transformOrigin = "center center";
        }, 200);
      });
    });

    mainImageContainer.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const imgWidth = mainProductImage.offsetWidth;
      const imgHeight = mainProductImage.offsetHeight;
      const backgroundX = (x / imgWidth) * 100;
      const backgroundY = (y / imgHeight) * 100;
      mainProductImage.style.transformOrigin = `${backgroundX}% ${backgroundY}%`;
      mainProductImage.style.transform = "scale(2.5)";
    });

    mainImageContainer.addEventListener("mouseleave", function () {
      mainProductImage.style.transform = "scale(1)";
      mainProductImage.style.transformOrigin = "center center";
    });

    const colorItems = document.querySelectorAll(".color-item");
    colorItems.forEach((item) => {
      item.addEventListener("click", function () {
        colorItems.forEach((c) => c.classList.remove("active"));
        this.classList.add("active");
        const selectedColor = this.dataset.color;
        console.log("Selected Color:", selectedColor);
      });
    });

    const sizeItems = document.querySelectorAll(".size-item");
    sizeItems.forEach((item) => {
      item.addEventListener("click", function () {
        sizeItems.forEach((s) => s.classList.remove("active"));
        this.classList.add("active");
        const selectedSize = this.dataset.size;
        console.log("Selected Size:", selectedSize);
      });
    });

    const slider = document.querySelector(".scroll-container");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <section className="product-details-section container">
      <div className="product-wrapper">
        <div className="product-info-column" data-aos="fade-down">
          <h1 className="product-title" data-aos="fade-down">اسم المنتج هنا</h1>
          <p className="product-description">
            هذا هو وصف تفصيلي للمنتج. يتميز بجودته العالية وتصميمه الفريد الذي
            يلبي جميع احتياجاتك. مثالي للاستخدام اليومي.
          </p>

          <div className="product-price">
            <span className="current-price" data-aos="fade-down">500 ريال</span>
            <span className="old-price">650 ريال</span>
          </div>

          <div
            className="discount-badge"
            style={{
              color: "red",
              fontWeight: "bold",
              marginBottom: "20px",
              fontSize: "19px",
            }}
          >
            خصم : 15%
          </div>

          <div className="product-options">
            <div className="quantity-selector">
              <label htmlFor="quantity">الكمية:</label>
              <input type="number" id="quantity" defaultValue="1" min="1" />
            </div>

            <div className="color-selector">
              <label>اللون:</label>
              <div className="color-options">
                <span
                  className="color-item active"
                  data-color="#FF0000"
                  style={{ backgroundColor: "#FF0000" }}
                ></span>
                <span
                  className="color-item"
                  data-color="#0000FF"
                  style={{ backgroundColor: "#0000FF" }}
                ></span>
                <span
                  className="color-item"
                  data-color="#008000"
                  style={{ backgroundColor: "#008000" }}
                ></span>
                <span
                  className="color-item"
                  data-color="#FFFF00"
                  style={{
                    backgroundColor: "#FFFF00",
                    border: "1px solid #ccc",
                  }}
                ></span>
              </div>
            </div>

            <div className="size-selector">
              <label>المقاس:</label>
              <div className="size-options">
                <span className="size-item active" data-size="S">
                  S
                </span>
                <span className="size-item" data-size="M">
                  M
                </span>
                <span className="size-item" data-size="L">
                  L
                </span>
                <span className="size-item" data-size="XL">
                  XL
                </span>
              </div>
            </div>
          </div>

          <button className="add-to-cart-button">أضف إلى السلة</button>
          <button className="buy-now-button">اشترِ الآن</button>

          <div className="product-features" data-aos="fade-down">
            <h3>المميزات الرئيسية:</h3>
            <ul>
              <li>جودة خامات عالية وتصميم متين يدوم طويلاً.</li>
              <li>تصميم أنيق وعصري يتناسب مع جميع الأذواق والمناسبات.</li>
              <li>سهولة الاستخدام والتنظيف مع توفير أقصى درجات الراحة.</li>
              <li>ضمان لمدة عامين ضد عيوب الصناعة لراحة بالك.</li>
            </ul>
            <h3>تفاصيل إضافية:</h3>
            <p className="extra-details">
              هذا المنتج الفريد هو إضافة رائعة لمجموعتك، فهو يجمع بين الأناقة
              والوظيفة. مصنوع بعناية فائقة لضمان أفضل تجربة للمستخدم. مثالي
              للهدايا أو للاستخدام الشخصي اليومي. متوفر بكميات محدودة، لا تفوت
              الفرصة!
            </p>
          </div>
        </div>

        <div className="product-images-column">
          <div className="main-image-container" data-aos="fade-up">
            <div className="zoomable">
              <img
                id="mainProductImage"
                src={img1}
                alt="صورة المنتج الرئيسية"
                className="main-product-image zoomable__img"
              />
            </div>
          </div>

          <div className="thumbnail-gallery-sidebar" data-aos="fade-down">
            <div className="scroll-container">
              <img
                src={img1}
                alt="صورة مصغرة 1"
                className="thumbnail-item active"
              />
              <img
                src={img2}
                alt="صورة مصغرة 2"
                className="thumbnail-item"
              />
              <img
                src={img3}
                alt="صورة مصغرة 3"
                className="thumbnail-item"
              />
              <img
                src={img4}
                alt="صورة مصغرة 4"
                className="thumbnail-item"
              />
              <img
                src={img4}
                alt="صورة مصغرة 5"
                className="thumbnail-item"
              />
              <img
                src={img4}
                alt="صورة مصغرة 6"
                className="thumbnail-item"
              />
              <img
                src={img4}
                alt="صورة مصغرة 7"
                className="thumbnail-item"
              />
              <img
                src={img4}
                alt="صورة مصغرة 8"
                className="thumbnail-item"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
