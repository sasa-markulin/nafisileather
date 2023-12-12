const menuToggle = document.querySelector(".nav-wrapper__toggle");
const menuList = document.querySelector(".nav-wrapper__list");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  menuList.classList.toggle("active");
  document.body.classList.toggle("active");
});
const gallery = document.querySelector(".gallery");

if (gallery) {
  const productModal = document.querySelector(".modal");
  const mainSwiperWrapper = document.querySelector(
    ".mainSwiper .swiper-wrapper"
  );
  const paginationSwiperWrapper = document.querySelector(
    ".paginationSwiper .swiper-wrapper"
  );

  function openProductModal(imageDataContainer) {
    const images = JSON.parse(imageDataContainer.getAttribute("data-images"));

    mainSwiperWrapper.innerHTML = "";
    paginationSwiperWrapper.innerHTML = "";

    images.forEach((imageName) => {
      // Create slides for the main swiper
      const mainSlide = document.createElement("div");
      mainSlide.className = "swiper-slide";
      const mainImage = document.createElement("img");
      mainImage.src = "images/" + imageName;
      mainSlide.appendChild(mainImage);
      mainSwiperWrapper.appendChild(mainSlide);

      // Create slides for the pagination swiper
      const paginationSlide = document.createElement("div");
      paginationSlide.className = "swiper-slide";
      const paginationImage = document.createElement("img");
      paginationImage.src = "images/" + imageName;
      paginationSlide.appendChild(paginationImage);
      paginationSwiperWrapper.appendChild(paginationSlide);
    });

    const paginationSwiper = new Swiper(".paginationSwiper", {
      keyboard: true,
      slidesPerView: 3,
      spaceBetween: 10,
      freeMode: true,
      watchSlidesProgress: true,
    });

    const mainSwiper = new Swiper(".mainSwiper", {
      thumbs: {
        swiper: paginationSwiper,
      },
    });

    productModal.classList.add("active");
  }

  function closeProductModal() {
    productModal.classList.remove("active");
  }

  gallery.addEventListener("click", (event) => {
    if (
      event.target !== gallery &&
      event.target.classList.contains("gallery__product")
    ) {
      openProductModal(event.target.querySelector(".productImages"));
    }
  });

  //   // Event listener to open the modal when a product is clicked
  //   document
  //     .getElementById("productLink")
  //     .addEventListener("click", openProductModal);

  //   // Event listener to close the modal when the close button is clicked
  //   document.querySelector(".close").addEventListener("click", closeProductModal);
}
