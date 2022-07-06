const EMP_FULL_TIME = 1;
const EMP_PART_TIME = 2;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
const FULL_TIME = 8;
const PART_TIME = 4;
let dailyWage = 0;
let totalWage = 0;

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
function DailyWage(workingHour)
{
    dailyWage = workingHour * WAGE_PER_HOUR;
    return dailyWage;
}
function TotalWage()
{
    totalWage = totalWage + dailyWage;
    return totalWage;
}
// UC-10-Using Objects To Store Values
let mapForDayAndHourAndWage  = new Array();
{
    let totalWorkingHour = 0;
    let day = 1;
    let workingHour = 0;
    let empwage = 0;

    while (day <= MAX_WORKING_DAYS && totalWorkingHour <= MAX_WORKING_HOURS) {
        let check = Math.floor(Math.random() * 3);
        workingHour = getWorkingHour(check);
        totalWorkingHour += workingHour;
        empwage = DailyWage(workingHour);
        mapForDayAndHourAndWage.push({
            Day: day,
            DailyWorkingHour: workingHour,
            Wage: empwage,
            toString() {
                return "\nDay: " + this.Day + "\t\tDaily Hours: " + this.DailyWorkingHour + "\t\tDailyWage: " 
                + this.Wage;
            }
        });
        day++;
    }
    console.log("Values"+mapForDayAndHourAndWage);
}

// UC-11-Using Object to Perform operations
// UC-11A-Total Wage And Total Working Hour
{
    totalWage = mapForDayAndHourAndWage.filter(wageobject => wageobject.Wage > 0).
        reduce((TotalWages, wageobject) => TotalWages += wageobject.Wage, 0);
    console.log("Total Employee Wage: " + totalWage);

    let totalWorkingHour = mapForDayAndHourAndWage.filter(hourObject => hourObject.DailyWorkingHour > 0).
        reduce((totalHour, hourObject) => totalHour += hourObject.DailyWorkingHour, 0)
    console.log("Employee Total Working Hour: " + totalWorkingHour);
}

// UC-11B-Show Full Time Working Days
{
    console.log("UC-11B-Full Time Working Days Are:")
    let fullTime = mapForDayAndHourAndWage.filter(mapObject => mapObject.DailyWorkingHour == 8).
        forEach(mapObject => console.log(mapObject.toString()));
} 