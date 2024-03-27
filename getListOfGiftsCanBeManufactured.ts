const isAllElementsAString=(array:string[]):boolean=>{
       return array.every((elementOfArray) => typeof elementOfArray ==='string');
};

interface IToy{
       toy:string;
       canMakeIt:boolean;
}

const proccesingToy = (str:string, c:string) => str.replace(new RegExp(`[${c}]`, 'gi'), '');

const canMakeIt = (toyToProcessing:string,materials:string):boolean =>{
       for (const material of materials)
       {
              toyToProcessing= proccesingToy(toyToProcessing,material);
       }
       return toyToProcessing.length===0?true:false;
};

const validateParameters= (giftToMade:string[],materials:string) =>
{
       if (!Array.isArray(giftToMade)||!isAllElementsAString(giftToMade)) 
       { throw new Error('The first parameter of the function is not an array or one of its elements is not a string.');}
       
       if (typeof materials!='string')
              { throw new Error('The second parameter of the function is not a string.');}

};

const createToy = (toyTomake:string,materials:string)=>
{
       return  {
                     toy:toyTomake,
                     canMakeIt:canMakeIt(toyTomake,materials)
              };
};

export const getListOfGiftsCanBeManufactured = (giftToMade:string[],materials:string):IToy[] => {
       
       validateParameters(giftToMade,materials);       
    
       // const finalList:IToy[]=[];

       // giftToMade.forEach(toyToProcedure=>{
       //        finalList.push(
       //               createToy(toyToProcedure,materials)
       //               );
       // });
       
       // return finalList;

       return giftToMade.map(toyToProcedure => createToy(toyToProcedure, materials));
};
