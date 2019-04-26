const express = require("express");
const action = require("./actionModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  action
    .get()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({ err: "cannot get the data" });
    });
});

router.get("/:id", (req, res) => {
  const actionId = req.params.id;
  action
    .get(actionId)
    .then()
    .catch(err => {
      res.status(500).json({ err: "no such id" });
    });
});

module.exports = router;
