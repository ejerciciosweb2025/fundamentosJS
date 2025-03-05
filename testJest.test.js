const exportaciones = require('./testJest.js');

describe("Test Sumar", ()=>{
    let sumar = exportaciones.sumar;
    test('Función sumar definida', () => {
        expect(sumar).toBeDefined();
    })
});

describe("Test Sumar", ()=>{
    let sumar = exportaciones.sumar;
    test('sumar 1 + 2 es igual a 3 Equal', () => {
        expect(sumar(1, 2)).toEqual(3);
    })
});

describe("Test Sumar", ()=>{
    let sumar = exportaciones.sumar;
    test('sumar 1 + 2 es igual a 3 Be', () => {
        expect(sumar(1, 2)).toBe(3);
    })
});

/*describe("Test Sumar", ()=>{
    const sumar = require('./testJest.js');
    test('sumar 1 + 2 es igual a 3', () => {
        expect(sumar(2, 2)).toEqual(3);
    })
});*/

//Restar
describe("Test Restar", ()=>{
    let restar = exportaciones.restar;
    test('Función restar definida', () => {
        expect(restar).toBeDefined();
    })
});

describe("Test Restar", ()=>{
    let restar = exportaciones.restar;
    test('restar 1 + 2 es igual a 3 Equal', () => {
        expect(restar(1, 2)).toEqual(-1);
    })
});

describe("Test Restar", ()=>{
    let restar = exportaciones.restar;
    test('restar 1 + 2 es igual a 3 Be', () => {
        expect(restar(2, 1)).toBe(1);
    })
});




//Multiplicar

describe("Test Multiplicar", ()=>{
    let multiplicar = exportaciones.multiplicar;

    test('Función multiplicar definida', () => {
        expect(multiplicar).toBeDefined();
    })
});

describe("Test Multiplicar", ()=>{
    let multiplicar = exportaciones.multiplicar;
    test('multiplicar 4 * 2 es igual a 2 Be', () => {
        expect(multiplicar(4, 2)).toBe(8);
    })
});

describe("Test Multiplicar", ()=>{
    let multiplicar = exportaciones.multiplicar;
    test('multiplicar 4 * 2 es igual a 2 Equal', () => {
        expect(multiplicar(4, 2)).toEqual(8);
    })
});
/** Dividir **/


describe("Test Dividir", ()=>{
    let dividir = exportaciones.dividir;

    test('Función dividir definida', () => {
        expect(dividir).toBeDefined();
    })
});

describe("Test Dividir", ()=>{
    let dividir = exportaciones.dividir;
    test('dividir 8 / 4 es igual a 2 Be', () => {
        expect(dividir(8, 2)).toBe(4);
    })
});

describe("Test Dividir", ()=>{
    let dividir = exportaciones.dividir;
    test('dividir 8 / 4 es igual a 2 Equal', () => {
        expect(dividir(8, 2)).toEqual(4);
    })
});
describe("Test Dividir", ()=>{
    let dividir = exportaciones.dividir;
    test('dividir 2 / 8 es igual a 0.25', () => {
        expect(dividir(2, 8)).toEqual(0.25);
    })
});

