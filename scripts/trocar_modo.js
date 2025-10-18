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

    function atualizarEditor() {
        const editor = document.getElementById('editor');

        if (editor) {
            const editorACE = ace.edit('editor');
            const gutter = document.querySelector(".ace_gutter");
            const output = document.getElementById('output');
            const fundoeditor = document.getElementById('fundoeditor');

            if (site.classList.contains('dark')) {
                editorACE.setTheme("ace/theme/cobalt");
                editor.style.backgroundColor = '#1F2937';
                fundoeditor.style.backgroundColor = '#1F2937';
                output.style.backgroundColor = '#1F2937';
                editor.style.color = 'white';
                editor.style.fontWeight = "normal";
                gutter.style.backgroundColor = "#374151";
            } else {
                editorACE.setTheme("ace/theme/clouds");
                editor.style.color = 'black';
                editor.style.backgroundColor = '#ffeeac';
                fundoeditor.style.backgroundColor = '#ffeeac';
                editor.style.fontWeight = "bolder";
                gutter.style.backgroundColor = "#ffdd6c";
                output.style.backgroundColor = "#ffdd6c";
            }
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
    atualizarEditor();

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
        atualizarEditor();
    });
});

function verificarEscolha() {
    if (form.escolha.selectedIndex == 1) {
        window.location = "cadastroProf.html";
    } else if (form.escolha.selectedIndex == 2) {
        window.location = "cadastroAlu.html";
    }
}