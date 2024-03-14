"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const getListOfGiftsCanBeManufactured_1 = require("../getListOfGiftsCanBeManufactured");
(0, vitest_1.describe)('getListOfGiftsCanBeManufactured', () => {
    (0, vitest_1.it)('Must be a function <ser una función', () => {
        (0, vitest_1.expect)(typeof getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured).toBe('function');
    });
    (0, vitest_1.it)('If parameter giftToMade is not a array launch a exception with the message -> "giftToMade must be a array"', () => {
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)()).toThrow('giftToMade must be a array');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(1)).toThrow('giftToMade must be a array');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)('cadena')).toThrow('giftToMade must be a array');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(true)).toThrow('giftToMade must be a array');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(NaN)).toThrow('giftToMade must be a array');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(undefined)).toThrow('giftToMade must be a array');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(null)).toThrow('giftToMade must be a array');
    });
    (0, vitest_1.it)('All giftToMade"s elements must be a string , if not launch a exception with the message -> "All of giftToMade"s elements must be a string"', () => {
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)([1, 2, 3])).toThrow('All of giftToMade"s elements must be a string');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(['1', '2', NaN])).toThrow('All of giftToMade"s elements must be a string');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)([undefined, '2', '3'])).toThrow('All of giftToMade"s elements must be a string');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)([true, '2', '3'])).toThrow('All of giftToMade"s elements must be a string');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(['1', { a: 1, b: 2 }, '3'])).toThrow('All of giftToMade"s elements must be a string');
        (0, vitest_1.expect)(() => (0, getListOfGiftsCanBeManufactured_1.getListOfGiftsCanBeManufactured)(['1', [{ a: 1, b: 2 }], '3'])).toThrow('All of giftToMade"s elements must be a string');
    });
});
//# sourceMappingURL=getListOfGiftsCanBeManufactured.test.js.map