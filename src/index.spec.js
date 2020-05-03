import Game from "./index";

describe("#index.js", function () {
  it("start the game", function (done) {
    const game = Game.startGame("1-3");
    console.log("the game", game);
    game.then((results) => {
      console.log("testing", results);

      expect(results.options).toEqual({
        id: "1-3",
        map: {},
        opts: {},
      });
    });
    done();
  });
});
