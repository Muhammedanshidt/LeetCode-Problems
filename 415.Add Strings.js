var addStrings = function (num1, num2) {

    const number1 = BigInt(num1)

    const number2 = BigInt(num2)

    const sum = number1 + number2

    return sum.toString()

};

console.log(addStrings("31032005", "27052005"))