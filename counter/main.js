const zeroDesk = document.querySelector('.h1counter')
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')

let zero = 0;


console.log()

increase.addEventListener('click', function (){
    zero += 1        
    zeroDesk.innerHTML = zero
})

reset.addEventListener('click', function () {
    zeroDesk.innerHTML = 0
    zero = 0
})


decrease.addEventListener('click', function (){
    zero -= 1
    zeroDesk.innerHTML = zero
    
})