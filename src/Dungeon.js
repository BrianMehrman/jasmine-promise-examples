function Dungeon({ id, map = {}, ...opts }) {
  this.id = id;
  this.map = map;
  this.opts = opts;

  this.options = {
    id,
    map,
    opts,
  };
}

Dungeon.load = function (id, opts = {}) {
  return new Promise((resolve, reject) => {
    try {
      resolve(new this({ id, map: {}, ...opts }));
    } catch (e) {
      reject(e);
    }
  });
};

export default Dungeon;
