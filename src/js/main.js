const miniHamburger = document.querySelector(".hamburger-icon");
const miniClose = document.querySelector(".close-icon");
const miniNavList = document.querySelector(".mini-nav-list");
const year = document.querySelector(".year");


const currentYear = new Date().getFullYear();
year.textContent = currentYear

console.log(miniNavList);
const showNav = () => {
	miniNavList.classList.add("show-miniNav");
	miniClose.style.display = "block";
	miniHamburger.style.display = "none";
};
const hideNav = () => {
	miniNavList.classList.remove("show-miniNav");
	miniClose.style.display = "none";
	miniHamburger.style.display = "block";
};


miniHamburger.addEventListener("click", showNav);
miniClose.addEventListener("click", hideNav);
