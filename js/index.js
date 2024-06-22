// 漢堡選單
const menuOpenDom = document.querySelector("#menuOpen");
const menuCloseDom = document.querySelector("#menuClose");
const menuDom = document.querySelector("#menu");
const htmlDom = document.querySelector("html");
const navDoms = document.querySelectorAll(".menu li");
menuOpenDom.addEventListener("click", () => {
  menuDom.classList.add("active");
  htmlDom.classList.add("overflow-hidden");
});

menuCloseDom.addEventListener("click", () => {
  menuDom.classList.remove("active");
  htmlDom.classList.remove("overflow-hidden");
});

navDoms.forEach((navDom) => {
  navDom.addEventListener("click", () => {
    menuDom.classList.remove("active");
    htmlDom.classList.remove("overflow-hidden");
  });
})


// 漢堡選單

// services light box
const serviceDoms = document.querySelectorAll(".service-item");
const dialogDom = document.querySelector("#dialog");
const list = [
  {
    img: "./images/interior-design-detail.jpg",
    title: "室內設計",
    content: [
      "1.初步討論構想",
      "2.現況實際丈量",
      "3.平面規劃提案",
      "4.施作細節確認",
      "5.工程總價估算",
      "6.案場施工監造",
      "7.完工驗收點交",
      "8.後續保固服務",
    ],
  },
  {
    img: "./images/space-planning-detail.jpg",
    title: "空間規劃",
    content: ["各類空間或居室的收納比例調整"],
  },
  {
    img: "./images/system-cabinet-detail.jpg",
    title: "系統櫥櫃",
    content: ["依照生活或使用需求給予建議"],
  },
  {
    img: "./images/furniture-layout-detail.jpg",
    title: "傢俱配置",
    content: ["現成或訂製活動傢俱安裝擺設"],
  },
];

const servicesTemplate = (service) => {
  return `
  <div class="services-dialog">
    <div class="services-dialog-close" id="services-dialog-close">
      <img src="./images/icons/back.png" alt="back" draggable="false">
    </div>
    <div class="services-dialog-pic" style="background-image: url(${
      service.img
    });"></div>
    <div class="services-dialog-content">
      <h3>${service.title}</h3>
      <ul>
        ${service.content
          .map((item) => {
            return `<li>${item}</li>`;
          })
          .join("")}
      </ul>
    </div>
  </div>
  `;
};

dialogDom.addEventListener("click", (e) => {
  if (e.target === dialogDom) {
    dialogDom.classList.remove("active");
    htmlDom.classList.remove("overflow-hidden");
  }
});

serviceDoms.forEach((serviceDom, index) => {
  const service = list[index];
  serviceDom.addEventListener("click", () => {
    dialogDom.innerHTML = servicesTemplate(service);
    const closeDom = document.getElementById("services-dialog-close");
    dialogDom.classList.add("active");
    htmlDom.classList.add("overflow-hidden");
    closeDom.addEventListener("click", () => {
      dialogDom.classList.remove("active");
      htmlDom.classList.remove("overflow-hidden");
    });
  });
});

// services light box
