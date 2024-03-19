
const LIMITE:number=50;


export const getFibonacci = ():number[] => {
    const serialFibonacci:number[]=[];

    // const sumaDosAnteriores= (newIndex:number):number =>{
    //     if (serialFibonacci.length===0){return 0;}
    //     if (serialFibonacci.length===1){return 1;}
    
    //     return serialFibonacci[newIndex-2]+serialFibonacci[newIndex-3];
    // };
    
    const getSumOfPreviousTwo = (index: number): number => {
        if (index < 2) return index;
        return serialFibonacci[index - 1] + serialFibonacci[index - 2];
        //si index=2 serial[2-1] + serial[2-2] --> serial[1]+ serial[0]
    };

    for (let i = 0; i < LIMITE-1; i++) {
        serialFibonacci.push(getSumOfPreviousTwo(i));
    }

    // let newSerialNumber=0;
    // while (newSerialNumber<LIMITE-1)
    // {
    //     newSerialNumber++;
    //     const sumaDeDosAnteriores:number=sumaDosAnteriores(newSerialNumber,serialFibonacci);
    //     serialFibonacci.push(sumaDeDosAnteriores);
    // }

    return serialFibonacci;
};

