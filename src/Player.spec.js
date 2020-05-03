import Player from "./Player";

let player;

describe("#Player", function () {
  describe("creating a new player", function () {
    beforeEach(function () {
      player = new Player({ id: "AI01", name: "Joe" });
    });
    it("creates a player with the id and name", function () {
      expect(player.name).toEqual("Joe");
      expect(player.id).toEqual("AI01");
    });
  });
});
