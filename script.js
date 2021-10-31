/*Creating Slider */

// Select Arrows
const na = document.querySelector("#next-arrow");
const pa = document.querySelector("#pre-arrow");

// Select Photos
const tm = document.querySelector("#tanya");
const jm = document.querySelector("#john");

// Select Reveiw's Texts
const r = document.querySelector(".review-txt");
const n = document.querySelector(".name");
const t = document.querySelector(".title");

const nextSlide = () => {
    tm.style.animation = "next-tanya-slide 1.5s forwards";
    jm.style.animation = "next-john-slide 1.5s forwards";

    r.innerHTML = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
    n.innerHTML = "John Tarkpor";
    t.innerHTML = "Junior Front-end Developer";
}

na.addEventListener("click", nextSlide);

const preSlide = () => {
    tm.style.animation = "pre-tanya-slide 1.5s forwards";
    jm.style.animation = "pre-john-slide 1.5s forwards";

    r.innerHTML = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
    n.innerHTML = "Tanya Sinclair";
    t.innerHTML = "UX Engineer";
}

pa.addEventListener("click", preSlide);