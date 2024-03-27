/*
Tu tarea es:
    Escribir una función que tome una cadena de texto
    Revierta los caracteres dentro de cada par de paréntesis,
    Eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados,
Por lo que debes invertir los caracteres en el orden correcto.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

*/

import { test, expect } from 'vitest';
import {decode} from '../decode';

test('The function must take one parameter with a string value', () => {
    expect(() => decode(1))
    .toThrow('The function must take one parameter with a string value.');
    expect(() => decode(null))
    .toThrow('The function must take one parameter with a string value.');
    expect(() => decode(undefined))
    .toThrow('The function must take one parameter with a string value.');
    expect(() => decode(true))
    .toThrow('The function must take one parameter with a string value.');
});

test('The funcion return the word which is taken from parameter',()=>{;
    let text = 'Esto';
    expect(decode(text)).toEqual('Esto');
    text = 'ana es un familiar';
    expect(decode(text)).toEqual('ana es un familiar');
});

test('La funcion cuando encuentra un "(" , invierte'+
    ' el contenido de lo que encuentre hasta que se tope con un ")" ',()=>{;
    let text = '(otsE)';
    expect(decode(text)).toEqual('Esto');
    // text = 'ana (se) (nu) (railimaf)';
    // expect(decode(text)).toEqual('ana es un familiar');
});

// test('La funcion puede contener parentesis anidados',()=>{;
//     let text = '(otsE)';
//     expect(decode(text)).toEqual('Esto');
//     text = 'sa(u(cla)atn)s';
//     expect(decode(text)).toEqual('santaclaus');
// });
