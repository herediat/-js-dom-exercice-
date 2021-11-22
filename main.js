// ### 1. Au double clique du h1, son fond devient rouge et son texte devient blanc
let monH1 = document.querySelector("h1")
monH1.addEventListener("dblclick", () =>{
    monH1.style.background = "red"
    monH1.style.color = "white"

})


// ### 2. Au hover du h3, son texte rétrécit d'un caractère 
let monH3 = document.querySelector("h3")

monH3.addEventListener("mouseover", () => {
    monH3.innerText = monH3.textContent.substring(0, monH3.textContent.length-1)
})

// monH3.addEventListener("mouseover", () => {
//     monH3.style.color = "blue"
// })

// monH3.addEventListener("mouseout", () => {
//     monH3.style.color = "black"

// })


// ### 3. Quand on clique sur le paragraphe le fond devient bleu et le texte gold, mais si le fond et déjà bleu et le texte déjà gold alors le fond redevient blanc et le texte noir
let p = document.querySelector("p")
p.addEventListener("click", () => {
    if (p.style.background == "" && p.style.color == "") {
        p.style.background = "blue"
        p.style.color = "gold"
    }else{
        p.style = ""
    }
})

