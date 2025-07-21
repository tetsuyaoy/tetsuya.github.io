let slideIndex5 = 0;
    let slides5 = document.getElementsByClassName("slide5");

    function showSlide5(index) {
        if (index >= slides5.length) slideIndex5 = 0;
        if (index < 0) slideIndex5 = slides5.length - 1;

        for (let i = 0; i < slides5.length; i++) {
            slides5[i].style.display = "none";
        }
        slides5[slideIndex5].style.display = "block";
    }

    function changeSlide5(n) {
        slideIndex5 += n;
        showSlide5(slideIndex5);
    }

    showSlide5(slideIndex5);

    let autoSlide5;

    function startAutoSlide5() {
        autoSlide5 = setInterval(() => {
            changeSlide5(1);
        }, 5000);
    }

    function stopAutoSlide5() {
        clearInterval(autoSlide5);
    }

    startAutoSlide5(); // Jalankan otomatis

    document.querySelector(".prev5").addEventListener("click", () => {
        stopAutoSlide5();
        changeSlide5(-1);
        startAutoSlide5();
    });

    document.querySelector(".next5").addEventListener("click", () => {
        stopAutoSlide5();
        changeSlide5(1);
        startAutoSlide5();
    });