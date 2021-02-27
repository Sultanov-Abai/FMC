const slider = (wrapperSelector, innerSelector, slidesSelector, btnsSelector, prevSelector, nextSelector) => {
    const wrapper = document.querySelector(wrapperSelector),
          inner = document.querySelector(innerSelector),
          slides = document.querySelectorAll(slidesSelector),
          slide = document.querySelector(slidesSelector),
          btns = document.querySelectorAll(btnsSelector),
          prev = document.querySelector(prevSelector),
          next = document.querySelector(nextSelector),
          width = window.getComputedStyle(wrapper).width;

    let offset = 0;

    slides.forEach(slide => {
        slide.style.width = width;
    });

    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            const slideWidth = window.getComputedStyle(slide).width;
            let math = i * +width.slice(0, width.length - 2);
            inner.style.transform = `translateX(-${math}px)`;
        });
    });

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        inner.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        inner.style.transform = `translateX(-${offset}px)`;
    });
};

export default slider;