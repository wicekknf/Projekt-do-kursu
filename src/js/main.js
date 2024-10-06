const miniHamburger = document.querySelector(".hamburger-icon");
const miniClose = document.querySelector(".close-icon");
const miniNavList = document.querySelector(".mini-nav-list");
const miniNavItems = miniNavList.querySelectorAll("a");
const year = document.querySelector(".year");

console.log(miniNavItems);

const currentYear = new Date().getFullYear();
year.textContent = currentYear;

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

miniNavItems.forEach((e) => {
	e.addEventListener("click", hideNav);
});

miniHamburger.addEventListener("click", showNav);
miniClose.addEventListener("click", hideNav);
