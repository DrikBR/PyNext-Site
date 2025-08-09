document.addEventListener("DOMContentLoaded", function () {
    //para funcionar, lembrar de colocar a classe nas logos!!!
    const botão = document.getElementById('trocar');
    const site = document.documentElement;
    const temaSalvo = localStorage.getItem("tema");
    const logos = document.querySelectorAll(".logo");

    function atualizarTexto() {
        const texto = document.getElementById('texto');
        if (site.classList.contains('dark')) {
            texto.textContent = "Modo Claro";
        } else {
            texto.textContent = "Modo Escuro";
        }
    }

    function atualizarIcone() {
        const icone = document.getElementById('icone');
        if (site.classList.contains('dark')) {
            icone.src = "../imagens/sol.png";
        } else {
            icone.src = "../imagens/lua.png";
        }
    }

    function atualizarLogo() {
        logos.forEach((logo) => {
            const fundo = logo.style.backgroundImage;
            if (site.classList.contains('dark')) {
                if (fundo) {
                    logo.style.backgroundImage = "url('../imagens/logoescura.png')";
                }
                logo.src = "../imagens/logoescura.png";
                
            } else {
                logo.src = "../imagens/logoclara.png";
                if (fundo) {
                    logo.style.backgroundImage = "url('../imagens/logoclara.png')";
                }
            }
        });
    }
    
    if (temaSalvo === "dark") {
        site.classList.add("dark");
    } else {
        site.classList.remove("dark");
    }

    atualizarTexto();
    atualizarIcone();
    atualizarLogo();

    botão.addEventListener('click', () => {
        site.classList.toggle('dark');

        if (site.classList.contains("dark")) {
            localStorage.setItem("tema", "dark");
        } else {
            localStorage.setItem("tema", "light");
        }
        
        atualizarTexto();
        atualizarIcone();
        atualizarLogo();
    });
});

function verificarEscolha() {
    if (form.escolha.selectedIndex == 1) {
        window.location = "cadastroProf.html";
    } else if (form.escolha.selectedIndex == 2) {
        window.location = "cadastroAlu.html";
    }
}