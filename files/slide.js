let slideIndex = 0;
    let slides = document.getElementsByClassName("slide");

    function showSlide(index) {
        if (index >= slides.length) slideIndex = 0;
        if (index < 0) slideIndex = slides.length - 1;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    function changeSlide(n) {
        slideIndex += n;
        showSlide(slideIndex);
    }

    showSlide(slideIndex);

    let autoSlide;

    function startAutoSlide() {
        autoSlide = setInterval(() => {
            changeSlide(1);
        }, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    startAutoSlide(); // Jalankan otomatis

    document.querySelector(".prev").addEventListener("click", () => {
        stopAutoSlide();
        changeSlide(-1);
        startAutoSlide();
    });

    document.querySelector(".next").addEventListener("click", () => {
        stopAutoSlide();
        changeSlide(1);
        startAutoSlide();
    });