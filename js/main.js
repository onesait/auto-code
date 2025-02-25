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

if (seoBtn && seoText) {
	seoBtn.addEventListener("click", () => {
		const isExpanded = seoText.classList.toggle("show");
		seoBtn.classList.toggle("active");

		seoBtn.setAttribute("aria-expanded", isExpanded);
		seoBtn.textContent = isExpanded ? "Скрыть" : "Читать еще";
	});

	seoBtn.setAttribute("aria-expanded", false);
}

