function getLuckyNumber(dob) {
    const digits = dob.replace(/-/g, ''); // Remove dashes from the date string

    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += parseInt(digits[i], 10); // Sum all the digits
    }

    // Reduce sum to a single digit
    while (sum > 9) {
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num, 10), 0);
    }

    return sum;
}

const dateOfBirth = "2004-11-24"; 
const luckyNumber = getLuckyNumber(dateOfBirth);

console.log(`The lucky number for the date of birth ${dateOfBirth} is ${luckyNumber}.`);
