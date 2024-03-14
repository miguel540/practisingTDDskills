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


describe('getListOfGiftsCanBeManufactured', () =>
 {
    it('Must be a function <ser una función', () :void=> 
         {
             expect(typeof getListOfGiftsCanBeManufactured).toBe('function'); 
     });

     it('If parameter giftToMade is not a array launch a exception with the message -> "giftToMade must be a array"', () :void=>
         {
            expect(():void=>getListOfGiftsCanBeManufactured()).toThrow('giftToMade must be a array');
            expect(():void=>getListOfGiftsCanBeManufactured(1)).toThrow('giftToMade must be a array');
            expect(():void=>getListOfGiftsCanBeManufactured('cadena')).toThrow('giftToMade must be a array');
            expect(():void=>getListOfGiftsCanBeManufactured(true)).toThrow('giftToMade must be a array');
            expect(():void=>getListOfGiftsCanBeManufactured(NaN)).toThrow('giftToMade must be a array');
            expect(():void=>getListOfGiftsCanBeManufactured(undefined)).toThrow('giftToMade must be a array');
            expect(():void=>getListOfGiftsCanBeManufactured(null)).toThrow('giftToMade must be a array');
    });

    it('All giftToMade"s elements must be a string , if not launch a exception with the message -> "All of giftToMade"s elements must be a string"', () :void=> 
    {
        expect(():void=>getListOfGiftsCanBeManufactured([1,2,3])).toThrow('All of giftToMade"s elements must be a string');
        expect(():void=>getListOfGiftsCanBeManufactured(['1','2',NaN])).toThrow('All of giftToMade"s elements must be a string');
        expect(():void=>getListOfGiftsCanBeManufactured([undefined,'2','3'])).toThrow('All of giftToMade"s elements must be a string');
        expect(():void=>getListOfGiftsCanBeManufactured([true,'2','3'])).toThrow('All of giftToMade"s elements must be a string');
        expect(():void=>getListOfGiftsCanBeManufactured(['1',{a:1,b:2},'3'])).toThrow('All of giftToMade"s elements must be a string');
        expect(():void=>getListOfGiftsCanBeManufactured(['1',[{a:1,b:2}],'3'])).toThrow('All of giftToMade"s elements must be a string');
    });
    
})