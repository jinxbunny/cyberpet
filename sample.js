//Pet Creation Items
const modalBG = document.getElementById(`modalBG`);
const textInput = document.getElementById(`newNameInput`);
const pickRabbit = document.getElementById(`pickRabbit`);
const pickHamster = document.getElementById(`pickHamster`);
const createBtn = document.getElementById(`createBtn`);
const chooseName = document.getElementById(`chooseName`);
const newNameInput = document.getElementById(`newNameInput`);
const refreshName = document.getElementById(`refreshName`);

//Virtual Pet Status
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
let randomNames = [`Andy`, `Lukasz`, `Silvia`, `Suleman`, `Andre`, `Bex`, `Robert`, `Paddy`, `Lucy`, `Rebekah`, `Richard`, `Leona`, `Imran`, `Ben`, `Jacob`, `Dean`, `Liam`, `Neil`]

//animations
const blink0 = () => {
    if (base == true) {
        petImg.src = `img/${type}/base0.png`;
        setTimeout(blink1, 2000);
    }
};
const blink1 = () => {
    petImg.src = `img/${type}/base1.png`;
    setTimeout(blink0, 100);
};

class Pet {
    constructor(name, type, food) {
        this._name = name;
        this._type = type;
        this._food = food;
        this._hunger = 6;
        this._thirst = 6;
        this._love = 6;
    }
};

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
        createBtn.style.visibility = `hidden`;
        console.log("No Text")
    } else {
        createBtn.style.visibility = `visible`;
        console.log("Text")
    }
});

//get random number from amount of items in array and display it as the name
refreshName.addEventListener(`click`, () => {
    let number = Math.floor(Math.random() * randomNames.length);
    let name = randomNames[number];
    newNameInput.value = name;
    createBtn.style.visibility = `visible`;
});


const petChose = () => {
    chooseName.style.visibility = `visible`;
    topText.textContent = `${type}`;
    if (type == `Hamster`) {
        pickRabbit.src = `img/selectPet1.png`;
        pickHamster.src = `img/selectPet2s.png`;
        food = `Sunflower Seeds`
    } else if (type == `Rabbit`) {
        pickRabbit.src = `img/selectPet1S.png`;
        pickHamster.src = `img/selectPet2.png`;
        food = `Carrots`
    }
};

//front end animal setup
createBtn.addEventListener(`click`, () => {
    if (createBtn.style.visibility = `visible`) {
        petRest();
        create = false;
        name = textInput.value;
        pet = new Pet(name, type, food);
        console.log(pet);
        petInfo.textContent = `Hi I'm ${name} the ${type}`;
        petImg.src = `img/${type}/base0.png`;
        looseFood();
        looseWater();
        looseLove();
        chooseName.style.visibility = `hidden`;
        modalBG.style.visibility = `hidden`;
        createBtn.style.visibility = `hidden`;
        petArea.style.visibility = `visible`;
        topText.style.visibility = `hidden`;
    }
});

//Pet Care Functions
const petRest = () => {
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

const drinkNow = () => {
    if (pet._thirst < 5) {
        setTimeout(drinkNow, 1000);
        gainWater();
    } else {
        pet._thirst = 6;
        petRest();
        looseWater();
    }
}

const feedNow = () => {
    if (pet._hunger < 5) {
        setTimeout(petRest, 1000);
        gainFood();
    } else {
        pet._hunger = 6;
        petRest();
        looseFood();
    }
}

const loveNow = () => {
    if (pet._love < 5) {
        gainLove();
        setTimeout(petRest, 1000);
    }
}


//life functions
const gainFood = () => {
    pet._hunger++;
    petImg.src = `img/${type}/baseEat0.png`;
    foodID.src = `img/bars/food${pet._hunger}.png`;
    console.log(`Food: ${pet._hunger}`);
}

const looseFood = () => {
    if (pet._hunger > 0) {
        pet._hunger--;
        foodID.src = `img/bars/food${pet._hunger}.png`;
        setTimeout(looseFood, 20000);
        console.log(`Food: ${pet._hunger}`);
    } else pet._hunger = 0;
}

const gainWater = () => {
    pet._thirst++;
    petImg.src = `img/${type}/baseDrink.png`
    waterID.src = `img/bars/water${pet._thirst}.png`;
    console.log(`Water: ${pet._thirst}`);
}

const looseWater = () => {
    if (pet._thirst > 0) {
        pet._thirst--;
        waterID.src = `img/bars/water${pet._thirst}.png`;
        setTimeout(looseWater, 10000);
        console.log(`Water: ${pet._thirst}`);
    } else pet._thirst = 0
}

const gainLove = () => {
    pet._love++;
    loveID.src = `img/bars/love${pet._love}.png`;
    console.log(`Love: ${pet._love}`);
}

const looseLove = () => {
    if (pet._love > 0) {
        pet._love--;
        loveID.src = `img/bars/love${pet._love}.png`;
        setTimeout(looseLove, 15000);
        console.log(`Love: ${pet._love}`);
    }
}