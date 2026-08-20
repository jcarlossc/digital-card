document.addEventListener("DOMContentLoaded", () => {

    /* ======================== ANO AUTOMÁTICO ========================= */
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    /* ======================== BOTÃO DE TEMA ========================= */
    const themeButton =
        document.getElementById("themeButton");
    if (themeButton) {
        themeButton.addEventListener("click",() => {
                document.body.classList.toggle(
                    "light-mode"
                );
                const icon =
                    themeButton.querySelector("i");
                if (
                    document.body.classList.contains(
                        "light-mode"
                    )
                ) {
                    icon.className =
                        "bi bi-sun";
                } else {
                    icon.className =
                        "bi bi-moon-stars";
                }
            }
        );
    }
    /* ========================= ANIMAÇÃO DOS CARDS ======================== */
    const cards =
        document.querySelectorAll(
            ".service-card"
        );
    const observer =
        new IntersectionObserver(
            (entries) => {
                entries.forEach(
                    (entry) => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity =
                                "1";
                            entry.target.style.transform =
                                "translateY(0)";
                        }
                    }
                );
            },
            {
                threshold: 0.15
            }
        );
    cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform =
            "translateY(20px)";
        card.style.transition =
            "opacity .6s ease, transform .6s ease";
        observer.observe(card);
    });
});