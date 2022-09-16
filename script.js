const cards =  document.getElementsByClassName('card-inner')
const memory=[]
const logos=['python','java','c']
const logoCards={}


console.log(logoCards)
for (let i=0;i<6;i++){
    cards[i].addEventListener('click', ()=>{
        cards[i].classList.toggle('rotate')
        memory.push(cards[i])
        // if(memory.length==2){

        // }
    })  
}

