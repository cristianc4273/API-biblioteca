const express = require("express");
const animalSchema = require("../models/animal");

const router = express.Router();

router.post("/crud", (req, res) => {
    const materialSchema = materialSchema(req.body);
    material
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.get("/crud", (req, res) => {
    materialSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/crud/:id", (req, res) => {
    const { id } = req.params;
    materialSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put("/crud/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, tipo } = req.body;
    materialSchema
        .updateOne({ _id: id }, {
            $set: { name, age, tipo }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.delete("/crud/:id", (req, res) => {
    const { id } = req.params;
    materialSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;