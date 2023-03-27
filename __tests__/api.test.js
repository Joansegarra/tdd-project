const { getEmployee, getSalary } = require("../app/api");

test("obtenir l'empleat amb id 1", () => {
  expect.assertions(1);
  return getEmployee(1).then((data) => {
    expect(data.name).toBe("Leanne Graham");
  });
});

test("obtenir el salari de l'empleat amb id 1", () => {
  expect.assertions(1);
  return getSalary(1).then((data) => {
    expect(data.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
  });
});
