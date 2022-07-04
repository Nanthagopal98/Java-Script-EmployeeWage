const EMP_FULL_TIME = 1;
const EMP_PART_TIME = 2;
const WAGE_PER_HOUR = 20;
const TOTAL_WORKING_DAYS = 20;
const FULL_TIME = 8;
const PART_TIME = 4;
let totalWorkingHour = 0;

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
for (let day = 1; day < TOTAL_WORKING_DAYS; day++)
{
    let check = Math.floor(Math.random() * 3);
    totalWorkingHour += getWorkingHour(check);
}
let totalSalary = totalWorkingHour * WAGE_PER_HOUR;
console.log("Today Salary : "+totalSalary);