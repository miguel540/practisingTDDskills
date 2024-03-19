/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 * "roma" es "amor"  --> TRUE
 * "roma" es "amore" --> FALSE
 */

import { test, expect } from 'vitest';
import { isAanagram } from '../isAanagram';


test('The function must take two parameters with a string value', () => {
    expect(() => isAanagram(1, 'hola'))
    .toThrow('The function must take two parameters with a string value.');
    expect(() => isAanagram('hola', true))
    .toThrow('The function must take two parameters with a string value.');
    expect(() => isAanagram('hola', null))
    .toThrow('The function must take two parameters with a string value.');
    expect(() => isAanagram(undefined, 'hola'))
    .toThrow('The function must take two parameters with a string value.');
    expect(() => isAanagram(NaN, 'hola'))
    .toThrow('The function must take two parameters with a string value.');

});

test('The function returns false if both parameters are equal.', () => {
    expect(() => isAanagram('hola', 'hola'))
    .toThrow('The parameters must be different.');
});

test('The function returns false if the length of the two parameters is not equal.', () => {
    expect(() => isAanagram('palabra1', 'palabra12'))
    .toThrow('The length of both parameters must be the same.');

    expect(() => isAanagram('roma', 'amores'))
    .toThrow('The length of both parameters must be the same.');
});

test('The function returns false if any character in parameter1 is not in parameter2.', () => {
    expect(isAanagram('palabra1','paxabra1')).toBe(false);
    expect(isAanagram('roma','romx')).toBe(false);
});

test('The function returns true if all the characters in parameter1 is in parameter2.', () => {
    expect(isAanagram('palabra1','1aplarba')).toBe(true);
    expect(isAanagram('roma','amor')).toBe(true);
    expect(isAanagram('roma','aomr')).toBe(true);
    expect(isAanagram('palabra1','1alpabra')).toBe(true);
});
