let slideIndex3 = 0;
    let slides3 = document.getElementsByClassName("slide3");

    function showSlide3(index) {
        if (index >= slides3.length) slideIndex3 = 0;
        if (index < 0) slideIndex3 = slides3.length - 1;

        for (let i = 0; i < slides3.length; i++) {
            slides3[i].style.display = "none";
        }
        slides3[slideIndex3].style.display = "block";
    }

    function changeSlide3(n) {
        slideIndex3 += n;
        showSlide3(slideIndex3);
    }

    showSlide3(slideIndex3);

    let autoSlide3;

    function startAutoSlide3() {
        autoSlide3 = setInterval(() => {
            changeSlide3(1);
        }, 5000);
    }

    function stopAutoSlide3() {
        clearInterval(autoSlide3);
    }

    startAutoSlide3(); // Jalankan otomatis

    document.querySelector(".prev3").addEventListener("click", () => {
        stopAutoSlide3();
        changeSlide3(-1);
        startAutoSlide3();
    });

    document.querySelector(".next3").addEventListener("click", () => {
        stopAutoSlide3();
        changeSlide3(1);
        startAutoSlide3();
    });