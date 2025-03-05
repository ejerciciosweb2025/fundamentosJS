describe("Test Sumar", ()=>{
    const sumar = require('./testJest.js');

    test('Función sumar definida', () => {
        expect(sumar).toBeDefined();
    })
});

describe("Test Sumar", ()=>{
    const sumar = require('./testJest.js');
    test('sumar 1 + 2 es igual a 3', () => {
        expect(sumar(1, 2)).toEqual(3);
    })
});

describe("Test Sumar", ()=>{
    const sumar = require('./testJest.js');
    test('sumar 1 + 2 es igual a 3', () => {
        expect(sumar(1, 2)).toEqual(3);
    })
});