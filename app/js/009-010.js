export class StringCalculator {

    add(str) {
        if (str.length === 0) return 0;
        if (str.length === 1) return parseInt(str);

        let delimiters = this.getDelimiters(str);
        str = this.deleteDelimiter(str);

        delimiters.forEach(delimiter => {
            str = str.replaceAll(delimiter, ',');
        });
        
        let numbers = str
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

    getDelimiters(str) {
        if (this.hasDelimiter(str)) {
            if (str.includes('[')) 
                return str.split(/\[(.*?)\]/) // Get delimiters between brackets
                        .filter((elem, key) => (key % 2 !== 0));
            else 
                return [str.charAt(2)];
        }

        return [','];
    }

    deleteDelimiter(str) {
        if (this.hasDelimiter(str))
            return str.split(/\n(.*)/s)[1]

        return str;
    }

}