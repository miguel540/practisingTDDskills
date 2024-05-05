
// Definimos una interfaz que describe la estructura de nuestro objeto global
interface Global {
    SUMAYACAB: number;
}

// Declaramos global como un objeto de tipo Global
declare const global: Global;

const validarParametros = (pModCab: string): void => {
    if (typeof pModCab !== 'string') {
        throw new Error('El parámetro debe ser una cadena de texto');
    }
};

const validadVariableGlobal = (): void => {
    if (typeof global.SUMAYACAB !== 'number' || isNaN(global.SUMAYACAB)) {
        throw new Error
            ('La variable global SUMAYACAB no está definida o no tiene un valor numérico válido');
    }
};

const extraerNumerosDespuesY = (pModCab: string): string => {
    const expresionRegular = /y(\.\d+(?:\.\d+)?|\d+(?:\.\d+)?)/i;
    /*
    La expresión permite retornar de los casos: 'lnlsy55x25' ,'lnlsy.25x10' ,'lnlsy60.68x10' ,'lnlsx15'
    Los siguientes números: 55, .25 , 60.68 , ''
        /y  : Esto indica que la expresión regular busca la letra 'y' en la cadena.

        (   : Esto marca el inicio de un grupo de captura.

        \.  : Aquí especificamos que queremos que haya un punto decimal ('.') en la cadena.
              El backslash ('\') es necesario para escapar el punto, ya que en expresiones regulares
             el punto tiene un significado especial y necesitamos buscar el carácter literal '.'

        \d+ : Después del punto, queremos uno o más dígitos.
             \d coincide con cualquier dígito, y el signo más '+' indica que queremos uno o más dígitos consecutivos.

        (?:\.\d+)?: Esto es un grupo de no captura, indicado por (?:...),
                    Seguido de un punto y uno o más dígitos como en el paso 4. 
                    
                    El signo de interrogación '?' al final del grupo indica que este grupo es opcional,
                    es decir, el punto y los dígitos pueden aparecer cero o una vez en la cadena.

        |:  Esto indica una alternancia, es decir,
            que la expresión regular puede coincidir con cualquiera de las dos opciones
            que se encuentran a ambos lados del símbolo '|'.

        \d+(?:\.\d+)?:  Esta parte es similar a la explicada en el paso 4,
                        pero sin el punto inicial. 
                        Esto permite que la expresión coincida con un número que no tiene un punto decimal al principio.

        ): Esto marca el final del grupo de captura.

        /i: Al final de la expresión regular, la 'i' indica que la búsqueda no distingue entre mayúsculas y minúsculas.

     */
    const match = pModCab.match(expresionRegular);

    if (match && match[1]) {
        return match[1]; // El número extraído está en el índice 1 del array de coincidencias
    } else {
        return '0'; // Manejo de caso donde no se encuentra ningún número después de la 'Y'
    }
};


export const changePositionY = (pModCab: string): string => {
    validarParametros(pModCab);
    validadVariableGlobal();

    const numerosDespuesDeY = extraerNumerosDespuesY(pModCab);
    const nuevaCoordenadaY = 'y' + (parseFloat(numerosDespuesDeY) + global.SUMAYACAB).toString(); //numerosDespuesDeY puede tener decimales

    return pModCab + nuevaCoordenadaY; //Por sencillez me limito a concatenar al final la nueva coordenada dejando la vieja
};