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
     eat(){
        if (this._hunger <5){
            this._hunger++;
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
    constructor(name, gender, eats, type){
         super(name, gender, eats, type);
     }
     eat(){ 
        if (this._hunger <5){
            this._hunger++;
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

const NewRabbit = new Rabbit("Ralph", "Male","Carrots","Rabbit"); //small n
console.log(NewRabbit);

const NewHamster = new Hamster("Harriet", "Female","SunflowerSeed","Hamster");//small n
console.log(NewHamster)

//Rabbit's reaction to eating when full (Unique to rabbit)!
console.log(NewRabbit.eat());

//Rabbit looses food (same way all the animals do)
console.log(NewRabbit.LooseFood());

//Rabbit's reaction to eating when hungry (Unique to rabbit)!
console.log(NewRabbit.eat());

//Hamster's reaction to eating when full (Unique to hamster)!
console.log(NewHamster.eat());

//Hamster looses food (same way all the animals do)
console.log(NewHamster.LooseFood());

//Hamster's reaction to eating when hungry (Unique to hamster)!
console.log(NewHamster.eat());

//Rabbit would Increase Amusement with unique function, if lower than 5 on fun
console.log(NewRabbit.hop());

//Hamster would Increases Amusement with unique function, if lower than 5 on fun
console.log(NewHamster.runInWheel());

//Hamster looses fun (same way all the animals do)
console.log(NewHamster.LooseFun());

//Rabbit looses fun (same way all the animals do)
console.log(NewRabbit.LooseFun());

//Rabbit Increases Amusement with unique function, now fun is lower than 5
console.log(NewRabbit.hop());

//Hamster Increases Amusement with unique function, now fun is lower than 5
console.log(NewHamster.runInWheel());



console.log(NewRabbit);
