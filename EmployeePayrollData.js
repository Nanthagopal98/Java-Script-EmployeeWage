class EmployeePayrollData {
    //Property
    id;
    salary;

    constructor(...details) {
        this.id = details[0];
        this.name = details[1];
        this.salary = details[2];
        this.gender = details[3];
        this.startDate = details[4];
    }

    get name() {
        return this._name;
    }
    set name(name) {
        console.log(name);
        this._name = name;
    }
    toString() {
        const option = { year: "numeric", month: "long", day: "numeric" };
        const joiningDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", option);
        return "Id: " + this.id + " Name: " + this.name + " Salary: " + this.salary +
            " Gender: " + this.gender + " Start Date: " + joiningDate;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Nantha", 50000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "Mani";
employeePayrollData.salary = 45000;
console.log(employeePayrollData.toString());
let AddedEmpDetail = new EmployeePayrollData(2,"Madhu",25000,"F",new Date());
console.log(AddedEmpDetail.toString());