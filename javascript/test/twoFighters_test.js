const assert = require("assert");
const twoFighters = require("../general/codewars/twoFighters");

describe("declareWinner function test", () => {
  it("can handle first case", () => {
    const { declareWinner, Fighter } = twoFighters;
    assert(
      declareWinner(
        new Fighter("Lew", 10, 2),
        new Fighter("Harry", 5, 4),
        "Lew"
      ) === "Lew"
    );
  });

  it("can handle second case", () => {
    const { declareWinner, Fighter } = twoFighters;
    assert(
      declareWinner(
        new Fighter("Harald", 20, 5),
        new Fighter("Harry", 5, 4),
        "Harry"
      ) === "Harald"
    );
  });

  it("can handle third case", () => {
    const { declareWinner, Fighter } = twoFighters;
    assert(
      declareWinner(
        new Fighter("Jerry", 30, 3),
        new Fighter("Harald", 20, 5),
        "Jerry"
      ) === "Harald"
    );
  });

  it("can handle fourth case", () => {
    const { declareWinner, Fighter } = twoFighters;
    assert(
      declareWinner(
        new Fighter("Jerry", 30, 3),
        new Fighter("Harald", 20, 5),
        "Harald"
      ) === "Harald"
    );
  });
});
