import { test, expect } from 'vitest';
import { cyberReindeer } from '../cyberReindeer';
/*
Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer,
en una carretera del Polo Norte.
La carretera se representa con una cadena de caracteres, donde:
. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada,
se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado 
y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]

El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.

Tenemos una cadena de caracteres de inicio como este:--->   'S..|...|..'
si la unidad de tiempo es 10, nos devuelve un array con 10 elementos donde cada elemento es la cadena que representa cada movimiento

  Si el caracter siguiente es un '.' avanza , es decir la posición donde estamos se vuelve '.' y la siguiente 'S'
  Si el caracter siguiente es un '|' no podemos movernos hasta que pasen 5 unidades de tiempo
  Pasados 5 unidades de tiempo los caracteres '|' se reemplazan por '*'
  Pasado ese momento 'S' ya puede circular.
  

la función nos va a devolver un array de 10 elementos donde cada elemento es la un string con la ruta
*/

test('The first parameters function must take a string'
  , () => {
    expect(() => cyberReindeer(null))
      .toThrow('Error: The first parameter of the function' +
        ' must be a string with content.');

    expect(() => cyberReindeer(undefined))
      .toThrow('Error: The first parameter of the function' +
        ' must be a string with content.');

    expect(() => cyberReindeer(true))
      .toThrow('Error: The first parameter of the function' +
        ' must be a string with content.');

    expect(() => cyberReindeer(1))
      .toThrow('Error: The first parameter of the function' +
        ' must be a string with content.');

  });

test('The second parameters function must take a number'
  , () => {
    expect(() => cyberReindeer('dwqdwq', null))
      .toThrow('Error: The first parameter of the function must be a positive number.');
    expect(() => cyberReindeer('sadasd', undefined))
      .toThrow('Error: The first parameter of the function must be a positive number.');
    expect(() => cyberReindeer('sdasd', true))
      .toThrow('Error: The first parameter of the function must be a positive number.');
    expect(() => cyberReindeer('sdasd', -3))
      .toThrow('Error: The first parameter of the function must be a positive number.');

  });

test('The parameter "road" only must contain a "S" , "." , "|" , "*" characters'
  , () => {
    const unitTime = 10;
    let road = 'C..|...|..';
    expect(() => cyberReindeer(road, unitTime))
      .toThrow('Error: The parameter "road" only must contain a "S" , "." , "|" , "*" characters.');
    road = 'S.V|...|..';
    expect(() => cyberReindeer(road, unitTime))
      .toThrow('Error: The parameter "road" only must contain a "S" , "." , "|" , "*" characters.');
    road = 'dkjfdskjfksdjfksdjfksdjf';
    expect(() => cyberReindeer(road, unitTime))
      .toThrow('Error: The parameter "road" only must contain a "S" , "." , "|" , "*" characters.');
  });

test('With unitTime=1 ,If the next character is a ".",' +
  ' we replace the "." with the "S". and replace the "S" with the "."'
  , () => {
    const unitTime = 1;
    let road = 'S..............';
    const result = cyberReindeer(road, unitTime);
    expect(result)
      .toEqual(['.S.............']);
  });

test('With unitTime=2 ,If the next character is a ".",' +
  ' we replace the "." with the "S". and replace the "S" with the "."'
  , () => {
    const unitTime = 2;
    let road = 'S..............';
    const result = cyberReindeer(road, unitTime);
    expect(result)
      .toEqual(['.S.............', '..S............']);
  });

test('with unitTime>road.length' +
  ' the function returns an array with a number of elements equal to unitTime' +
  ' where the element that cannot be moved is equal to the previously terminated path.'
  , () => {
    const unitTime = 10;
    let road = 'S..';
    const result = cyberReindeer(road, unitTime);
    expect(result)
      .toEqual(['.S.', '..S', '..S', '..S', '..S', '..S', '..S', '..S', '..S', '..S']);
  });

test('With unitTime=n , the function returns an array of n elements' +
  ' where each element is the exchange of "S" for "." when road="S.........".'
  , () => {
    const unitTime = 10;
    let road = 'S..............';
    const result = cyberReindeer(road, unitTime);
    expect(result)
      .toEqual(['.S.............', '..S............', '...S...........',
        '....S..........', '.....S.........', '......S........',
        '.......S.......', '........S......', '.........S.....',
        '..........S....']);
  });

test('with character in road ="|" it cannot continue,'+
    ' the string does not change but the unitsTime continues'
  , () => {
    const unitTime = 5;
    let road = 'S|....';
    const result = cyberReindeer(road, unitTime);
    expect(result)
      .toEqual(['S|....', 'S|....', 'S|....', 'S|....', 'S|....']);
  });

  test('with character in road ="|" it cannot continue,'+
      'but if unitTime=UNIT_TIME_TO_OPEN,'+
      ' all "|" characters are replaced by "*" and the route continues where it was'
  , () => {
    const unitTime = 6;
    let road = 'S|...|';
    const result = cyberReindeer(road, unitTime);
    expect(result)
      .toEqual(['S|...|', 'S|...|', 'S|...|', 'S|...|', 'S|...|','.S...*']);
  });

  test('If "S" takes the place of "*", then "*" must be inserted again when it leaves.'
  , () => {
    const unitTime = 7;
    let road = 'S|...|';
    const result = cyberReindeer(road, unitTime);
    expect(result)
      .toEqual(['S|...|', 'S|...|', 'S|...|', 'S|...|', 'S|...|','.S...*','.*S..*']);
  });

  test('The road must finish with: ".*...S" '
  , () => {
    const unitTime = 10;
    let road = 'S|...|';
    const result = cyberReindeer(road, unitTime);
    expect(result)
      .toEqual(['S|...|', 'S|...|', 'S|...|', 
                'S|...|', 'S|...|','.S...*',
                '.*S..*','.*.S.*','.*..S*','.*...S']);
  });
  