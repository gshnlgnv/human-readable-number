module.exports = function toReadable (number) {
    const oneLengthStr = (str) => {
        switch (str) {
            case ("1"):
                return "one";
            case ("2"):
                return "two";
            case ("3"):
                return "three";
            case ("4"):
                return "four";
            case ("5"):
                return "five";
            case ("6"):
                return "six";
            case ("7"):
                return "seven";
            case ("8"):
                return "eight";
            case ("9"):
                return "nine";
        }
    };

    const decimalNumberFunc = (str) => {
        switch (str) {
            case ("1"):
                return "ten";
            case ("2"):
                return "twenty";
            case ("3"):
                return "thirty";
            case ("4"):
                return "forty";
            case ("5"):
                return "fifty";
            case ("6"):
                return "sixty";
            case ("7"):
                return "seventy";
            case ("8"):
                return "eighty";
            case ("9"):
                return "ninety";
        }
    };

    const from10to19str = (str) => {
        switch (str) {
            case("11"):
                return "eleven";
            case("12"):
                return "twelve";
            case("13"):
                return "thirteen";
            case("14"):
                return "fourteen";
            case("15"):
                return "fifteen";
            case("16"):
                return "sixteen";
            case("17"):
                return "seventeen";
            case("18"):
                return "eighteen";
            case("19"):
                return "nineteen";
        }
    };

    if (number < 10 && number !== 0) {
        let str = number.toString();
        return oneLengthStr(str);

    } else if (number >= 10 && number <= 90 && number % 10 === 0 && number !== 0) {
        let str = number.toString().split("", 1).join("");
        return decimalNumberFunc(str);

    } else if (number < 20 && number > 10 && number !== 0) {
        let str = number.toString();
        return from10to19str(str);

    } else if (number === 0) {
        return "zero";

    } else if (number < 100 && number !== 0) {
        let str = number.toString();
        let a = str.slice(0, 1);
        let b = str.slice(1, 2);
        return `${decimalNumberFunc(a)} ${oneLengthStr(b)}`

    } else if (number > 100 && number !== 0 && number % 100 !== 0) {
        let str = number.toString();
        let a = str.slice(0, 1);
        let b = Number(str.slice(1, 3));
        return `${oneLengthStr(a)} hundred ${toReadable(b)}`

    } else if (number % 100 === 0 && number !== 0) {
        let str = number.toString().slice(0, 1);
        return `${oneLengthStr(str)} hundred`;
    }
};
