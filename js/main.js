window.addEventListener('scroll', () => {
	const header = document.querySelector('header');
	if (window.scrollY > 0) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
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