export class StringCalculator {

    add(str) {
        if (str.length === 0) return 0;
        if (! isNaN(str)) return parseInt(str);

        let delimiters = this.getDelimiters(str);
        str = this.deleteDelimiter(str);

        delimiters.forEach(delimiter => {
            str = str.replaceAll(delimiter, ',');
        });
        
        let numbers = str
                .replaceAll('\n', ',')
                .split(',')
                .map(Number)
                .filter(elem => elem <= 1000);

        let negatives = numbers.filter(elem => elem < 0);
        if (negatives.length > 0) throw Error(`Negatives not allowed. [${negatives.join(',')}]`);

        return numbers.reduce((sum, current) => sum + current);
    }

    hasDelimiter(str) {
        return (str.includes('//'));
    }

    getDelimiters(str) {
        if (this.hasDelimiter(str)) {
            if (str.includes('[')) 
                return str.split(/\[(.*?)\]/) // Get delimiters between square brackets
                        .filter((elem, key) => (key % 2 !== 0));
            else 
                return [str.charAt(2)];
        }

        return [','];
    }

    deleteDelimiter(str) {
        if (this.hasDelimiter(str))
            return str.split('\n', 2)[1]

        return str;
    }

}