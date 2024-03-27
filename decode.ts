export const decode = (text:string):string => {
    if (typeof text!='string')
        { throw new Error('The function must take one parameter with a string value.');}
  
    const reviertePalabra= (palabra:string):string =>{
        return palabra.split('').reverse().join('');
    };
    
    const textInArray= text.split('');
    const posicionParentesis = new Map<number,number>();
    
    const  posicionAperturaParentesis:number[]=[];

    textInArray.forEach((character,index)=>{
        switch (character)
        {
            case '(':
                {
                    posicionParentesis.set(index,0);
                    posicionAperturaParentesis.push(index);
                    break;
                }
            case ')':
                {
                    posicionParentesis.set(posicionAperturaParentesis.pop()||0,index);
                    break;
                }
        }
    });

    for (const [posicionInicial, posicionFinal] of [...posicionParentesis.entries()].reverse()) {
            const caracteres:string[]=
                textInArray.slice(posicionInicial,posicionFinal+1)
                .reverse()
                .filter(
                    c => {!(c !== '(' && c !== ')');});
                textInArray.splice(posicionInicial, posicionFinal, caracteres.join(''));
    }

    return textInArray.join('');    
};