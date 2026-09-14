/* =========================================================
   MARIA ADEEL PORTFOLIO
   JavaScript
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const backToTop = document.getElementById("backToTop");
const yearElement = document.getElementById("year");


/* =========================================================
   CURRENT YEAR
========================================================= */

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");
        document.body.classList.toggle("menu-open");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("open")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");
        document.body.classList.remove("menu-open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

function updateNavbar() {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (target === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }

    );

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   BACK TO TOP
========================================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   SMOOTH ANCHOR SCROLLING
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        if (
            targetId === "#" ||
            !targetId
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const navbarHeight =
            navbar.offsetHeight;

        const targetPosition =
            target.offsetTop - navbarHeight;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


/* =========================================================
   TILT EFFECT FOR FEATURED PROJECT
========================================================= */

const projectWindow =
    document.querySelector(".project-window");

const featuredProject =
    document.querySelector(".featured-project");


if (
    projectWindow &&
    featuredProject &&
    window.innerWidth > 900
) {

    featuredProject.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                featuredProject.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateY =
                (x - centerX) /
                centerX *
                3;

            const rotateX =
                -(
                    (y - centerY) /
                    centerY *
                    2
                );

            projectWindow.style.transform =
                `perspective(1000px)
                 rotateY(${rotateY}deg)
                 rotateX(${rotateX}deg)`;

        }
    );


    featuredProject.addEventListener(
        "mouseleave",
        () => {

            projectWindow.style.transform =
                `perspective(1000px)
                 rotateY(4deg)
                 rotateX(0deg)`;

        }
    );

}


/* =========================================================
   SKILL PILL MICRO INTERACTION
========================================================= */

const skillPills =
    document.querySelectorAll(".skill-pill");

skillPills.forEach(pill => {

    pill.addEventListener("mouseenter", () => {

        pill.style.boxShadow =
            "0 15px 40px rgba(139,92,246,.10)";

    });

    pill.addEventListener("mouseleave", () => {

        pill.style.boxShadow = "none";

    });

});


/* =========================================================
   TYPEWRITER TERMINAL
========================================================= */

const terminalText =
    document.querySelector(".terminal-bar");

if (terminalText) {

    let dots = 0;

    setInterval(() => {

        dots = (dots + 1) % 4;

        const dotText =
            ".".repeat(dots);

        terminalText.innerHTML =
            `<span class="terminal-dot"></span>
             creating something new${dotText}
             <span class="cursor">_</span>`;

    }, 700);

}


/* =========================================================
   PARALLAX FOR HERO ORBS
========================================================= */

const hero =
    document.querySelector(".hero");

const orbs =
    document.querySelectorAll(".gradient-orb");


if (hero && window.innerWidth > 800) {

    hero.addEventListener("mousemove", (event) => {

        const rect =
            hero.getBoundingClientRect();

        const mouseX =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const mouseY =
            (event.clientY - rect.top) /
            rect.height -
            0.5;

        orbs.forEach((orb, index) => {

            const strength =
                (index + 1) * 12;

            orb.style.transform =
                `translate(
                    ${mouseX * strength}px,
                    ${mouseY * strength}px
                )`;

        });

    });

}


/* =========================================================
   PREVENT BROKEN EXTERNAL LINKS
   ========================================================= */

document.querySelectorAll(
    'a[target="_blank"]'
).forEach(link => {

    link.addEventListener("click", () => {

        link.style.opacity = "0.75";

        setTimeout(() => {

            link.style.opacity = "1";

        }, 400);

    });

});


/* =========================================================
   PAGE LOADED
========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});
