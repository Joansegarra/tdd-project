const { sumar, restar, multiplicar, dividir } = require('../app/calculadora');

describe('Funcions de la calculadora', () => {
  test('La funció sumar funciona correctament', () => {
    expect(sumar(2, 3)).toBe(5);
    expect(sumar(-2, 3)).toBe(1);
    expect(sumar(0, 0)).toBe(0);
  });

  test('La funció restar funciona correctament', () => {
    expect(restar(2, 3)).toBe(-1);
    expect(restar(-2, 3)).toBe(-5);
    expect(restar(0, 0)).toBe(0);
  });

  test('La funció multiplicar funciona correctament', () => {
    expect(multiplicar(2, 3)).toBe(6);
    expect(multiplicar(-2, 3)).toBe(-6);
    expect(multiplicar(0, 0)).toBe(0);
  });

  test('La funció dividir funciona correctament', () => {
    expect(dividir(6, 3)).toBe(2);
    expect(dividir(-6, 3)).toBe(-2);
    expect(dividir(0, 5)).toBe(0);
    expect(() => dividir(6, 0)).toThrow('No es pot dividir per zero');
  });
});
