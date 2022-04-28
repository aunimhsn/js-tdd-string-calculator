export class StringCalculator {

    add(str) {
        if (str.length === 0) return 0;
        if (! isNaN(str)) return parseInt(str);

        return str.split(',').reduce((sum, current) => sum + current);
    }

}


