const EMP_FULL_TIME = 1;
const EMP_PART_TIME = 2;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
const FULL_TIME = 8;
const PART_TIME = 4;
let totalWorkingHour = 0;
let day = 1;

function getWorkingHour(check)
{
    switch(check)
    {
    case 1:
        return FULL_TIME;
    case 2:
        return PART_TIME;
    default:
        return workingHour = 0;
    }
}
while( day < MAX_WORKING_DAYS && totalWorkingHour < MAX_WORKING_HOURS)
{
    let check = Math.floor(Math.random() * 3);
    totalWorkingHour += getWorkingHour(check);
    day++;
}
let totalSalary = totalWorkingHour * WAGE_PER_HOUR;
console.log("Total Working Hours : "+totalWorkingHour + " Total Working Days : "+ day + " Today Salary : "+totalSalary);