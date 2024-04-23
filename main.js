const logo=document.querySelector(`.logo`)
const button=document.querySelector(`.yordam`)
const fiksed2=document.querySelector(`.fixsed2`)
const fiksed1=document.querySelector(`.fixsed1`)
const tepa=document.querySelector(`.tepa`)
const das=document.querySelector(`.das`)



logo.addEventListener(`click`, ()=>{
fiksed1.classList.add(`new`);
fiksed2.classList.add(`asd`);

})
button.addEventListener(`click`, ()=>{
    fiksed1.classList.add(`new`);
    fiksed2.classList.add(`asd`);
    
    })
  

tepa.addEventListener(`click`, ()=>{
    fiksed1.classList.remove(`new`)
    button.classList.remove(`new`);
    fiksed2.classList.remove(`asd`);
    })
      