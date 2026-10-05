/* =====================================================
   ROYAL WEDDING WEBSITE
   SCRIPT.JS
===================================================== */


/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", function () {

    setTimeout(function () {

        const preloader =
            document.getElementById("preloader");

        preloader.classList.add("hide");

    }, 1800);

});


/* =====================================================
   COUNTDOWN
===================================================== */

// CHANGE YOUR WEDDING DATE HERE

const weddingDate =
    new Date("December 15, 2026 19:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").innerText = "00";

        document.getElementById("hours").innerText = "00";

        document.getElementById("minutes").innerText = "00";

        document.getElementById("seconds").innerText = "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
            1000
        );


    document.getElementById("days")
        .innerText = String(days).padStart(2, "0");


    document.getElementById("hours")
        .innerText = String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .innerText = String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .innerText = String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =====================================================
   SCROLL FUNCTION
===================================================== */

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   BACKGROUND MUSIC
===================================================== */

const music =
    document.getElementById("weddingMusic");

const musicButton =
    document.getElementById("musicButton");


let musicPlaying = false;


musicButton.addEventListener("click", function () {

    if (musicPlaying) {

        music.pause();

        musicButton.innerHTML = "🔇";

        musicPlaying = false;

    } else {

        music.play();

        musicButton.innerHTML = "🔊";

        musicPlaying = true;

    }

});


/* =====================================================
   START MUSIC AFTER FIRST USER CLICK
===================================================== */

document.addEventListener("click", function startMusic() {

    if (!musicPlaying) {

        music.play()
            .then(function () {

                musicPlaying = true;

                musicButton.innerHTML = "🔊";

            })
            .catch(function () {

                // Browser blocked autoplay

            });

    }

}, { once: true });


/* =====================================================
   ROSE PETALS
===================================================== */

function createPetal() {

    const petal =
        document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left =
        Math.random() * 100 + "vw";


    petal.style.fontSize =
        (Math.random() * 15 + 12) + "px";


    petal.style.animationDuration =
        (Math.random() * 5 + 5) + "s";


    document.body.appendChild(petal);


    setTimeout(function () {

        petal.remove();

    }, 10000);

}


setInterval(createPetal, 700);


/* =====================================================
   GALLERY CLICK EFFECT
===================================================== */

const galleryImages =
    document.querySelectorAll(".gallery img");


galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        const popup =
            document.createElement("div");


        popup.style.position = "fixed";

        popup.style.inset = "0";

        popup.style.background =
            "rgba(0,0,0,.9)";

        popup.style.display =
            "flex";

        popup.style.alignItems =
            "center";

        popup.style.justifyContent =
            "center";

        popup.style.zIndex =
            "99999";


        const largeImage =
            document.createElement("img");


        largeImage.src =
            image.src;


        largeImage.style.maxWidth =
            "90%";

        largeImage.style.maxHeight =
            "90%";

        largeImage.style.objectFit =
            "contain";


        popup.appendChild(largeImage);


        popup.addEventListener("click", function () {

            popup.remove();

        });


        document.body.appendChild(popup);

    });

});