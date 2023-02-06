const AbstractManager = require("./AbstractManager");


class EnseignantManager extends AbstractManager {
    constructor() {
      super({ table: "enseignants" });
    }
  
    findAll() {
        return this.connection.query(`select * from  ${this.table}`);
    }

}

module.exports = EnseignantManager;