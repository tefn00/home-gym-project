console.log("script loaded");

/* ---------------- SEARCH (ONLY ON SHOP PAGE) ---------------- */
/* ---------------- SEARCH (DESKTOP + MOBILE) ---------------- */

function setupSearch(searchInput) {
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const creatine = document.querySelector(".creatine_section");
    const protein = document.querySelector(".protein_section");
    const vitamin = document.querySelector(".vitamin_section");

    if (creatine) creatine.style.display = "none";
    if (protein) protein.style.display = "none";
    if (vitamin) vitamin.style.display = "none";

    const query = searchInput.value.trim();

    // If search is empty, restore sections
    if (query === "") {
      if (creatine) creatine.style.display = "flex";
      if (protein) protein.style.display = "flex";
      if (vitamin) vitamin.style.display = "flex";

      document.querySelectorAll(".searched_box").forEach((box) => box.remove());
      return;
    }

    fetch(`https://supplement.ge/wp-json/sx/v1/search?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        const wrap = document.querySelector(".search_wraper");
        if (!wrap) return;


        // dzveli shedegis washla
        document
          .querySelectorAll(".searched_box")
          .forEach((box) => box.remove());

        data.forEach((item) => {
          const box = document.createElement("div");
          box.classList.add("searched_box");

          const name = document.createElement("p");
          name.classList.add("searched_name");
          name.innerText = item.name;

          box.appendChild(name);
          wrap.appendChild(box);
        });
      })
      .catch((error) => console.error("Search error:", error));
  });
}


setupSearch(document.querySelector(".search"));

setupSearch(document.querySelector(".search_sub"));

/* ---------------- BURGER MENU (ALL PAGES SAFE) ---------------- */

const subMenu = document.querySelector(".sub_box");
const burgerBar = document.querySelector(".burger-bar");

if (subMenu && burgerBar) {
  burgerBar.addEventListener("click", show_sub);
}

function show_sub() {
  const currentDisplay = window.getComputedStyle(subMenu).display;

  if (currentDisplay === "flex") {
    subMenu.style.display = "none";
  } else {
    subMenu.style.display = "flex";
  }
}

/* ---------------- LOGIN (ALL PAGES SAFE) ---------------- */

const login = document.querySelector(".log_in");

if (login) {
  login.addEventListener("click", (e) => {
    e.preventDefault();

    const loginSection = document.querySelector(".sect");
    const section1 = document.querySelector(".section1");

    if (loginSection) {
      section1.style.display = "none";
      loginSection.style.display = "flex";
    }
  });
}

const login1 = document.querySelector(".sign_up_");
if (login1) {
  login1.addEventListener("click", (e) => {
    e.preventDefault();

    const loginSection = document.querySelector(".sect");
    const section1 = document.querySelector(".section1");
    if (loginSection) {
      section1.style.display = "none";
      loginSection.style.display = "flex";
    }
  });
}

// -------cookie---------------------------------------
const cookieBanner = document.querySelector(".cookie-banner");
const acceptBtn = document.querySelector(".accept-btn");

if (cookieBanner && acceptBtn) {
  if (localStorage.getItem("cookiesAccepted") === "true") {
    cookieBanner.style.display = "none";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });
}

// scrol to top-------------------------------------------------------------

const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// -----register----------------------------

const registerLink = document.querySelector(".go-register");
const backLogin = document.querySelector(".back-login");
const loginBox = document.querySelector(".login-box");
const registerBox = document.querySelector(".register-box");

if (registerLink) {
  registerLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginBox.style.display = "none";
    registerBox.style.display = "flex";
  });
}

if (backLogin) {
  backLogin.addEventListener("click", (e) => {
    e.preventDefault();
    registerBox.style.display = "none";
    loginBox.style.display = "flex";
  });
}