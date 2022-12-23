/*
* Author: Văn Trọng
* Date: 23/12/2022
* */
const $numb = function () {
    return {
        format: function (number, options = {}) {
            let prefix = ('prefix' in options) ? options.prefix : '';
            let suffix = ('suffix' in options) ? options.suffix : '';
            let thous = ('thous' in options) ? options.thous : '.';
            let dec = ('dec' in options) ? options.dec : 3;
            let number_only = ('' + number).replace(/\D/g, '');
            let pattern = '(\\d)(?=(';
            for (let i = 0; i < dec; i++) {
                pattern += '\\d';
            }
            pattern += ')+(?!\\d))';
            let regex = new RegExp(pattern, 'g')
            return prefix + number_only.replace(regex, "$1" + thous) + suffix;
        },
        clear: function (number) {
            return ('' + number).replace(/\D/g, '') * 1;
        },
    }
}();