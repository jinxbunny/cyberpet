//Pet Creation Items
const modalBG = document.getElementById(`modalBG`);
const textInput = document.getElementById(`newNameInput`);
const pickRabbit = document.getElementById(`pickRabbit`);
const pickHamster = document.getElementById(`pickHamster`);
const createBtn = document.getElementById(`createBtn`);
const chooseName = document.getElementById(`chooseName`);
const newNameInput = document.getElementById(`newNameInput`);
const refreshName = document.getElementById(`refreshName`);
const topText = document.getElementById(`topText`);

//Virtual Pet Status
const speachBubble = document.getElementById(`speachBubble`);
const petArea = document.getElementById(`petArea`);
const petInfo = document.getElementById(`petInfo`);
const petImg = document.getElementById(`petImg`);
const waterBar = document.getElementById(`waterBar`);
const foodID = document.getElementById(`foodID`);
const waterID = document.getElementById(`waterID`);
const loveID = document.getElementById(`loveID`);

//Pet Care Visuals
const petDrink = document.getElementById(`petDrink`);
const petLove = document.getElementById(`petLove`);
const petEat = document.getElementById(`petEat`);

//Global Variables
let create = true;

let pet;
let num;
let name = ``;
let type = ``;
let food = ``;
let love = ``;

let thirsty = false;
let hungry = false;
let Lovelonging = false;
let base = false;

//Random Name Choices
let randomNames = [`Andy`,`Lukasz`,`Silvia`,`Suleman`,`Andre`,`Bex`,`Robert`,`Paddy`,`Lucy`,`Rebekah`,`Richard`,`Leona`,`Imran`,`Ben`,`Jacob`,`Dean`,`Liam`,`Neil`]

// const bubbleFade = () => {
//     speachBubble.style.animationName="fadeOut";
// }

// if (speachBubble.animationName=`none`){
//     setTimeout(bubbleFade, 5000)
// }


//animations
const blink0 = () => { 
    if (base == true){
        petImg.src=`img/${type}/base0.png`;
        setTimeout(blink1,2000);
    }
};
const blink1 = () => {
    petImg.src=`img/${type}/base1.png`;
    setTimeout(blink0,100);
};

const eat0 = () => {
    petImg.src=`img/${type}/baseEat0.png`
    e1= setTimeout(eat1,1000);
};
const eat1 = () => {
    gainFood();
    petImg.src=`img/${type}/baseEat1.png`
    e2= setTimeout(petRest,2000);
};

//Class setup
class Pet{
    constructor(name,gender,eats,type){
        this._name = name;
        this._gender = gender;
        this._eats = eats;
        this._type = type;
        this._hunger = 5;
        this._thirst = 5;
        this._amusement = 5;
       }
       get name(){return this._name;}
       get gender(){return this._gender;}
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
               foodID.src=`img/bars/food${this._hunger}.png`;
               return(`${this._name} Says: I'm feeling kinda Hungry.. :(Thirst Level:${this._hunger})`);
           }
       }
       LooseWater(){
           if (this._thirst >0){
               this._thirst--;
               return(`${this._name} Says: I'm feeling kinda Thirsty.. :(Thirst Level:${this._thirst})`);
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
   constructor(name, gender, eats, type){
        super(name, gender, eats, type);
    }
    feedNow(){
       if (this._hunger <5){
           this._hunger++;
           foodID.src=`img/bars/food${this._hunger}.png`;
           return(`${this._name} *Munch Munch* Mmm I Love Carrots (Hunger Level:${this._hunger})`);
       } else {
           return(`${this._name} Says: I Couldn't Eat Another Bite (Hunger Level:${this._hunger})`);
       }
   }
   play(){
       if (this._amusement <5){
           this._amusement++;
           return(`${this._name} Says: Yay! I Love Hopping! (Amusement Level:${this._amusement})`);
       } else {
           return(`${this._name} Says: I'm All Hopped Out For One Day (Amusement Level):${this._amusement})`);
       }
   }
}

class Hamster extends Pet {
   constructor(name, eats, type){
        super(name, gender, eats, type);
    }
    feedNow(){ 
       if (this._hunger <5){
           this._hunger++;
           foodID.src=`img/bars/food${this._hunger}.png`;
           return(`${this._name} Says: *Crunch Crunch* Mmm Sunflower Seeds (Hunger Level:${this._hunger})`);
       } else {
           return(`${this._name} Says: My Cheeks Are Already Stuffed! (Hunger Level:${this._hunger})`);
       }
   }
   play(){
       if (this._amusement <5){
           this._amusement++;
           return(`${this._name} Says: Weee This Is Fun! (Amusement Level:${this._amusement})`);
       } else {
           return(`${this._name} Says: I'm Already A Happy Hamster (Amusement Level):${this._amusement})`);
       }
   }
}

const NewRabbit = new Rabbit(`${name}`,`${food}`,`${type}`);
console.log(NewRabbit);

//animal choice buttons
pickHamster.addEventListener(`click`, () => {
    type = `Hamster`;
    petChose();
});

pickRabbit.addEventListener(`click`, () => {
    type = `Rabbit`;
    petChose();
});

//check there's text in the name box
newNameInput.addEventListener(`input`, () => {
    if (newNameInput.value == "") { 
        createBtn.style.visibility=`hidden`;
        console.log("No Text")
    } else {
        createBtn.style.visibility=`visible`;
        console.log("Text")
    }
});

//get random number from amount of items in array and display it as the name
refreshName.addEventListener(`click`, () => {
    typed = newNameInput.value;
    let number = Math.floor(Math.random() * randomNames.length);
    let name = randomNames[number];
    newNameInput.value = name;
    createBtn.style.visibility=`visible`;
    
});

//Pick between pets
const petChose = () => {
    chooseName.style.visibility=`visible`;
    if (type == `Hamster`){
        pickRabbit.src=`img/select_Pet1.png`;
        pickHamster.src=`img/select_Pet2s.png`;
        topText.textContent=`${type}`;
        food = `Sunflower Seeds`
    } else if (type == `Rabbit`){
        pickRabbit.src=`img/select_Pet1s.png`;
        pickHamster.src=`img/select_Pet2.png`;
        topText.textContent=`${type}`;
        food = `Carrots` 
    }
};

//Animal creation
createBtn.addEventListener(`click`, () => {
    if (createBtn.style.opacity=`visible`) {
        petRest();
        create = false;
        name = textInput.value;
        petInfo.textContent=`Hi I'm ${name} the ${type}`;
        petImg.src=`img/${type}/base0.png`;
        chooseName.style.visibility=`hidden`;
        modalBG.style.visibility=`hidden`;
        createBtn.style.visibility=`hidden`;
        petArea.style.visibility=`visible`;
        topText.style.visibility=`hidden`;
        speachBubble.style.opacity=`100%`;
        
        if (type == `Rabbit`) {
            pet = new Rabbit(name, type, food);
            console.log(pet);
            Rabbit.LooseFood();
            Rabbit.LooseWater();
            Rabbit.LooseLove();
        } else if (type == `Hamster`) {
            pet = new Hamster(name, type, food);
            console.log(pet);
        }
    }

});

//Pet Care Functions
const petRest =()=> {
    base = true;
    blink0();
}

//pet care buttons
petDrink.addEventListener(`click`, () => {
    base = false;
    drinkNow();
});
petLove.addEventListener(`mousedown`, () => {
    base = false;
    loveNow();
});
petEat.addEventListener(`click`, () => {
    base = false;
    feedNow();
});

// const drinkNow =()=>{
//     if (pet._thirst <5){
//         petImg.src=`img/${type}/baseDrink.png`;
//         setTimeout(drinkNow, 1000);
//         gainWater();
//     } else {
//         pet._thirst = 6;
//         petRest();
//         looseWater();
//     }
// }

// const feedNow =()=>{
//     if (pet._hunger <5){
//         petImg.src=`img/${type}/baseEat0.png`;
//         setTimeout(petRest, 1000);
//         gainFood();
//     } else {
//         pet._hunger = 6;
//         petRest();
//         looseFood();
//     }
// }

// const loveNow =()=>{
//     if (pet._love <5){
//         gainLove();
//         setTimeout(petRest, 1000);
//     }
// }

// //life functions
// const gainFood =()=>{
//     pet._hunger ++;
//     foodID.src=`img/bars/food${pet._hunger}.png`;
//     console.log(`Food: ${pet._hunger}`);
// }

// const looseFood =()=>{
//     if (pet._hunger >0){
//         pet._hunger --;
//         foodID.src=`img/bars/food${pet._hunger}.png`;
//         setTimeout(looseFood, 20000);
//         console.log(`Food: ${pet._hunger}`);
//     } else pet._hunger = 0;
// }

// const gainWater =()=>{
//     pet._thirst ++;
//     console.log(`Water: ${pet._thirst}`);
// }

// const looseWater =()=>{
//     if (pet._thirst >0){
//         pet._thirst --;
//         waterID.src=`img/bars/water${pet._thirst}.png`;
//         setTimeout(looseWater, 10000);
//         console.log(`Water: ${pet._thirst}`);
//     } else pet._thirst = 0
// }

// const gainLove=()=>{
//     pet._love ++;
//     loveID.src=`img/bars/love${pet._love}.png`;
//     console.log(`Love: ${pet._love}`);
// }

// const looseLove =()=>{
//     if (pet._love >0){
//         pet._love --;
//         loveID.src=`img/bars/love${pet._love}.png`;
//         setTimeout(looseLove, 15000);
//         console.log(`Love: ${pet._love}`);
//     }
// }
