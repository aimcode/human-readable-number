module.exports = function toReadable(number) {
    let firstTwenty = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let t = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 20) {
        return firstTwenty[number];
    }

    let hundreds = number - (number % 100);
    let tens = number % 100;
    let buf = tens;
    let one = "";

    if (hundreds.toString()[0] > 0) {
        hundreds = `${firstTwenty[hundreds.toString()[0]]} hundred`;
    } else {
        hundreds = "";
    }

    if (tens === 0) {
        tens = "";
    } else if (tens < 20 && tens !== 0) {
        tens = firstTwenty[tens];
    } else {
        tens = t[tens.toString()[0] - 2];

        if (buf.toString()[1] > 0) {
            one = firstTwenty[buf.toString()[1]];
        }
    }

    return `${hundreds} ${tens} ${one}`.trim();
};
