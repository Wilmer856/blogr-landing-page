const productBtn = document.querySelector(".nav-product-btn");
const companyBtn = document.querySelector(".nav-company-btn");
const connectBtn = document.querySelector(".nav-connect-btn");

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", (e) => {
  if (hamburger.classList.contains("active")) {
    document.querySelector(".nav-menu").style.opacity = "0";
    companyBtn.classList.remove("active");
    connectBtn.classList.remove("active");
    productBtn.classList.remove("active");
  } else {
    document.querySelector(".nav-menu").style.opacity = "1";
  }
  hamburger.classList.toggle("active");
});

productBtn.addEventListener("click", (e) => {
  if (companyBtn.classList.contains("active")) {
    companyBtn.classList.toggle("active");
  }
  if (connectBtn.classList.contains("active")) {
    connectBtn.classList.toggle("active");
  }
  productBtn.classList.toggle("active");
});

companyBtn.addEventListener("click", (e) => {
  if (productBtn.classList.contains("active")) {
    productBtn.classList.toggle("active");
  }
  if (connectBtn.classList.contains("active")) {
    connectBtn.classList.toggle("active");
  }
  companyBtn.classList.toggle("active");
});

connectBtn.addEventListener("click", (e) => {
  if (companyBtn.classList.contains("active")) {
    companyBtn.classList.toggle("active");
  }
  if (productBtn.classList.contains("active")) {
    productBtn.classList.toggle("active");
  }
  connectBtn.classList.toggle("active");
});
