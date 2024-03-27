const validateParametrs= (palabra1:string,palabra2:string)=>{

    if(typeof palabra1!='string'||typeof palabra2!='string')
            { throw new Error('The function must take two parameters with a string value.');}

    if (palabra1===palabra2)
    { throw new Error('The parameters must be different.');}

    
    if (palabra1.length!=palabra2.length)
    { throw new Error('The length of both parameters must be the same.');}
};

    export const isAanagram = (palabra1:string,palabra2:string):boolean => {
        validateParametrs(palabra1,palabra2);

    // for (const letra of palabra1)
    // {
    //     if (palabra2.indexOf(letra)===-1)
    //     {
    //         return false;
    //     }
    // }
    //    return true;

    const word1 = palabra1.split('').sort().join('');
    const word2= palabra2.split('').sort().join('');
    return word1===word2;
};