/*=========================================
        FLOATING HEARTS
=========================================*/

const heartsContainer = document.getElementById("hearts");

if (heartsContainer) {

    function createHeart() {

        const heart = document.createElement("div");

        heart.className = "heart";

        const emojis = ["❤️", "💖", "💕", "💗", "💝"];

        heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize = (15 + Math.random() * 20) + "px";

        heart.style.animationDuration = (5 + Math.random() * 4) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 9000);

    }

    setInterval(createHeart, 500);

}

/*=========================================
        PASSWORD PAGE
=========================================*/

function checkPassword() {

    const password = document.getElementById("password");

    const message = document.getElementById("message");

    if (!password || !message) return;

    if (password.value.trim().toLowerCase() === "navya") {

        message.style.color = "#90EE90";

        message.innerHTML = "✨ Welcome Birthday Girl ❤️";

        setTimeout(() => {

            window.location.href = "chapter1.html";

        }, 1500);

    } else {

        message.style.color = "#ff8080";

        message.innerHTML = "🥺 Wrong password!<br>Hint: It's your name ❤️";

        password.value = "";

        password.focus();

    }

}

const passwordInput = document.getElementById("password");

if (passwordInput) {

    passwordInput.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            checkPassword();

        }

    });

}

/*=========================================
        LETTER PAGE
=========================================*/

const openLetterBtn = document.getElementById("openLetter");

if (openLetterBtn) {

    openLetterBtn.addEventListener("click", function () {

        const envelope = document.getElementById("envelope");

        const letter = document.getElementById("letterCard");

        if (envelope) {

            envelope.style.transition = "all .8s";

            envelope.style.transform = "translateY(-40px) rotateX(180deg)";

            envelope.style.opacity = "0";

        }

        openLetterBtn.style.display = "none";

        setTimeout(function () {

            if (envelope) {

                envelope.style.display = "none";

            }

            if (letter) {

                letter.style.display = "block";

                letter.classList.add("fade-up");

                letter.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }, 900);

    });

}

/*=========================================
        SURPRISE PAGE
=========================================*/

const giftBtn = document.getElementById("giftBtn");

if (giftBtn) {

    giftBtn.addEventListener("click", function () {

        const giftBox = document.getElementById("giftBox");

        const message = document.getElementById("giftMessage");

        if (giftBox) {

            giftBox.innerHTML = "💝";

            giftBox.style.transform = "scale(1.2) rotate(15deg)";

            giftBox.style.transition = ".6s";

        }

        giftBtn.style.display = "none";

        setTimeout(function () {

            if (message) {

                message.style.display = "block";

                message.classList.add("fade-up");

                message.scrollIntoView({

                    behavior: "smooth"

                });

            }

        }, 700);

    });

}

/*=========================================
        FADE ANIMATION
=========================================*/

const observer = new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},{threshold:0.2});

document.querySelectorAll("section,.memory,.video-card,.glass-card,.book,.letter-card").forEach(function(el){

observer.observe(el);

});

/*=========================================
        IMAGE HOVER
=========================================*/

document.querySelectorAll(".memory img").forEach(function(img){

img.addEventListener("mouseenter",function(){

img.style.transform="scale(1.05)";

img.style.transition=".4s";

});

img.addEventListener("mouseleave",function(){

img.style.transform="scale(1)";

});

});

/*=========================================
        VIDEO AUTOPLAY
=========================================*/

document.querySelectorAll("video").forEach(function(video){

video.volume=0.5;

video.addEventListener("mouseenter",function(){

video.play();

});

});

/*=========================================
        BUTTON CLICK EFFECT
=========================================*/

document.querySelectorAll("button,.next-btn,.restart").forEach(function(btn){

btn.addEventListener("click",function(){

btn.style.transform="scale(.95)";

setTimeout(function(){

btn.style.transform="";

},150);

});

});

/*=========================================
        PAGE LOAD
=========================================*/

window.onload=function(){

document.body.style.opacity="1";

};
/*====================================
MOVIE ENDING ANIMATION
====================================*/

document.addEventListener("DOMContentLoaded", () => {

    const lines = document.querySelectorAll(".final-message .line");

    if (lines.length === 0) return;

    lines.forEach(line => {
        line.style.opacity = "0";
        line.style.transform = "translateY(40px)";
    });

    let index = 0;

    function showNextLine() {

        if (index < lines.length) {

            lines[index].style.opacity = "1";
            lines[index].style.transform = "translateY(0)";
            lines[index].style.transition = "all 1.2s ease";

            index++;

            setTimeout(showNextLine, 1800);

        }

    }

    setTimeout(showNextLine, 1000);

});
