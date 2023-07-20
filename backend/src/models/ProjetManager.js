const AbstractManager = require("./AbstractManager");

class ProjetManager extends AbstractManager {
  constructor() {
    super({ table: "PROJET" });
  }

  create(projet) {
    return this.database.query(
      `insert into ${this.table} (name, description, url) VALUES (?,?,?)`,
      [projet.name, projet.description, projet.url]
    );
  }
}

module.exports = ProjetManager;
