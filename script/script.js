const cards =  document.getElementsByClassName('card-inner')
const title =  document.getElementById('title')
const restart = document.getElementById('restart')
const logos=['python','java','c']
let hidden=0 //keep track of hidden cards
let memory=[] //keep track of flipped cards

//reset the game
restart.onclick=()=>{
    for (let card of cards){
        card.classList.remove('rotate')
        card.style.display.block
        hidden=0
        memory=[]
        title.textContent='Click on the Cards, and find the matching ones!'
        title.style.color='grey'
    }
}

for (let card of cards){
    card.addEventListener('click', ()=>{
        //if no cards flipped, flip the selected card and push it to the memory
        if(memory.length==0){ 
            card.classList.toggle('rotate')
            memory.push(card)
        }
        //if one card is flipped, flip the selected card as long as its a different card, and push to memory
        else if (memory.length==1){
            if(card!=memory[0]){
                card.classList.toggle('rotate')
                memory.push(card)
            }
        }
        //if 2 cards a flipped compare the classes of the 2 cards
        else {
            //hide cards if they have matching calsses
            if (memory[0].classList.value==memory[1].classList.value){
                memory[0].classList.add('hide')
                memory[1].classList.add('hide')
                hidden+=2
                //if all cards are hidden the game ends
                if (hidden==6){
                    title.textContent='Congratulations, you won!'
                    title.style.color='green'
                }
            }
            //if classes dont match flip them again and reset the memory
            else{
                memory[0].classList.toggle('rotate')
                memory[1].classList.toggle('rotate')
            }
            memory=[]
        } 
        
    })  
}

