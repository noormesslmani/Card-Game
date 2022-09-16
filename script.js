const cards =  document.getElementsByClassName('card-inner')

const logos=['python','java','c']
const logoCards={}
var memory=[]

for (let card of cards){
    card.addEventListener('click', ()=>{
        if(memory.length==0){
            card.classList.toggle('rotate')
            memory.push(card)
        }
        else if (memory.length==1){
            if(card!=memory[0]){
                card.classList.toggle('rotate')
                memory.push(card)
            }
        }
        else {
            console.log(memory[0].classList)
            console.log(memory[1].classList)
            if (memory[0].classList.value==memory[1].classList.value){
                memory[0].classList.add('hide')
                memory[1].classList.add('hide')
            }
            else{
                memory[0].classList.toggle('rotate')
                memory[1].classList.toggle('rotate')
            }
            memory=[]
        } 
    })  
}

