
const saludo = require('./electiva');

test('saludo devuelve "Hola Mundo!"', () => {
  expect(saludo()).toBe("Hola Mundo!");
});