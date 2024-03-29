const models = require("../models");

const browse = (req, res) => {
  models.projet
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
  models.projet
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

const add = (req, res) => {
  const projet = req.body;
  models.projet
    .create(projet)
    .then((result) => {
      res.location(`/projets/${result.id}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
module.exports = { browse, read, add };
