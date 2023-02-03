const models = require("../models");

const browse = (req, res) => {
  models.ateliers
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
  models.ateliers
    .find(req.params.id)
    .then(([ateliers]) => {
      if (ateliers[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(ateliers[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const add = (req, res) => {
  const atelier = req.body;
  models.ateliers
    .insert(atelier)
    .then(([result]) => {
      res.location(`/ateliers/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const atelier = req.body;

  // TODO validations (length, format...)

  atelier.id = parseInt(req.params.id, 10);

  models.ateliers
    .update(atelier)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.ateliers
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { browse, read, add, edit, destroy };
