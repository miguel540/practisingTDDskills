"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListOfGiftsCanBeManufactured = void 0;
const getListOfGiftsCanBeManufactured = (giftToMade) => {
    if (!Array.isArray(giftToMade)) {
        throw new Error('giftToMade must be a array');
    }
    if (!giftToMade.every((elementOfArray) => typeof elementOfArray === 'string')) {
        throw new Error('All of giftToMade"s elements must be a string');
    }
};
exports.getListOfGiftsCanBeManufactured = getListOfGiftsCanBeManufactured;
//# sourceMappingURL=getListOfGiftsCanBeManufactured.js.map