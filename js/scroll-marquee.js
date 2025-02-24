const marqueeContent = document.querySelector('.marquee__wrapper');
let scrollSpeed = 20;
let isScrolling = false;
let userScrollOffset = 0;

marqueeContent && marqueeContent.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (!isScrolling) {
        isScrolling = true;
        const direction = e.deltaY > 0 ? 1 : -1;
        userScrollOffset += direction * scrollSpeed;
        marqueeContent.style.transform = `translateX(${userScrollOffset}px)`;
        requestAnimationFrame(() => {
            isScrolling = false;
        });
    }
});

marqueeContent && marqueeContent.addEventListener('animationiteration', () => {
    userScrollOffset = 0;
    marqueeContent.style.transform = `translateX(${userScrollOffset}px)`;
});

marqueeContent && marqueeContent.addEventListener('mouseleave', () => {
    marqueeContent.style.animationPlayState = 'running';
});