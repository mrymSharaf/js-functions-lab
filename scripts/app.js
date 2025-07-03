//2
function isAdult(age) {
    if (age < 18) {
        return 'Minor'
    }
    else if (age >= 18) {
        return 'Adult'
    }
    else {
        return 'Invalid age'
    }
}

console.log('Exercise 2 Result:', isAdult(21));

//3
function isCharAVowel(char) {
    char = char.toLowerCase();
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        return 'true'
    }
    else {
        return 'false'
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
        return 'Good morning ' + name
    }
    else if (time == - 'afternoon') {
        return 'Good afternoon ' + name
    }
    else if (time === 'evening') {
        return 'Good evening ' + name
    }
    else {
        console.log('invalid input')
    }
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

//6
function maxOfThree(num1, num2, num3) {

    if (num1 >= num2 && num1 >= num3) {
        return num1
    }
    else if (num2 >= num1 && num2 >= num3) {
        return num2
    }
    else if (num3 >= num1 && num3 >= num2) {
        return num3
    }
    else {
        return 'Invalid input'
    }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

//7
function calculateTip(bill, tipPercentage) {
    const tipAmount = bill * (tipPercentage / 100)
    return tipAmount
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

//8
function convertTemperature(temp, scale) {
    if (scale === 'C' || scale === 'c') {
        const fahrenheit = (temp * 9 / 5) + 32;
        return fahrenheit
    }
    else if (scale === 'F' || scale === 'f') {
        const celsius = (temp - 32) * 5 / 9;
        return celsius
    }
    else {
        return 'Invalid scale'
    }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

//10
function calculateGrade(grade) {
    if (grade >= 90) {
        return 'A'
    }
    else if (grade > 80 && grade <= 89) {
        return 'B'
    }
    else if (grade > 79 && grade <= 70) {
        return 'C'
    }
    else if (grade > 69 && grade <= 60) {
        return 'D'
    }
    else {
        return 'F'
    }

}
console.log('Exercise 10 Result:', calculateGrade(85));

//11
function createUsername(firstName, lastName) {
    const fname = firstName.charAt(0) + firstName.charAt(1) + firstName.charAt(2)
    const lname = lastName.charAt(0) + lastName.charAt(1) + lastName.charAt(2)
    const total = firstName.length + lastName.length
    return userName = fname + lname + total

}
console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));


//12
function numArgs() {
return arguments.length;
}
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));