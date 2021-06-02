const Character = require("../models/character");

const index = (req, res) => {
  Character.find({}, (err, characters) => {
    res.status(200).json(characters);
  });
};

const create = (req, res) => {
  Character.create(req.body, (err, character) => {
    res.status(200).json(character);
  });
};

module.exports = {
  index,
  create,
};
