const Character = require("../models/character");

const index = (req, res) => {
  Character.find({ uid: req.query.uid }, (err, characters) => {
    res.status(200).json(characters);
  });
};

const create = (req, res) => {
  Character.create(req.body, (err, character) => {
    res.status(201).json(character);
  });
};

const select = (req, res) => {
  Character.find({ _id: req.params.id }, (err, character) => {
    res.status(200).json(character);
  });
};

const save = (req, res) => {
  Character.findByIdAndUpdate(req.params.id, req.body, (err, character) => {
    req.query.uid = character.uid;
    index(req, res);
  });
};

const deleteChar = (req, res) => {
  Character.findByIdAndDelete(req.params.id, (err, character) => {
    req.query.uid = character.uid;
    index(req, res);
  });
};

module.exports = {
  index,
  select,
  create,
  save,
  delete: deleteChar,
};
