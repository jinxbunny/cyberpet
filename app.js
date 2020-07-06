const petImg = document.getElementById(`petImg`);
const petName = document.getElementById(`petName`);
const petHunger = document.getElementById(`food`);
const petThirst = document.getElementById(`water`);
const petLove = document.getElementById(`love`);
const pickRabbit = document.getElementById(`pickRabbit`);
const pickHamster = document.getElementById(`pickHamster`);
const submitButton = document.getElementById(`submitButton`);
const newNameInput = document.getElementById(`newNameInput`)

let animalType = `choosing`;
let animalName = `choosing`;
let animalGender = `choosing`;

//functions
const gainHunger =()=>{
    if (this._hunger >0){
        this._hunger --;
        petHunger.src = `img/bars/food${this._hunger}.png`;
        setTimeout(gainHunger, 20000);
    }
}


class Pet{
    constructor(name){
        this._name = name;
        this._hunger = 5;
        this._thirst = 5;
        this._amusement = 5;
       }
       get name(){return this._name;}
       get eats(){return this._eats;}
       get type(){return this._type;}
       get hunger(){return this._hunger;}
       get thirst(){return this._thirst;}
       get amusement(){return this._amusement;}
       
       LooseFun(){
           if (this._amusement >0){
               this._amusement--;
               return(`${this._name} Says: I'm feeling kinda Bored.. (Amusement Level:${this._amusement})`);
           }
       }
       LooseFood(){
           if (this._hunger >0){
               this._hunger--;
               return(`${this._name} Says: ${this._needFood}`);
           }
       } 
       LooseWater(){
           if (this._thirst >0){
               this._thirst--;
               return(`${this._name} Says: I'm feeling kinda Thirsty.. :(Thirst Level:${this._thirst})`);
           }
       }
       eat(){
           if (this._hunger <5){
               this._hunger++;
               return(`${this._name} Says: ${this._eatingFood}`);
            } else {
                return(`${this._name} Says: ${this._fullOfFood}`);
            }
        }
       drink(){
           if (this._thirst <5){
               this._thirst++;
               return(`${this._name} Says: Mmm I needed that (Thirst Level:${this._thirst})`);
           } else {
               return(`${this._name} Says: I'm not thirsty (Thirst Level:${this._thirst})`);
           }
       }
}

class Rabbit extends Pet {
   constructor(name){
        super(name);
        this._type = `Rabbit`;
        this._food = `Carrots`;
        gainHunger();
    }
}

class Hamster extends Pet {
   constructor(name){
        super(name);
        this._type = `Hamster`;
        this._food = `Sunflower Seeds`;
    }
}

pickHamster.addEventListener(`click`, () => {
    animalType = `Hamster`;
    petChose();
});

pickRabbit.addEventListener(`click`, () => {
    animalType = `Rabbit`;
    petChose();
});

submitButton.addEventListener(`click`, () => {
    animalName = document.getElementById(`newNameInput`).value;
    petName.textContent=(`Hi I'm ${animalName} the ${animalType}`);
    petImg.style.visibility= `visible`;
    petImg.src=`img/${animalType}/base.png`
    console.log(animalName);
    if (animalType == `Rabbit`){
    newRabbit= new Rabbit (animalName);
    console.log(newRabbit)
    } else if (animalType == `Hamster`){
    newHamster= new Hamster (animalName);
    console.log(newHamster);
    }
});

const petChose = () => {
    if (animalType == `Hamster`){
        pickRabbit.src=`img/select_Pet1.png`;
        pickHamster.src=`img/select_Pet2s.png`;
    } else if (animalType == `Rabbit`){
        pickRabbit.src=`img/select_Pet1s.png`;
        pickHamster.src=`img/select_Pet2.png`; 
    }
}





