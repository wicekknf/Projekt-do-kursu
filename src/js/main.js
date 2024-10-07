const miniHamburger = document.querySelector(".hamburger-icon");
const miniClose = document.querySelector(".close-icon");
const miniNavList = document.querySelector(".mini-nav-list");
const miniNavItems = miniNavList.querySelectorAll("a");
const year = document.querySelector(".year");
const navList = document.querySelector(".nav-list");

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

// Implementacja ScrollSpy
document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll("section");
	const navLinks = navList.querySelectorAll("a");

	// Funkcja aktualizująca aktywny link nawigacyjny
	function updateActiveLink() {
		let currentSection = "";

		// Sprawdź, która sekcja jest aktualnie w oknie przeglądarki
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			if (scrollY >= sectionTop - 80) {
				console.log(scrollY);
				currentSection = section.getAttribute("id");
			}
		});

		navLinks.forEach((link) => {
			link.classList.remove("active");
			if (link.getAttribute("href") === `#${currentSection}`) {
				link.classList.add("active");
			}
		});
	}

	// Nasłuchuj przewijania strony
	window.addEventListener("scroll", updateActiveLink);
});

miniHamburger.addEventListener("click", showNav);
miniClose.addEventListener("click", hideNav);
