/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Bob";
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun);

javascriptIsFun = "YES!";

let year;
console.log(year);
console.log(typeof year);

year = 1991;
*/
/*
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = "programmer";
job = "teacher";
console.log(job);*/
/*
//math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 = dva na kub

const firstName = "Jonas";
const lastName = "Smith";
console.log(firstName + " " + lastName);

//assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);*/

/* resenje challenge #1
let weight1Mark = 78;
let weight1John = 92;
let height1Mark = 1.69;
let height1John = 1.95;
const BMI1Mark = weight1Mark / height1Mark ** 2;
const BMI1John = weight1John / height1John ** 2;
console.log(BMI1Mark, BMI1John);
markHigherBMI1 = BMI1Mark > BMI1John;
console.log(markHigherBMI1);

let weight2Mark = 95;
let weight2John = 85;
let height2Mark = 1.88;
let height2John = 1.76;
const BMI2Mark = weight2Mark / height2Mark ** 2;
const BMI2John = weight2John / height2John ** 2;
console.log(BMI2Mark, BMI2John);
markHigherBMI2 = BMI2Mark > BMI2John;
console.log(markHigherBMI2);*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + ".";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(jonasNew);

console.log(`Ovo je obican string uz upotrebu backticksa...`);

console.log(`String
napisan
u vise linija...`);*/
/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah can start driving license for ${yearsLeft} years.`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);*/
/*
let weight1Mark = 78;
let weight1John = 92;
let height1Mark = 1.69;
let height1John = 1.95;
const BMI1Mark = weight1Mark / height1Mark ** 2;
const BMI1John = weight1John / height1John ** 2;
console.log(`Mark's BMI: ${BMI1Mark}; John's BMI: ${BMI1John}`);

if (BMI1Mark > BMI1John) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

if (BMI1Mark > BMI1John) {
  console.log(`Mark's BMI (${BMI1Mark}) is higher than John's (${BMI1John})!`);
} else {
  console.log(`John's BMI (${BMI1John}) is higher than Mark's (${BMI1Mark})!`);
}*/
/*
//type conversion
//pretvaranje stringova u brojeve
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));

//pretvaranje brojeva u stringove
console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " yeras old."); //+ operator pretvara brojeve u stringove
console.log("I am " + "23" + " years old.");
console.log("23" - "10" - 3); // ostali operatori pretvaraju stringove u brojeve (-, *, /)

let n = "1" + 1;
n = n - 1;
console.log(n);
*/
/*
//falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Jonas")); //true
console.log(Boolean({})); //true
console.log(Boolean(null)); //false
console.log(Boolean()); //false

const money = 0;
if (money) {
  console.log("Don't spend it all.");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is undefined.");
}*/

/*
const age = "18";
if (age === 18) console.log("You just became an adult! (strict)");

if (age == 18) console.log("You just became an adult! (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 11) {
  console.log("Cool! 11 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number!");
} else {
  console.log("Number is not 11 or 7!");
}

if (favourite !== 23) console.log("Why not 23?");
*/

const hasDriversLicense = true; //A
const hasGoodVision = false; //B

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive.");
}
