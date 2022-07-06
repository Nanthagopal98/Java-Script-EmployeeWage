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
let dailyWageMap = new Map();
let dailyHourMap = new Map();
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
    return dailyWage;
}
function TotalWage()
{
    totalWage = totalWage + dailyWage;
    return totalWage;
}

while( day <= MAX_WORKING_DAYS && totalWorkingHour <= MAX_WORKING_HOURS)
{
    let check = Math.floor(Math.random() * 3);
    workingHour = getWorkingHour(check);
    totalWorkingHour +=workingHour;   
    dailyHourMap.set(day, workingHour);
    dailyWageMap.set(day, DailyWage());
    day++;
}

console.log("Total Working Hours : "+totalWorkingHour + " Total Working Days : "+ day + " Today Salary : "+totalWage);

// UC-7A-Total Wage From Array Using ForEach
let wage = 0;
dailyWageArray.forEach(element =>
    {
        wage += element;
    })
    console.log("UC-7A-Total Wage Using ForEach : "+wage);

// Using Reduce Method
function reduceMethod(totalWage,dailyWage)
{
    return totalWage + dailyWage;
}
console.log("Total Wage Using Reduce Function : "+ dailyWageArray.reduce(reduceMethod,0));

// UC-7B- day Along With Wage Using Map Function
day = 0;
function mapDayWithWage(dailyWage)
{
    day++;
    return day + " = " + dailyWage;   
}
let mapDailyWage = dailyWageArray.map(mapDayWithWage);
console.log("UC-7B-Day Mapped with Wage");
console.log(mapDailyWage);

// UC-7C-Filter FullTime Working Days
function FindFullTime(dailyWage)
{
    return dailyWage.includes("160");
}
let fullTimeArray = mapDailyWage.filter(FindFullTime);
console.log("UC-7C-Full Time Working Days Are");
console.log(fullTimeArray);

// UC-7D-Find First FullTime Occurance 
function FindFirstOccurance(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC-7D-Find First FullTime Occured on Day : "+ mapDailyWage.find(FindFirstOccurance));

//  UC-7E-Confirm Full Time Array Hold Correct Values
function ConfirmFullTime(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC-7E-Confirm Full Time Are Correct : " + fullTimeArray.every(ConfirmFullTime));

// UC-7F-Check for Partime Wages
function CheckParttime(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC-7F-Check for Partime Wages Are There? : "+ mapDailyWage.some(CheckParttime));

// UC-7G-Find Employee Working Days
let numberOfDays = 0;
function FindWorkingDays(numberOfDays, dailyWage)
{
   if(dailyWage > 0)
   {
    numberOfDays++;
   }
   return numberOfDays;
}
console.log("UC-7G-Number of Working Days are : " + dailyWageArray.reduce(FindWorkingDays,0));

// UC-8- Find Total Wage Using Map
let total = 0;
day = 0;
function MapTotalWageWithDailyWage(dailyWage)
{
    day++;
    total += dailyWage;
    return "Day "+day+" Wage: "+dailyWage+ " Total Wage: "+ total;   
}
let mapDailyWageWithTotal = dailyWageArray.map(MapTotalWageWithDailyWage);
console.log(mapDailyWageWithTotal);

console.log("Total salary Using Map : "+Array.from(dailyWageMap.values()).reduce(reduceMethod,0));

// UC- 9 - Arrow Function
//UC-9A-Calculate TOtal Wage And Total Hour Worked
const FindTotal = (total,value) =>
{
    return total+value;
}
let hours = Array.from(dailyHourMap.values()).filter(hours => hours >0).reduce(FindTotal,0);
console.log("Total Working Hours: "+hours);
let FilterdeWorkingWage = dailyWageArray.filter(dailyWage => dailyWage > 0).reduce(FindTotal,0);
console.log("Employe Wage After Filter And Reduce: "+FilterdeWorkingWage);

// UC-9B-Find Full Time, Part Time And Absent Days
let fullTime = new Array();
let partTime = new Array();
let absent = new Array();

dailyHourMap.forEach((value,key) => {if(value == 8) {fullTime.push(key)} 
                    else if(value == 4){partTime.push(key)} else {absent.push(key)}
});
console.log("Full Time Working Days Are: "+fullTime);
console.log("Part Time Working Days Are: "+partTime);
console.log("Absent Days Are: "+absent);
