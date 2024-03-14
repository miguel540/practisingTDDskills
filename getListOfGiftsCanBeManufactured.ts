export const getListOfGiftsCanBeManufactured = (giftToMade:string[]):void => {
       if (!Array.isArray(giftToMade)) { throw new Error('giftToMade must be a array');}
       if (!giftToMade.every((elementOfArray) => typeof elementOfArray ==='string')){ throw new Error('All of giftToMade"s elements must be a string');}
}
