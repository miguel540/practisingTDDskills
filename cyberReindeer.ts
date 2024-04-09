
const UNIT_TIME_TO_OPEN: number = 5;

export const cyberReindeer = (road: string, unitTime: number): string[] => {

    const elementsAllowedInRoad = new Set(['S', '.', '*', '|']);
    const routeFollowed: string[] = [];
    let isThereBarrierOff: boolean = true;
    let lastPossicionProcessed:number=0;
    let theAreBarrierOpen:boolean=false;
    
    const getCharacterReplacingS = (character:string):string =>{
        switch (character) 
        {
            case '*':
                {
                    theAreBarrierOpen=true;
                    return '.';
                }
            default:
                {
                    const charToReturn:string=theAreBarrierOpen?'*':'.';
                    theAreBarrierOpen=false;
                    return charToReturn;
                }
        }

    };

    const movementIsAllowed = (nextPosition: number): boolean => {
   
        switch (roadInArray[nextPosition]) {
            case '.':
                {
                    return true;
                }

            case '*':
                {
                    return true;
                }
            case '|':
                {
                    isThereBarrierOff = false;
                    return false;
                }
            default:
                {
                    return false;
                }
        }
    };
    const validarParametros = () => {

        const characterNotAllowedInRoad = () => {
            for (const character of road) {
                if (!elementsAllowedInRoad.has(character)) {
                    throw new Error('Error: The parameter "road"' +
                        ' only must contain a "S" , "." , "|" , "*" characters.');
                }
            }
        };

        if (typeof road != 'string' || road === '') {
            throw new Error('Error: The first parameter of the function' +
                ' must be a string with content.');
        }

        if (typeof unitTime != 'number' || unitTime < 0) {
            throw new Error('Error: The first parameter ' +
                'of the function must be a positive number.');
        }

        characterNotAllowedInRoad();
    };

    validarParametros();

    let roadInArray: string[] = road.split('');

    for (let unitTimeProcessed = 0; unitTimeProcessed < unitTime; unitTimeProcessed++) {
        if (unitTimeProcessed===UNIT_TIME_TO_OPEN)
            {
                roadInArray = roadInArray.map(element => {
                    return element.replace(/\|/g, '*');
                });
                isThereBarrierOff = true;
            }

        if (isThereBarrierOff) {
            if (lastPossicionProcessed + 1 <= unitTime
                && movementIsAllowed(lastPossicionProcessed + 1)) {
                const characterReplacingS : string =
                getCharacterReplacingS(roadInArray[lastPossicionProcessed + 1]);

                roadInArray[lastPossicionProcessed + 1] = 'S';
                roadInArray[lastPossicionProcessed] = characterReplacingS;
                lastPossicionProcessed++;
            }
            else
            {
                lastPossicionProcessed=unitTimeProcessed;
            }
        }
        routeFollowed.push(roadInArray.join(''));
    }

    return routeFollowed;
};