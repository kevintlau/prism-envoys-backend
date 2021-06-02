const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    name: String,
    race: String,
    class: String,
    level: Number,
    xp: Number,
    maxHp: Number,
    currentHp: Number,
    maxMp: Number,
    currentMp: Number,
    atk: Number,
    dex: Number,
    def: Number,
    luk: Number,
    location: String,
    inventory: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Character", characterSchema);
