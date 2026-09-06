// ================= DARK / LIGHT MODE =================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeToggle.textContent = "☀";

    } else {

        themeToggle.textContent = "☾";

    }

});


// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

};


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you! Your message form is ready. Connect this form to an email service or backend to receive messages.";

    contactForm.reset();

});