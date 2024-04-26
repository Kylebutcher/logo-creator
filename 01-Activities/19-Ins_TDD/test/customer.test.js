const Customer = require("../customer");


describe('Test of Customer class', () => {

  it("should instantiate when the new keyword is used", () => {
    const newObj = new Customer();
    expect(newObj).toBeInstanceOf(Customer)
  });

  it("should create a name property when the customer name is provided", () => {
    const customer = new Customer("John Doe");
    expect(customer.name).toEqual("John Doe");
  })
  it("should respond with how many characters are in the customer's name when the count method is called.", () => {
    const customer = new Customer("John Doe");
    const total = 8;
    const count = customer.count()
    expect(count).toBeLessThanOrEqual(8);
  })
})