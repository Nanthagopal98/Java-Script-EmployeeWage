const EMP_FULL_TIME = 1;
const EMP_PART_TIME = 2;
const WAGE_PER_HOUR = 20;
const FULL_TIME = 8;
const PART_TIME = 4;
let workingHour;
let check = Math.floor(Math.random() * 3);
switch(check)
{
    case 1:
        workingHour = FULL_TIME;
        console.log("Employee Working Full Time");
        break;
    case 2:
        workingHour = PART_TIME;
        console.log("Employee Working Part Time");
        break;
    default:
        workingHour = 0;
        console.log("Employee Absent");
        break;
}
employeeSalary = workingHour * WAGE_PER_HOUR;
console.log("Today Salary : "+employeeSalary);


