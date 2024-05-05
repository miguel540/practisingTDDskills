
// Definimos una interfaz que describe la estructura de nuestro objeto global
interface Global {
    SUMAYACAB: number;
}

// Declaramos global como un objeto de tipo Global
declare const global: Global;

export const changePositionY = (pModCab: string): string => {
    if (typeof pModCab !== 'string')
         { throw new Error('La función debe recibir un parámetro de tipo cadena'); }


    if (typeof global.SUMAYACAB !== 'number' || isNaN(global.SUMAYACAB)) {
        throw new Error
            ('La variable global SUMAYACAB no está definida o no tiene un valor numérico válido');
    }

    //1º->  Buscamos el caracter 'Y' en el parámetro pModCab
    const posY:number = pModCab.indexOf('y');
    

    if (posY!=-1)
        {
            const cadenaYdepModCab =pModCab.slice(posY+1).split('') ;
            let numerosDespuesDeY='';
            for (const element of cadenaYdepModCab) {
                if (!isNaN(parseInt(element))) {
                    numerosDespuesDeY += element;
                } else {
                    break; // Salir del bucle porque ya tenemos los números que queríamos
                }
            };

            
            console.log('numerosDespuesDeY',numerosDespuesDeY);
            // const numerosDespuesDeY = cadenaYdepModCab
            // .forEach(element => {
            //     if (!isNaN(parseInt(element))) {
            //         return element;
            //     } else {
            //         return ; // Salir del forEach porque ya tenemos los números que queríamos
            //     }
            // });
            

            // //1º->  Extraer de la cadena y con los números siguientes
            // const   cadenaYdepModCab =pModCab.slice(posY).split('') ;
            // const   coordenadaYdepModCab = 
            //         cadenaYdepModCab.filter(element => !isNaN(parseInt(element)));
                   
                    return pModCab+
                        'y'+(parseInt(numerosDespuesDeY)+global.SUMAYACAB).toString();
        }

    return pModCab+'y'+(global.SUMAYACAB.toString());
};