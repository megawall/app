let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let btn=document.getElementById('btn')
let btns=document.getElementById('btns')
let inpSpeed = document.getElementById('inpSpeed')
let inp=document.getElementById('inp')
let values = [
    '😃', '😇', '😋', '😂', '😎', '😡'
]

btn.onclick=function(){
    value1.style.setProperty('animation-play-state','running')
    value2.style.setProperty('animation-play-state','running')
    value3.style.setProperty('animation-play-state','running')
} 

function getRandomValue() {
    return values[Math.floor(Math.random() * 6)]
}

let animationId;

function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId)

    animationId = setInterval(() => {

        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
    
    }, 1000 / newSpeed)
}

inpSpeed.onchange = function (ev) {
    
    document.documentElement.style.setProperty('--speed', ev.target.value)
    inp.value='';
    updateAnimation(ev.target.value)
}
let id;
function stop(){
    id=setInterval(()=>{
        if(inpSpeed.value==1){
            console.log('wefe')
            clearInterval(id)
            let x=value1.innerText;
            let y=value2.innerText;
            let z=value3.innerText;
            clearInterval(animationId)
            
            if(x==y && y==z)
            inp.value="You Won";
            else inp.value="You Lose"

        }
        document.documentElement.style.setProperty('--speed',--inpSpeed.value)
    },1000)
}
btns.onclick=function(){
    stop();
}