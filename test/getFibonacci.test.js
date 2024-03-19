/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
import { test, expect } from 'vitest';
import { getFibonacci } from '../getFibonacci';

test('the first number is 0', () => {
    const serialFibonacci=getFibonacci();
    expect(serialFibonacci[0]).toBe(0);
});

test('the second number is 1->1', () => {
    const serialFibonacci=getFibonacci();
    expect(serialFibonacci[1]).toBe(1);
});

test('the third number is the sum of 0 and 1->1', () => {
    const serialFibonacci=getFibonacci();
    expect(serialFibonacci[2]).toBe(1);
});

test('the four number is the sum of 1 and 1 ->2', () => {
    const serialFibonacci=getFibonacci();
    expect(serialFibonacci[3]).toBe(2);
});

test('the five number is the sum of 2 and 1 ->3', () => {
    const serialFibonacci=getFibonacci();
    expect(serialFibonacci[4]).toBe(3);
});

test('List of 50 first elements of the serial', () => {
    const expectedFibonacci = [
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,
        6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040,
        1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986,
        102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903,
        2971215073, 4807526976
      ];
    expect(getFibonacci()).toEqual(expectedFibonacci);
});