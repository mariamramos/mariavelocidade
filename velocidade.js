const form=document.querySelector("form")
const resp1=document.querySelector("h3")
const resp2=document.querySelector("h4")

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    const velocidade1 = Number (form.inVelocidade1.value)
    const velocidade2 = Number (form.inVelocidade2.value)
    const media = (velocidade1 + velocidade2)/2
    resp1.innerText = `Velocidade verificada ${media.toFixed(2)}`

