// class className{
//     statement
// }

 class Employee{

    setDetails(name, id){
        this.name = name;
        this.id = id;
     }

 }

 let emp1 = new Employee();
 emp1.setDetails('Sam', 5687);
 console.log (emp1.name);
 console.log (emp1.id);

class Employee{
    constructor (name, id){
      this.name = name;
      this.id = id;  
    }
}

let emp1 = new Employee('Luc', 2015);
let emp2 = new Employee('David', 1889);
console.log (emp1.name, emp2.name);
console.log (emp1.id, emp2.id);