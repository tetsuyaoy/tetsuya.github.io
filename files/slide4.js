let slideIndex4 = 0;
    let slides4 = document.getElementsByClassName("slide4");

    function showSlide4(index) {
        if (index >= slides4.length) slideIndex4 = 0;
        if (index < 0) slideIndex4 = slides4.length - 1;

        for (let i = 0; i < slides4.length; i++) {
            slides4[i].style.display = "none";
        }
        slides4[slideIndex4].style.display = "block";
    }

    function changeSlide4(n) {
        slideIndex4 += n;
        showSlide4(slideIndex4);
    }

    showSlide4(slideIndex4);

    let autoSlide4;

    function startAutoSlide4() {
        autoSlide4 = setInterval(() => {
            changeSlide4(1);
        }, 5000);
    }

    function stopAutoSlide4() {
        clearInterval(autoSlide4);
    }

    startAutoSlide4(); // Jalankan otomatis

    document.querySelector(".prev4").addEventListener("click", () => {
        stopAutoSlide4();
        changeSlide4(-1);
        startAutoSlide4();
    });

    document.querySelector(".next4").addEventListener("click", () => {
        stopAutoSlide4();
        changeSlide4(1);
        startAutoSlide4();
    });