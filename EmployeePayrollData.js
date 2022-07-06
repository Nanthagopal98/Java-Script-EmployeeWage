class EmployeePayrollData {
    
    constructor(...details) {
        this.id = details[0];
        this.name = details[1];
        this.salary = details[2];
        this.gender = details[3];
        this.startDate = details[4];
        this.email = details[5];
        this.pinCode = details[6];
    }
    get id(){
        return this._id;    
    }
    set id(id){
        let idRegex = RegExp("^[1-9]{1}[0-9]*$")
        if (idRegex.test(id))
        {
            this._id = id;
        }
        else{
            throw "Invalid ID";
        }
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
    get salary(){
        return this._salary
    }
    set salary(salary){
        let salaryRegex = RegExp("^[1-9]{1}[0-9]*([.]?)[0-9]+$");
        if(salaryRegex.test(salary)){
            this._salary = salary;
        }
        else{
            throw "Invalid Salary";
        }
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
        let genderRegex = RegExp("^[M|F]{1}$");
        if (genderRegex.test(gender)){
            this._gender = gender;
        }
        else{
            throw "Invalid Gender";
        }
    }
    get email(){
        return this._email;
    }
    set email(email){
        let emailRegex = RegExp("^[a-zA-Z0-9]+[\.]?[a-zA-Z0-9]+[\@]{1}[a-z]{1,}[\.]{1}(com|co){1}(.in|.us)*$");
        if (emailRegex.test(email)){
            this._email = email; 
        }
        else{
            throw "Invalid Email";
        }
    }
    get pinCode(){
        return this._pinCode;
    }
    set pinCode(pinCode){
        let pinCodeRegex = RegExp("^[0-9]{6}$");
        if(pinCodeRegex.test(pinCode))
        {
            this._pinCode = pinCode;
        }
        else{
            throw "Invalid Pincode";
        }
    }
    toString() {
        const option = { year: "numeric", month: "long", day: "numeric" };
        const joiningDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", option);
        return "Id: " + this.id + " Name: " + this.name + " Salary: " + this.salary +
            " Gender: " + this.gender + " Start Date: " + joiningDate +" Email: "+this.email+ " Pin Code: "+this.pinCode;
    }
}
try{
let AddedEmpDetail = new EmployeePayrollData(125, "Madhu", 20.12, "F", new Date(), "nantha.123@gmail.com.us", 600056);
console.log(AddedEmpDetail.toString());
}
catch (e)
{
    console.error(e);
}