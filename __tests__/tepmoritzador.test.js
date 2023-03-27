const esperar = require('../app/temporitzador');

describe('esperar', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('espera el temps especificat abans de resoldre la promesa', () => {
    const start = Date.now();
    const ms = 1000;

    esperar(ms).then(() => {
      const end = Date.now();
      const diff = end - start;
      expect(diff).toBeGreaterThanOrEqual(ms);
    });

    jest.runOnlyPendingTimers();
  });

  test('resol la promesa amb èxit', () => {
    const ms = 1000;

    esperar(ms).then(() => {
      expect(true).toBe(true);
    });

    jest.runOnlyPendingTimers();
  });
});
