const formChangeHandler = require("./formChangeHandle");
describe("formChangeHandle", () => {
  test("add name and value to object", () => {
    const obj = {};

    formChangeHandler(obj, "name", "Erfan");
    formChangeHandler(obj, "age", 22);
    formChangeHandler(obj, "career", "developer");

    expect(obj).toEqual({
      name: "Erfan",
      age: 22,
      career: "developer",
    });
  });

  test("it should add a property to the object", () => {
    const myObject = {};
    formChangeHandler(myObject, "name", "John");

    expect(myObject).toEqual({ name: "John" });
  });

  test("it should handle multiple properties", () => {
    const myObject = { city: "New York", country: "USA" };
    formChangeHandler(myObject, "city", "San Francisco");
    formChangeHandler(myObject, "population", 884363);

    expect(myObject).toEqual({
      city: "San Francisco",
      country: "USA",
      population: 884363,
    });
  });

  test("it should handle objects with nested properties", () => {
    const nestedObject = { details: { age: 25, city: "New York" } };
    formChangeHandler(nestedObject, "details.age", 30);
    expect(nestedObject).toEqual({ details: { age: 30, city: "New York" } });
  });

  test("it should handle objects with deep nested properties", () => {
    const nestedObject = {
      details: { age: 25, city: "New York", buy: { name: "json", price: 35 } },
    };
    formChangeHandler(nestedObject, "details.buy.name", "ali");
    expect(nestedObject).toEqual({
      details: { age: 25, city: "New York", buy: { name: "ali", price: 35 } },
    });
  });
});
