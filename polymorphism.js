class Animal{

    constructor(name){
        this.name = name
    }
    eats(){
        console.log (this.name+ 'eats food');
    }
}

class Lion extends Animal{
     eats(){
        super.eats();
        console.log(this.name+ 'eats meat');
     }

}

let tenor = new Lion('Tenor');
tenor.eats();