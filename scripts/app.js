//2
function isAdult(age) {
    if (age < 18) {
        console.log('Minor')
    }
    else if (age >= 18) {
        console.log('Adult')
    }
    else {
        console.log('Invalid age')
    }
}

console.log('Exercise 2 Result:', isAdult(21));

//3
function isCharAVowel(char) {
    char = char.toLowerCase();
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        console.log('true');
    }
    else {
        console.log('false');
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));

//4
function generateEmail(name, domain) {
    name = name.toLowerCase()
    domain = domain.toLowerCase()
    const email = name + '@' + domain
    return email;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


//5
function greetUser(name, time) {
    // name = charAt(0).toUpperCase()
    // time = charAt(0).toUpperCase()
    if (time === 'morning') {
        console.log('Good morning ' + name);
    }
    else if (time == - 'afternoon') {
        console.log('Good afternoon ' + name);
    }
    else if (time === 'evening') {
        console.log('Good evening ' + name);
    }
    else {
        console.log('invalid input')
    }
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

//6
function maxOfThree(num1, num2, num3) {

    if (num1 >= num2 && num1 >= num3) {
        console.log(num1);
    }
    else if (num2 >= num1 && num2 >= num3) {
        console.log(num2);
    }
    else if (num3 >= num1 && num3 >= num2) {
        console.log(num3);
    }
    else {
        console.log('Invalid input');
    }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

//7
function calculateTip(bill, tipPercentage){
    const tipAmount = bill * (tipPercentage / 100)
    return tipAmount
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

//8
function convertTemperature(temp, scale){
    if (scale === 'C' || scale === 'c') {
        const fahrenheit = (temp * 9/5) + 32;
        return fahrenheit;
    }
    else if (scale === 'F' || scale === 'f'){
        const celsius = (temp - 32) * 5/9;
        return celsius;
    }
    else{
        console.log('Invalid scale');
        return null;
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));
