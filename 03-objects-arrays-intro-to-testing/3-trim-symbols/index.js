/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if(size === 0) return '';
    if(size === undefined) return string;

    let firstSlice = string.slice(0, size);
    let restSlice = [...string.slice(size)];

    return restSlice.reduce((newString, char) => {
        if(!newString.endsWith(char.repeat(size))) {
        newString +=char;
        };
        return newString;
    }, firstSlice);
    };
