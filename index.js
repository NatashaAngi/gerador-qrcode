const trilho = document.getElementById('trilho')
const body = document.querySelector('body')
const titulo = document.querySelector('h2')
const texto = document.querySelector('p')
const input = document.getElementById('input')
const botao = document.querySelectorAll('.btn')

const container = document.querySelector('.container')
const qrCodeBtn = document.querySelector('#qr-form button')
const qrInput = document.querySelector('#qr-form input')
const image = document.querySelector('#qrCode img')

trilho.addEventListener('click',()=>{trilho.classList.toggle('dark')
body.classList.toggle('dark'), titulo.classList.toggle('dark'),texto.classList.toggle('dark'),input.classList.toggle('dark'),botao.forEach(btn => btn.classList.toggle('dark'))})

function geradorQr(){ const inputValue = qrInput.value

if(!inputValue) alert("Por favor, insira um texto ou URL")

qrCodeBtn.innerHTML = "Gerando código..."

image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`

image.addEventListener("load", ()=>{container.classList.add("active"); qrCodeBtn.innerHTML="Código criado!"})

}

qrCodeBtn.addEventListener("click",()=>{geradorQr()})

qrInput.addEventListener("keydown",(e)=>{if(e.code === "Enter"){geradorQr()}})

qrInput.addEventListener("keyup", ()=>{if (!qrInput.value){container.classList.remove("active");
qrCodeBtn.innerHTML = "Gerar QR code"}})