const buttons = document.querySelectorAll(".num")
const numeros = document.querySelectorAll(".dig")
const tela = document.querySelector(".tela")
const digitado = document.querySelector(".digitado")
const divCandidato = document.querySelector(".candidato")
document.getElementById("c").addEventListener("click", corrige)

digitado.style.display = "none"
let imagem = document.querySelector(".imagem img")
let nome = document.querySelector(".nome")
let span = document.querySelector("span")
let p = document.querySelector("h5")

let candidato;

const cand = [
    {
        nome: "Luiz Inácio Lula da Silva",
        numero: "13",
        proposta: "sagbf sgvdfv efsaf",
        foto: "./src/assets/images/lula.webp"
    },
    {
        nome: "Jair Messias Bolsonaro",
        numero: "22",
        proposta: "vsdgcbf scvb vsdfb",
        foto: "./src/assets/images/bozo.webp"   
    }
]

function init() {
    
    remover()
    
    let array = []
    escolherNumero(array) 
        
}

function escolherNumero(array) {

    buttons.forEach(btn=>{
        btn.addEventListener("click", ()=>{
            
            array.push(btn.value)

            if (array[1]) {
                num2(array)
            }else{
                num1(array)

            }
        })
    })      
    
}

function num1(array) {
    remover()
    numeros[0].innerHTML = array[0]
}

function num2(array) {
    numeros[1].innerHTML = array[1]
    opcaoCandidato(array)
}

function opcaoCandidato(array) {
    if (array[0] === "1" & array[1] === "3") {
        console.log("lula");
        let cand01 = 0;
        candidato = cand01
        escolherCandidato(candidato)

    } else if (array[0] === "2" & array[1] === "2") {
        console.log("Bozo");
        let cand02 = 1;
        candidato = cand02
        escolherCandidato(candidato)

    }else{
        console.log("nada");
    }
}

function escolherCandidato(candidato) {

    divCandidato.style.display = "flex"
    digitado.style.display ="none"

    imagem.src = cand[candidato].foto

    nome.innerHTML = cand[candidato].nome 
    
    span.innerHTML = cand[candidato].numero
    
    p.innerHTML = cand[candidato].proposta 

}
function removeCandidato(candidato) {

    divCandidato.style.display = "none"
    
    imagem.src = ""

    nome.innerHTML = ""
    
    span.innerHTML = ""
    
    p.innerHTML = ""

}
function remover() {
    numeros.forEach(num=>{
        num.innerHTML = "";
    })
    digitado.style.display = "flex"
    divCandidato.style.display = "none"
}
function corrige(candidato) {
    // removeCandidato(candidato)
    array = []
    init()
    // digitado.style.display = "flex"
    // divCandidato.style.display = "none"
}

init()