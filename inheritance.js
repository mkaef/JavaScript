class car{

    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log ('Engine started for' +this.name);
    }
    stopEngine(){
        console.log ('Engine stopped for' +this.name);
    }
}

class Toyota extends car{

    topSpeed(speed){
        console.log ('Top speed for'+this.name+ 'is' +speed);
    }
}

let myCar = new Toyota();
myCar.setName('Corola');
myCar.startEngine();
myCar.startEngine();
myCar.topSpeed(160);

