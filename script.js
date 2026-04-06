// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId.startsWith("#") && targetId.length > 1) {
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
            navLinks.classList.remove("show");
        }
    });
});

// Simple contact form handler (demo only)
const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Thank you! Your message has been submitted. (Demo only)");
        form.reset();
    });
}