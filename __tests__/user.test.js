const { getUser } = require('../app/user');

test("obtenir l'usuari amb id 1", async () => {
  const data = await getUser(1);
  expect(data.name).toBe("Leanne Graham");
});
