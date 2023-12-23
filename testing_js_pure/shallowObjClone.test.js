const shallowObjClone = require("./shallowObjClone");

test("Create a clone of the object parameter", () => {
  const myObj = { person: "Erfan Hoseini", age: 20 };
  expect(shallowObjClone(myObj)).toStrictEqual(myObj);
});
