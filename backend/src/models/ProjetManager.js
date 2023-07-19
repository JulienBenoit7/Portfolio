const AbstractManager = require("./AbstractManager");

class ProjetManager extends AbstractManager {
  constructor() {
    super({ table: "PROJET" });
  }
}

module.exports = ProjetManager;
