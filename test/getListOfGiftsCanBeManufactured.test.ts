/*
En el taller de Santa, 
Los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto
Los materiales son caracteres.

Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles,
Devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'
*/

import { describe, it, expect } from 'vitest';
import { getListOfGiftsCanBeManufactured } from '../getListOfGiftsCanBeManufactured';
//import {IToy} from '../getListOfGiftsCanBeManufactured';


describe('getListOfGiftsCanBeManufactured', () =>
 {

        it('the function receives a first parameter which is an array where all its elements are strings.', () :void=>{
         expect(():void=>getListOfGiftsCanBeManufactured()).toThrow('The first parameter of the function is not an array or one of its elements is not a string.');
         expect(():void=>getListOfGiftsCanBeManufactured(1)).toThrow('The first parameter of the function is not an array or one of its elements is not a string.');
         expect(():void=>getListOfGiftsCanBeManufactured(null)).toThrow('The first parameter of the function is not an array or one of its elements is not a string.');
         expect(():void=>getListOfGiftsCanBeManufactured(undefined)).toThrow('The first parameter of the function is not an array or one of its elements is not a string.');
         expect(():void=>getListOfGiftsCanBeManufactured(true)).toThrow('The first parameter of the function is not an array or one of its elements is not a string.');
         expect(():void=>getListOfGiftsCanBeManufactured('abcd')).toThrow('The first parameter of the function is not an array or one of its elements is not a string.');
         expect(():void=>getListOfGiftsCanBeManufactured([1,'2'])).toThrow('The first parameter of the function is not an array or one of its elements is not a string.');
        });
    
        it('the function receives a second parameter which is a string.', () :void=>{
            expect(():void=>getListOfGiftsCanBeManufactured(['tren','coche'],2)).toThrow('The second parameter of the function is not a string.');
            expect(():void=>getListOfGiftsCanBeManufactured(['tren','coche'],null)).toThrow('The second parameter of the function is not a string.');
            expect(():void=>getListOfGiftsCanBeManufactured(['tren','coche'],undefined)).toThrow('The second parameter of the function is not a string.');
            expect(():void=>getListOfGiftsCanBeManufactured(['tren','coche'],true)).toThrow('The second parameter of the function is not a string.');
            expect(():void=>getListOfGiftsCanBeManufactured(['tren','coche'],['abcde'])).toThrow('The second parameter of the function is not a string.');
           });
       
    
        it('The function returns  canMakeIt:false when there are not materials to make the toy', () :void=>{
            expect(getListOfGiftsCanBeManufactured(['tren','coche'],'ahncdeo')).toEqual([{ toy:'tren',canMakeIt: false }, { toy:'coche',canMakeIt: true }]);
            expect(getListOfGiftsCanBeManufactured(['tren', 'oso', 'pelota'],'tronesa')).toEqual([{ toy:'tren',canMakeIt: true }, { toy:'oso',canMakeIt: true },{ toy:'pelota',canMakeIt: false }]);
            
        });

        

})