class Department{
    private readonly name: string; //Name should not change later, i.e. 'readonly'
    private employees: string[] = [];
    constructor(n:string){
        this.name = n;
    }


    addEmployee(name:string){
        this.employees.push(name);
    }

    getName(){
        return this.name;
    }

    getEmployees(){
        return this.employees;
    }
}

const dept:Department = new Department("123")
console.log("I belong to department : " + dept.getName());
dept.addEmployee("eshita");
console.log("There are employees in my dept: " + dept.getEmployees());


//Inheritance
class ITDepartment extends Department{
    public staffNos:number;
    constructor(name:string){
        super(name);
        this.staffNos = 10;
    }
}

const itDept = new ITDepartment("IT");
itDept.addEmployee("eshita");
console.log("Created IT Dept : " + itDept.getName());
console.log("IT dept specific staff nos: " + itDept.staffNos)