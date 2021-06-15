const express = require("express");
const router = express.Router();
const charactersCtrl = require("../controllers/characters");

// TODO: convert to authentication using JWTs
const isAuthenticated = (req, res, next) => {
  if (!req.query.uid) res.status(410).json({ error: "not logged in" });
  next();
};

router.get("/", isAuthenticated, charactersCtrl.index);
router.get("/:id", isAuthenticated, charactersCtrl.select);
router.post("/", charactersCtrl.create);
router.put("/:id", isAuthenticated, charactersCtrl.save);
router.delete("/:id", isAuthenticated, charactersCtrl.delete);

module.exports = router;
