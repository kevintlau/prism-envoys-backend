const express = require("express");
const router = express.Router();
const charactersCtrl = require("../controllers/characters");

const isAuthenticated = (req, res, next) => {
  if (!req.query.uid) res.status(410).json({error: "not logged in"});
  next();
}

router.get("/", isAuthenticated, charactersCtrl.index);
router.post("/", charactersCtrl.create);
router.delete("/:id", isAuthenticated, charactersCtrl.delete);

module.exports = router;
