function trocar() {

    //para funcionar, lembrar de colocar os IDS no html e nas logos!!!

    const botão = document.getElementById('trocar');
    const site = document.getElementById('site');
    const icone = document.getElementById('icone');
    const textobot = document.getElementById('textobot');
    const logo = document.getElementById('logo');
    const fundo = document.getElementById('fundo');

    botão.addEventListener('click', () => {

        site.classList.toggle('dark');

        const siteescuro = site.classList.contains('dark');

        if (siteescuro) {
            icone.src = "../imagens/sol.png";
            textobot.textContent = "Modo Claro";
            if (logo) {
                logo.src = "../imagens/logoescura.png";
            }
            if (fundo) {
                fundo.style.backgroundImage = "url('../imagens/logoescura.png')";
            }
            
        } else {
            icone.src = "../imagens/lua.png";
            textobot.textContent = "Modo Escuro";
            if (logo) {
                logo.src = "../imagens/logoclara.png";
            }
            if (fundo) {
                fundo.style.backgroundImage = "url('../imagens/logoclara.png')";
            }
        }
    });
}

function abrirjanela () {
    document.getElementById("janela").classList.remove("hidden");
}

function fecharjanela () {
    document.getElementById("janela").classList.add("hidden");
}

function abrirjanela2 () {
    document.getElementById("janela2").classList.remove("hidden");
}

function fecharjanela2 () {
    document.getElementById("janela2").classList.add("hidden");
}

window.addEventListener("DOMContentLoaded", trocar);