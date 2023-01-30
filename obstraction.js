function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    let montlyBonus = 800;

    let calculateFinalsalary = function(){
        let finalSalary = baseSalary + montlyBonus;
        console.log ('Fanal Salary is : '+finalSalary);
    }
    
    this.getEmpDetails = function(){
        console.log ('Name :' +this.name+' | Age : '+this.age );
        calculateFinalsalary();
    }
}

let emp1 = new Employee('Sam', 25, 1500);
emp1.getEmpDetails();
