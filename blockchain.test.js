const Blockchain = require("./blockchain");

test("Empty Blockchain class instance", () => {
  const data = new Blockchain();
  expect(data).toEqual({ chain: [], newTransactions: [] });
});
