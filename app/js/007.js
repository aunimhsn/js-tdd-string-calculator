export class StringCalculator {

    add(str) {
        if (str.length === 0) return 0;
        if (str.length === 1) return parseInt(str);

        let delimiter = this.getDelimiter(str);
        str = this.deleteDelimiter(str);
        
        let numbers = str
                .replaceAll(delimiter, ',')
                .replaceAll('\n', ',')
                .split(',')
                .map(elem => parseInt(elem))
                .filter(elem => elem <= 1000);

        let negatives = numbers.filter(elem => elem <= 0);
        if (negatives.length > 0) throw Error(`Negatives not allowed. [${negatives.join(',')}]`);

        return numbers.reduce((sum, current) => sum + current);

    }

    hasDelimiter(str) {
        return (str.includes('//'));
    }

    getDelimiter(str) {
        return (this.hasDelimiter(str)) ? str.charAt(2) : ',';
    }

    deleteDelimiter(str) {
        if (this.hasDelimiter(str))
            return str.split(/\n(.*)/s)[1]

        return str;
    }


}
