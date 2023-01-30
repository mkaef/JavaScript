class Employee{
    setEmpDetails(name, id, phoneNo){
        this.name = name;
        this.id = id;
        this._phoneNo;
    }

    getEmpName(){
        return this.name;
    }
    getEmpId(){
        return this.id;
    }
    getEmpPhoneNo(){
        return this.phoneNo;
    }


}

let emp1 = new Employee();
emp1.setEmpDetails('Sam', 2001, 9035687141);
console.log (emp1.getEmpName());
console.log (emp1.getEmpId());
console.log (emp1.getEmpPhoneNo());
