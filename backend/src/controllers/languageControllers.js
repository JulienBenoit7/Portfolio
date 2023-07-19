const models = require("../models");

const browse = (req, res) => {
  models.language
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  const { id } = req.params;
  models.language
    .findByPk(id)
    .then((row) => {
      if (row) {
        res.send(row);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readProjetTechno = (req, res) => {
  const { id } = req.params;
  models.language
    .findAll({ where: { projetId: id } })
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { browse, read, readProjetTechno };
