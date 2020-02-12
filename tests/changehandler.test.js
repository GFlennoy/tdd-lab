let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {
  test("amountDue is set based on an argument", function() {
    let test = new ChangeHandler(1);
    // Remember, you can arrange, act, and assert...start small
    expect(test.amountDue).toBe(1);
  });
  test("cashTendered is set to zero", function() {
    let test = new ChangeHandler(999);
    // Remember, you can arrange, act, and assert...start small
    expect(test.cashTendered).toBe(0);
  });
  test("Inserting a quarter adds 25", function() {
    let test = new ChangeHandler(1);
    test.insertCoin("quarter");
    // Remember, you can arrange, act, and assert...start small
    expect(test.cashTendered).toBe(25);
  });
  test("Inserting a dime adds 10", function() {
    let test = new ChangeHandler(999);
    test.insertCoin("dime");
    // Remember, you can arrange, act, and assert...start small
    expect(test.cashTendered).toBe(10);
  });
  test("Inserting a nickel adds 5", function() {
    let test = new ChangeHandler(999);
    test.insertCoin("nickel");
    // Remember, you can arrange, act, and assert...start small
    expect(test.cashTendered).toBe(5);
  });
  test("Inserting a penny adds 1", function() {
    let test = new ChangeHandler(999);
    test.insertCoin("penny");
    // Remember, you can arrange, act, and assert...start small
    expect(test.cashTendered).toBe(1);
  });
  test("cash tendered is more than cash Due", function() {
    let test = new ChangeHandler(25);
    test.insertCoin("quarter");
    test.insertCoin("penny");
    test.isPaymentSufficient();
    // Remember, you can arrange, act, and assert...start small
    expect(test.isPaymentSufficient()).toBe(true);
  });
  test("cash tendered is less than cash due", function() {
    let test = new ChangeHandler(25);
    test.insertCoin("dime");
    // Remember, you can arrange, act, and assert...start small
    expect(test.isPaymentSufficient()).toBe(false);
  });
  test("cash tendered is equal to cash due", function() {
    let test = new ChangeHandler(25);
    test.insertCoin("quarter");
    // Remember, you can arrange, act, and assert...start small
    expect(test.isPaymentSufficient()).toBe(true);
  });
  test("32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", function() {
    let test = new ChangeHandler(32);
    test.insertCoin("quarter");
    test.insertCoin("nickel");
    test.insertCoin("penny");
    test.insertCoin("penny");
    // Remember, you can arrange, act, and assert...start small
    expect(test.giveChange()).toEqual({
      quarters: 0,
      dimes: 0,
      nickels: 1,
      pennies: 2
    });
  });
});
