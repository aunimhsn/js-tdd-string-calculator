export class StringCalculator {

    add(str) {
        if (str.length === 0) return 0;
        if (! isNaN(str)) return parseInt(str);

        let delimiter = this.getDelimiter(str);
        str = this.deleteDelimiter(str);
        
        return str
                .replaceAll(delimiter, ',')
                .replaceAll('\n', ',')
                .split(',')
                .map(elem => parseInt(elem))
                .reduce((sum, current) => sum + current);

    }

    hasDelimiter(str) {
        return (str.includes('//'));
    }

    getDelimiter(str) {
        if (this.hasDelimiter(str)) return str.charAt(2);
    }

    deleteDelimiter(str) {
        if (this.hasDelimiter(str))
            return str.split(/\n(.*)/s)[1]

        return str;
    }

}
