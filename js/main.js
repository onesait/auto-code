window.addEventListener("scroll", () => {
	const header = document.querySelector("header");
	if (window.scrollY > 0) {
		header.classList.add("scrolled");
	} else {
		header.classList.remove("scrolled");
	}
});


const searchBtns = document.querySelectorAll(".search-btn");
const searchWrapper = document.querySelector(".site-header__search-wrapper");

searchBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
		searchWrapper.classList.toggle("active");
	});
});


const seoText = document.querySelector(".seo-block__text");
const seoBtn = document.querySelector(".seo-block__btn");

const descriptionStagesText = document.querySelector(".case-description-stages__text");
const descriptionStagesBtn = document.querySelector(".case-description-stages__btn");

function initToggle(text, btn) {
	if (text && btn) {
		toggleVisibleText(text, btn);
	}
}

initToggle(seoText, seoBtn);
initToggle(descriptionStagesText, descriptionStagesBtn);

function toggleVisibleText(text, btn) {
	btn.addEventListener("click", () => {
		const isExpanded = text.classList.toggle("show");
		btn.classList.toggle("active");

		btn.setAttribute("aria-expanded", isExpanded);
		btn.textContent = isExpanded ? "Скрыть" : "Читать еще";
	});

	btn.setAttribute("aria-expanded", false);
}


const developmentMenuTitle = document.querySelector(".menu__title--development");
const servicesMenuTitle = document.querySelector(".menu__title--services");

openMenu(developmentMenuTitle);
openMenu(servicesMenuTitle);

function openMenu(el) {
	el.addEventListener("click", () => {
		const menu = el.nextElementSibling
		el.classList.toggle("active");
		menu.classList.toggle("show");
	});
}