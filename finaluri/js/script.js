console.log("script loaded");

/* ---------------- SEARCH (ONLY ON SHOP PAGE) ---------------- */

const search = document.querySelector(".search");

if (search) {
    search.addEventListener("input", () => {

        const creatine = document.querySelector(".creatine_section");
        const protein = document.querySelector(".protein_section");
        const vitamin = document.querySelector(".vitamin_section");

        if (creatine) creatine.style.display = "none";
        if (protein) protein.style.display = "none";
        if (vitamin) vitamin.style.display = "none";

        const query = search.value;

        fetch(`https://supplement.ge/wp-json/sx/v1/search?q=${query}`)
            .then(response => response.json())
            .then(data => {

                console.log(data);

                const oldBoxes = document.querySelectorAll(".searched_box");
                oldBoxes.forEach(box => box.remove());

                const wrap = document.querySelector(".search_wraper");
                if (!wrap) return;

                data.forEach(item => {

                    const box = document.createElement("div");
                    box.classList.add("searched_box");

                    const name = document.createElement("p");
                    name.innerText = item.name;
                    name.classList.add("searched_name");

                    box.appendChild(name);
                    wrap.appendChild(box);
                });
            })
            .catch(error => {
                console.error("Search error:", error);
            });
    });
}

/* ---------------- BURGER MENU (ALL PAGES SAFE) ---------------- */

const subMenu = document.querySelector('.sub_box');
const burgerBar = document.querySelector('.burger-bar');

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
        const section1=document.querySelector(".section1");

        if (loginSection) {
            section1.style.display="none";
            loginSection.style.display = "flex";
        }
    });
}


const login1 = document.querySelector(".sign_up_");

if (login1) {
    login1.addEventListener("click", (e) => {
        e.preventDefault();

        const loginSection = document.querySelector(".sect");
        const section1=document.querySelector(".section1")
        if (loginSection) {
            section1.style.display="none";
            loginSection.style.display = "flex";
        }
    });
}
// -------cookie---------------------------------------
const cookieBanner = document.querySelector(".cookie-banner");
const acceptBtn = document.querySelector(".accept-btn");

// only run if elements exist on page
if (cookieBanner && acceptBtn) {

    // if already accepted, hide banner
    if (localStorage.getItem("cookiesAccepted") === "true") {
        cookieBanner.style.display = "none";
    }

    // when button clicked
    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
    });

}