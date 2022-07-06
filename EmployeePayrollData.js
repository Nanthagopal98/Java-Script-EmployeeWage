class EmployeePayrollData {
    //Property
    id;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name() {
        return this._name;
    }
    set name(name) {
        console.log(name);
        this._name = name;
    }
    toString() {
        return "Id: " + this.id + " Name: " + this.name + " Salary: " + this.salary;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Nantha", 50000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "Mani";
employeePayrollData.salary = 45000;
console.log(employeePayrollData.toString());