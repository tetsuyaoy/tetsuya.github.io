let slideIndex2 = 0;
    let slides2 = document.getElementsByClassName("slide2");

    function showSlide2(index) {
        if (index >= slides2.length) slideIndex2 = 0;
        if (index < 0) slideIndex2 = slides2.length - 1;

        for (let i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
        }
        slides2[slideIndex2].style.display = "block";
    }

    function changeSlide2(n) {
        slideIndex2 += n;
        showSlide2(slideIndex2);
    }

    showSlide2(slideIndex2);

    let autoSlide2;

    function startAutoSlide2() {
        autoSlide2 = setInterval(() => {
            changeSlide2(1);
        }, 5000);
    }

    function stopAutoSlide2() {
        clearInterval(autoSlide2);
    }

    startAutoSlide2(); // Jalankan otomatis

    document.querySelector(".prev2").addEventListener("click", () => {
        stopAutoSlide2();
        changeSlide2(-1);
        startAutoSlide2();
    });

    document.querySelector(".next2").addEventListener("click", () => {
        stopAutoSlide2();
        changeSlide2(1);
        startAutoSlide2();
    });