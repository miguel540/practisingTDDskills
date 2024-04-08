export const decode = (text:string):string => {

    const getPosicionesParentesis = 
        (textInArray: string[]) => {
        const  posicionAperturaParentesis:number[]=[];
        const posicionParentesis: Map<number, number> = new Map();

        textInArray.forEach((character, index) => {
            switch (character) {
                case '(':
                    {
                        posicionParentesis.set(index,0);
                        posicionAperturaParentesis.push(index);
                        break;
                    }
                case ')':
                    {
                        const indiceApertura = posicionAperturaParentesis.pop();
                        if (indiceApertura !== undefined) {
                            posicionParentesis.set(indiceApertura, index);
                        }
                        break;
                    }
            }
        });
    
        return posicionParentesis;
    };
    
    if (typeof text!='string')
        { throw new Error('The function must take one parameter with a string value.');}
     
    const textInArray= text.split('');
    const posicionParentesis = getPosicionesParentesis(textInArray);

    for (const [posicionInicial, posicionFinal] of [...posicionParentesis.entries()].reverse()) {
            const caracteres:string[] =
                textInArray.slice(posicionInicial,posicionFinal)
                .reverse();

                textInArray
            .splice(posicionInicial,
                 caracteres.length, ...caracteres);
    }

    
    return textInArray.filter(c => c !== '(' && c !== ')').join('');    
};