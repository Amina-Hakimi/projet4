const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const AtelierControllers = require("./controllers/AtelierControllers");

const EnseignantControllers = require("./controllers/EnseignantControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/ateliers", AtelierControllers.browse);
router.get("/ateliers/:id", AtelierControllers.read);
router.post("/ateliers", AtelierControllers.add);
router.put("/ateliers/:id", AtelierControllers.edit);
router.delete("/ateliers/:id", AtelierControllers.destroy);
router.get("/enseignants", EnseignantControllers.browse);
module.exports = router;
