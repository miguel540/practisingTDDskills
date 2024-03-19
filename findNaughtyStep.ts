export const findNaughtyStep = (origin:string,modified:string):string[] => {
    if (typeof origin!='string'||typeof modified!='string')
    {
         throw new Error('Function must take two parameters with type "string"');
    }
    
    return [''];
};