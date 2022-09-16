const cards =  document.getElementsByClassName('card-inner')
const title =  document.getElementById('title')
const logos=['python','java','c']
hidden=0
memory=[]


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
            if (memory[0].classList.value==memory[1].classList.value){
                memory[0].classList.add('hide')
                memory[1].classList.add('hide')
                hidden+=2
                if (hidden==6){
                    title.textContent='Congratulations, you won!'
                    title.style.color='green'
                }
            }
            else{
                memory[0].classList.toggle('rotate')
                memory[1].classList.toggle('rotate')
            }
            memory=[]
        } 
        
    })  
}

