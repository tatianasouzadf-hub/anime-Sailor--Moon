// ============================================
// HEADER: fica mais sólido ao rolar a página
// ============================================
const header = document.getElementById("siteHeader");

function atualizarHeader() {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}
window.addEventListener("scroll", atualizarHeader, { passive: true });
atualizarHeader();

// ============================================
// MENU MOBILE (hamburger)
// ============================================
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
    const aberto = mobileMenu.classList.toggle("open");
    hamburgerBtn.classList.toggle("open", aberto);
    hamburgerBtn.setAttribute("aria-expanded", aberto ? "true" : "false");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburgerBtn.classList.remove("open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
    });
});

// ============================================
// BOTÃO "ASSISTIR AGORA": rola até os personagens
// ============================================
const watchBtn = document.getElementById("watchBtn");
if (watchBtn) {
    watchBtn.addEventListener("click", () => {
        document.getElementById("personagens").scrollIntoView({ behavior: "smooth" });
    });
}

// ============================================
// ANIMAÇÕES NO SCROLL (IntersectionObserver)
// ============================================
const elementosAnimados = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("in-view");
                observer.unobserve(entrada.target);
            }
        });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
);

elementosAnimados.forEach((el) => observer.observe(el));