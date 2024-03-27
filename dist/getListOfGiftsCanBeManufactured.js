"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListOfGiftsCanBeManufactured = void 0;
const isAllElementsAString = (array) => {
    return array.every((elementOfArray) => typeof elementOfArray === 'string');
};
const proccesingToy = (str, c) => str.replace(new RegExp(`[${c}]`, 'gi'), '');
const canMakeIt = (toyToProcessing, materials) => {
    for (const material of materials) {
        toyToProcessing = proccesingToy(toyToProcessing, material);
    }
    return toyToProcessing.length === 0 ? true : false;
};
const validateParameters = (giftToMade, materials) => {
    if (!Array.isArray(giftToMade) || !isAllElementsAString(giftToMade)) {
        throw new Error('The first parameter of the function is not an array or one of its elements is not a string.');
    }
    if (typeof materials != 'string') {
        throw new Error('The second parameter of the function is not a string.');
    }
};
const createToy = (toyTomake, materials) => {
    return {
        toy: toyTomake,
        canMakeIt: canMakeIt(toyTomake, materials)
    };
};
const getListOfGiftsCanBeManufactured = (giftToMade, materials) => {
    validateParameters(giftToMade, materials);
    return giftToMade.map(toyToProcedure => createToy(toyToProcedure, materials));
};
exports.getListOfGiftsCanBeManufactured = getListOfGiftsCanBeManufactured;
//# sourceMappingURL=getListOfGiftsCanBeManufactured.js.map