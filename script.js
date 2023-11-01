//_acan classe que todos os botoes tem
//_acas classe que o botão seguir tem
//_acat classe que o botão seguindo tem

let contador = 0;
let arr = document.querySelectorAll("._acan");
arr.forEach((v, i)=>{
    setTimeout(()=>{
        if(!v.classList.contains("_acat")){
            v.click();
            contador++;
            console.log(`O robo já seguiu ${contador} pessoas`);
        } else {
            console.log("Você já segue este Usuário.");
        }
    }, i * 10000);//fim do setTimeout
});// fim do forEach