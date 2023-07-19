const AbstractManager = require("./AbstractManager");

class LanguageManager extends AbstractManager {
  constructor() {
    super({ table: "LANGUAGE" });
  }

  findTechno(id) {
    return this.database.query(
      `Select t.name from projet as p JOIN projetlanguages as pl ON pl.id_projet = p.id JOIN ${this.table} as t ON pl.id_language = t.id where p.id = ?`,
      [id]
    );
  }
}

module.exports = LanguageManager;
