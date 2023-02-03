const AbstractManager = require("./AbstractManager");

class AtelierManager extends AbstractManager {
  constructor() {
    super({ table: "ateliers" });
  }

  findAll() {
    return this.connection.query(
      `select * from  ${this.table} INNER JOIN enseignants ON ateliers.Enseignants_idEnseignants=enseignants.idenseignants`
    );
  }
  

  find(id) {
    return this.connection.query(
      `select * from  ${this.table} where idateliers= ?`,
      [id]
    );
  }

  insert(atelier) {
    return this.connection.query(
      `insert into ${this.table} (name, image, description, durée, Enseignants_idEnseignants, tarif) values (?, ?, ?, ?, ?, ?)`,
      [
        atelier.name,
        atelier.image,
        atelier.description,
        atelier.durée,
        atelier.Enseignants_idEnseignants,
        atelier.tarif,
      ]
    );
  }

  update(atelier) {
    return this.connection.query(
      `update ${this.table} set name = ?, image = ?, description = ?, durée = ?, Enseignants_idEnseignants = ?, tarif = ?`,
      [
        atelier.name,
        atelier.image,
        atelier.description,
        atelier.durée,
        atelier.Enseignants_idEnseignants,
        atelier.tarif,
      ]
    );
  }

  delete(id) {
    return this.connection.query(
      `delete from ${this.table} where idateliers = ?`,
      [id]
    );
  }
}

module.exports = AtelierManager;
