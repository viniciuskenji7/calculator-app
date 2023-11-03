//Visor
const visor = document.querySelector('#visorCalcInput');
const botoes = document.querySelectorAll('button');
const caracEspecial = ["%", "*", "/", "-", "+", "="];
let output = "";
//Define função para calcular baseado em click
const calcular = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        // Se o a saida for = "%" ele vai dividir por 100
        output = eval(output.replace("%","/100"));
    }
    else if (btnValue === "DEL"){
        //Se o botao DEL for clicado ele remove caracter
        output = output.toString().slice(0, -1);
    }
    else if (btnValue === "RESET") {
        output = "";
    }
    else {
        if(output === "" && caracEspecial.includes(btnValue)) return;
        output += btnValue;
    }
    visor.value = output;
}
//Adiciona o add event listener para os botoes e chama a funcao calcular() ao clicar
botoes.forEach((button) => {
    //Botao click listener chama calcular() com innerText com o valor dos argumentos
    button.addEventListener("click", (e) => calcular(e.target.innerHTML))
})

//Configurações do tema

const chk = document.querySelector('.checkbox');
const html = document.querySelector('html');

chk.addEventListener('change', function(){
    html.classList.toggle('dark-mode')
})
