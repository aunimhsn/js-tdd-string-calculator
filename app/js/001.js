export class StringCalculator {

    add(str) {
        if (str.length === 0) return 0;
        if (! isNaN(str)) return parseInt(str);

        let numbers = str.split(',')
        return numbers[0] + numbers[1];
    }

}


