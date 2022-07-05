const EMP_FULL_TIME = 1;
const EMP_PART_TIME = 2;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
const FULL_TIME = 8;
const PART_TIME = 4;
let totalWorkingHour = 0;
let totalWage = 0;
let day = 1;
let dailyWage = 0;
let workingHour = 0;

let dailyWageArray = new Array();
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
function DailyWage()
{
    dailyWage = workingHour * WAGE_PER_HOUR;
    dailyWageArray.push(dailyWage);
    TotalWage();
}
function TotalWage()
{
    totalWage = totalWage + dailyWage;
}
while( day < MAX_WORKING_DAYS && totalWorkingHour < MAX_WORKING_HOURS)
{
    let check = Math.floor(Math.random() * 3);
    workingHour = getWorkingHour(check);
    totalWorkingHour +=workingHour;
    DailyWage();
    day++;
}
console.log("Total Working Hours : "+totalWorkingHour + " Total Working Days : "+ day + " Today Salary : "+totalWage);
