function Player({ id, name, ...opts }) {
  this.id = id;
  this.name = name;
  this.opts = opts;
}

Player.load = function (id, opts = {}) {
  return new Promise((resolve, reject) => {
    try {
      resolve(new this({ id, name: "Terry", ...opts }));
    } catch (e) {
      reject(e);
    }
  });
};

export default Player;
