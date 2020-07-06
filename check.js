const waterBar = document.getElementById(`waterBar`);

let thirst=100;

const looseWater =()=>{
    if (thirst >0){
        thirst --;
        waterBar.style.width = `${thirst}%`;
        setTimeout(looseWater, 300);
        console.log(`Water: ${thirst}`);
    } else thirst = 0
}

looseWater();