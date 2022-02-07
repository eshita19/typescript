//Abstract class
abstract class Department{
    private static FISCAL_YEAR =2022; // Static member accessible without object creation
    private readonly name: string; //Name should not change later, i.e. 'readonly'
    private employees: string[] = [];
    constructor(n:string){
        this.name = n;
    }

    set addEmployee(name:string){
        this.employees.push(name);
    }

    get getName(){
        return this.name;
    }

    get getEmployees(){
        return this.employees;
    }

    //Static method can access static members
    public static getFiscalYear(){
        return this.FISCAL_YEAR;
    }

    //Single Abstract method in base class, declare class as Abastract
    abstract getType():string;
}



//Inheritance
class ITDepartment extends Department{
    public staffNos?:number; //optional field
    constructor(name:string){
        super(name);
        this.staffNos = 10;
    }

    //Child class should override abstract methods from parent
    getType(): string {
        return "IT";
    }
}

const itDept = new ITDepartment("IT");
itDept.addEmployee = "eshita";
console.log("Created IT Dept : " + itDept.getName);
console.log("IT dept specific staff nos: " + itDept.staffNos)


interface Moveable{
    axis:number;
    get getAxis():number;
}

const table : Moveable = { 
    axis: 234,
    get getAxis(){
        return this.axis;
    }
}

console.log("The table's axis is : " + table.getAxis);