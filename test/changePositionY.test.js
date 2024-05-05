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
        .toThrow('La variable global SUMAYACAB no está definida o no tiene un valor numérico válido');

    global.SUMAYACAB = 'Tipo de dato incorrecto';
    expect(() => changePositionY(modCab))
        .toThrow('La variable global SUMAYACAB no está definida o no tiene un valor numérico válido');

    global.SUMAYACAB = undefined;
    expect(() => changePositionY(modCab))
        .toThrow('La variable global SUMAYACAB no está definida o no tiene un valor numérico válido');

    global.SUMAYACAB = NaN;
    expect(() => changePositionY(modCab))
        .toThrow('La variable global SUMAYACAB no está definida o no tiene un valor numérico válido');
});

global.SUMAYACAB = 0; //establezco un valor correcto

test('validación de parámetros', () => {
    expect(() => changePositionY())
        .toThrow('La función debe recibir un parámetro de tipo cadena');
    expect(() => changePositionY(true))
        .toThrow('La función debe recibir un parámetro de tipo cadena');
    expect(() => changePositionY(null))
        .toThrow('La función debe recibir un parámetro de tipo cadena');
    expect(() => changePositionY(undefined))
        .toThrow('La función debe recibir un parámetro de tipo cadena');
    expect(() => changePositionY(NaN))
        .toThrow('La función debe recibir un parámetro de tipo cadena');
    expect(() => changePositionY(1))
        .toThrow('La función debe recibir un parámetro de tipo cadena');
    expect(() => changePositionY(1.1))
        .toThrow('La función debe recibir un parámetro de tipo cadena');
});

test('Validación del tipo de dato string para los valores de retorno de la función', () => {
    ;
    const modCab = 'l1lnlsl#FFFFFx15y23';
    global.SUMAYACAB = 0;
    expect(changePositionY(modCab)).toBeTypeOf('string');

});

test('Validación del dato retornado', () => {
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


