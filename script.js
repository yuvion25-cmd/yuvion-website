document.addEventListener("DOMContentLoaded", () => {

    // Launch Date
    const launchDate = new Date("March 8, 2027 00:00:00").getTime();

    // Countdown
    function updateCountdown() {

        const now = new Date().getTime();
        const distance = launchDate - now;

        if (distance <= 0) {

            const countdown = document.querySelector(".countdown");

            if (countdown) {
                countdown.innerHTML =
                    "<h1 style='color:#d4af37;'>WELCOME TO YUVION</h1>";
            }

            clearInterval(timer);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const d = document.getElementById("days");
        const h = document.getElementById("hours");
        const m = document.getElementById("minutes");
        const s = document.getElementById("seconds");

        if (d) d.innerHTML = String(days).padStart(3, "0");
        if (h) h.innerHTML = String(hours).padStart(2, "0");
        if (m) m.innerHTML = String(minutes).padStart(2, "0");
        if (s) s.innerHTML = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    // Waitlist
document.querySelector("form").addEventListener("submit", async function(e) {
    e.preventDefault();

    const email = this.querySelector("input").value.trim();

    if (!email) return;

    try {
        await fetch("https://script.google.com/macros/s/AKfycbzhsh_Vq45V01V786nomaHI5wzKcQaXcoFxvSZfXiFDaHlObCz_ySIJgVmiNWWzda4PPQ/exec", {
            method: "POST",
            body: JSON.stringify({ email: email }),
        });

        alert("You're on the YUVION waitlist 🔥");

        this.reset();

    } catch (error) {
        alert("Something went wrong. Try again.");
        console.log(error);
    }
});
    // Smooth Fade In
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0px)";
            }
        });
    });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "1s";
        observer.observe(section);
    });

    // Mouse Glow (optimized)
    let glow = null;

    document.addEventListener("mousemove", (e) => {

        if (!glow) {
            glow = document.createElement("div");
            glow.className = "mouse-glow";

            document.body.appendChild(glow);

            glow.style.position = "fixed";
            glow.style.width = "300px";
            glow.style.height = "300px";
            glow.style.borderRadius = "50%";
            glow.style.pointerEvents = "none";
            glow.style.background = "radial-gradient(circle, rgba(212,175,55,.12), transparent 70%)";
            glow.style.zIndex = "-1";
        }

        glow.style.left = e.clientX - 150 + "px";
        glow.style.top = e.clientY - 150 + "px";
    });

});
