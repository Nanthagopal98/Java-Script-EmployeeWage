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
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(nameRegex.test(name))
        {
            this._name = name
        }
        else{
            throw "Invalid Name";
        }
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
try {
    employeePayrollData.name = "Man";
    employeePayrollData.salary = 45000;
    console.log(employeePayrollData.toString());
}
catch (e) {
    console.error(e);
}
let AddedEmpDetail = new EmployeePayrollData(2, "Madhu", 25000, "F", new Date());
console.log(AddedEmpDetail.toString());