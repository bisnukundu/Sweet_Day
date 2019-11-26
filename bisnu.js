
window.addEventListener("scroll",()=>{
    let right_contente = document.querySelector(".right_contente");
    let right_size = right_contente.getBoundingClientRect().top;
    let right_win = window.innerHeight / 2 ;
    if(right_size < right_win){
        right_contente.classList.add("right_c_e")
    }
})

window.addEventListener("scroll",()=>{
    let right_contente = document.querySelector(".left_contente");
    let right_size = right_contente.getBoundingClientRect().top;
    let right_win = window.innerHeight / 2 ;
    if(right_size < right_win){
        right_contente.classList.add("left_c_e")
    }
})
console.log(innerHeight)
