"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const getListOfGiftsCanBeManufactured_1 = require("../getListOfGiftsCanBeManufactured");
(0, vitest_1.describe)('getListOfGiftsCanBeManufactured', () => {
    (0, vitest_1.it)('the function receives a first parameter which is an array where all its elements are strings.', () => {
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)()).toThrow('The first parameter of the function is not an array or one of its elements is not a string.');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(1)).toThrow('The first parameter of the function is not an array or one of its elements is not a string.');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(null)).toThrow('The first parameter of the function is not an array or one of its elements is not a string.');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(undefined)).toThrow('The first parameter of the function is not an array or one of its elements is not a string.');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(true)).toThrow('The first parameter of the function is not an array or one of its elements is not a string.');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)('abcd')).toThrow('The first parameter of the function is not an array or one of its elements is not a string.');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)([1, '2'])).toThrow('The first parameter of the function is not an array or one of its elements is not a string.');
    });
    (0, vitest_1.it)('the function receives a second parameter which is a string.', () => {
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(['tren', 'coche'], 2)).toThrow('The second parameter of the function is not a string.');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(['tren', 'coche'], null)).toThrow('The second parameter of the function is not a string.');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(['tren', 'coche'], undefined)).toThrow('The second parameter of the function is not a string.');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(['tren', 'coche'], true)).toThrow('The second parameter of the function is not a string.');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(['tren', 'coche'], ['abcde'])).toThrow('The second parameter of the function is not a string.');
    });
    (0, vitest_1.it)('The function returns  canMakeIt:false when there are not materials to make the toy', () => {
        (0, vitest_1.expect)((0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(['tren', 'coche'], 'ahncdeo')).toEqual([{ toy: 'tren', canMakeIt: false }, { toy: 'coche', canMakeIt: true }]);
        (0, vitest_1.expect)((0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(['tren', 'oso', 'pelota'], 'tronesa')).toEqual([{ toy: 'tren', canMakeIt: true }, { toy: 'oso', canMakeIt: true }, { toy: 'pelota', canMakeIt: false }]);
    });
});
//# sourceMappingURL=getListOfGiftsCanBeManufactured.test.js.map