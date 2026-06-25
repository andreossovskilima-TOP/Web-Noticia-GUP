// Adiciona a data atualizada dinamicamente na notícia
document.addEventListener("DOMContentLoaded", () => {
    const dateSpan = document.getElementById("current-date");
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    dateSpan.textContent = today.toLocaleDateString('pt-BR', options);
});

// Sistema de Alternância de Tema (Claro / Escuro)
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
});

// Carrega a preferência de tema salva pelo usuário
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
}