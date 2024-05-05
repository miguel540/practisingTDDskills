/*
    changePositionY(modCab)
    La función recibe una cadena de caracteres que contiene el formato establecido para un dato de cabecera

    La funcion debe cambiar la posición Y y agregarle el valor de una variable global llamada 'sumaYaCab'
    Retorna una cadena de string

    const modCab = 'l1lnlsl#FFFFFx15y23';
    
 */

import { test, expect } from 'vitest';
import { changePositionY } from '../changePositionY';

global.SUMAYACAB = 0;

test('Validación de la variable global SUMAYACAB', () => {
    const modCab = 'l1lnlsl#FFFFFx15y23';
    global.SUMAYACAB = null;
    expect(() => changePositionY(modCab))
        .toThrow
        ('La variable global SUMAYACAB no está definida o no tiene un valor numérico válido');

    global.SUMAYACAB = 'Tipo de dato incorrecto';
    expect(() => changePositionY(modCab))
        .toThrow
        ('La variable global SUMAYACAB no está definida o no tiene un valor numérico válido');

    global.SUMAYACAB = undefined;
    expect(() => changePositionY(modCab))
        .toThrow
        ('La variable global SUMAYACAB no está definida o no tiene un valor numérico válido');

    global.SUMAYACAB = NaN;
    expect(() => changePositionY(modCab))
        .toThrow
        ('La variable global SUMAYACAB no está definida o no tiene un valor numérico válido');
});

global.SUMAYACAB = 0; //establezco un valor correcto

test('validación de parámetros', () => {
    expect(() => changePositionY())
        .toThrow('El parámetro debe ser una cadena de texto');
    expect(() => changePositionY(true))
        .toThrow('El parámetro debe ser una cadena de texto');
    expect(() => changePositionY(null))
        .toThrow('El parámetro debe ser una cadena de texto');
    expect(() => changePositionY(undefined))
        .toThrow('El parámetro debe ser una cadena de texto');
    expect(() => changePositionY(NaN))
        .toThrow('El parámetro debe ser una cadena de texto');
    expect(() => changePositionY(1))
        .toThrow('El parámetro debe ser una cadena de texto');
    expect(() => changePositionY(1.1))
        .toThrow('El parámetro debe ser una cadena de texto');
});

test('Validación del tipo de dato string para los valores de retorno de la función', () => {
    ;
    const modCab = 'l1lnlsl#FFFFFx15y23';
    global.SUMAYACAB = 0;
    expect(changePositionY(modCab)).toBeTypeOf('string');

});

test('Si modCab no contiene "Y" retorna modCab+Y+SUMAYACAB ', () => {
    ;
    const modCab = 'l1lnlsl#FFFFFx15';
    global.SUMAYACAB = 1;
    expect(changePositionY(modCab)).toEqual('l1lnlsl#FFFFFx15y1');
});


test('Si modCab ' +
    '(l1lnlsl#FFFFFx15y20) SI contiene "Y" retorna l1lnlsl#FFFFFx15y20y(20+SUMAYACAB)', () => {
        ;
        const modCab = 'l1lnlsl#FFFFFx15y20';
        global.SUMAYACAB = 1;
        expect(changePositionY(modCab)).toEqual('l1lnlsl#FFFFFx15y20y21');
    });

test('Prueba de entrada de datos en medio', () => {
    ;
    const modCab = 'l1lnlsl#FFFFFy20x15';
    global.SUMAYACAB = 1;
    expect(changePositionY(modCab)).toEqual('l1lnlsl#FFFFFy20x15y21');
});

test('Prueba de entrada de datos al inicio', () => {
    ;
    const modCab = 'y20l1lnlsl#FFFFFx15';
    global.SUMAYACAB = 1;
    expect(changePositionY(modCab)).toEqual('y20l1lnlsl#FFFFFx15y21');
});

test('Prueba de entrada de datos al final', () => {
    ;
    const modCab = 'l1lnlsl#FFFFFx15y20';
    global.SUMAYACAB = 1;
    expect(changePositionY(modCab)).toEqual('l1lnlsl#FFFFFx15y20y21');
});


test('Si el parámetro esta vacío nos devuelve "y1" si global.SUMAYACAB=1', () => {
    const modCab = '';
    global.SUMAYACAB = 1;
    expect(changePositionY(modCab)).toEqual('y1');
});

test('Si global.SUMAYACAB=1 y además el parámetro es y.5 la funcion nos da "y1.5"', () => {
    const modCab = 'y.5';
    global.SUMAYACAB = 1;
    expect(changePositionY(modCab)).toEqual('y.5y1.5');
});

test('Si global.SUMAYACAB=1 y además el parámetro es y1.5 la funcion nos da "y2.5"', () => {
    const modCab = 'y1.5';
    global.SUMAYACAB = 1;
    expect(changePositionY(modCab)).toEqual('y1.5y2.5');
});

test('un modificador que contiene Y sin número nos retornará y+valor de global.SUMAYACAB', () => {
    const modCab = 'y';
    global.SUMAYACAB = 1;
    expect(changePositionY(modCab)).toEqual('yy1');
});
