import Store from "./Store";
import Dungeon from "./Dungeon";
import Player from "./Player";

const store = new Store();

const loadPlayer = (id, opts) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const player = Player.load(id, opts);

      store.setState({ player });

      resolve(player);
    }, 10);
  });
};

const loadDungeon = (name) => {
  return new Promise((resolve) => {
    let dungeon;

    setTimeout(() => {
      dungeon = Dungeon.load(name, { map: {} });

      store.setState({ dungeon });

      dungeon.then((result) => {
        const player = loadPlayer("npc01", { name: "Terry" });

        player.then((results) => {
          console.log("Player loaded:", results);
        });

        console.log("Dungeon loaded: ", result);
      });
    }, 1000);

    resolve(dungeon);
  });
};

const startGame = (level = "1-1") => {
  return loadDungeon(level);
};

const Game = {
  startGame,
  store,
};

export default Game;
