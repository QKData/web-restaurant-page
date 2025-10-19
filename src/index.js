import { createHome } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

const content = document.getElementById("content");
const homeBtn = document.querySelector("nav button:nth-child(1)");
const menuBtn = document.querySelector("nav button:nth-child(2)");
const contactBtn = document.querySelector("nav button:nth-child(3)");

function switchTab(tabName) {
    content.innerHTML = '';

    const buttons = document.querySelectorAll("nav button");
    buttons.forEach(btn => btn.classList.remove("active"));

    if (tabName === "home") {
        homeBtn.classList.add("active");
        loadHome();
    } else if (tabName === "menu") {
        menuBtn.classList.add("active");
        loadMenu();
    } else if (tabName === "contact") {
        contactBtn.classList.add("active");
        loadContact();
    }
}

function loadHome() {
    content.appendChild(createHome());
}

function loadMenu() {
    content.innerHTML = menu;
}

function loadContact() {
    content.innerHTML = contact;
}

homeBtn.addEventListener("click", () => switchTab("home"));
menuBtn.addEventListener("click", () => switchTab("menu"));
contactBtn.addEventListener("click", () => switchTab("contact"));

switchTab("home");