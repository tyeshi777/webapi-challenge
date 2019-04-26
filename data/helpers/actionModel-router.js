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
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({ err: "no such id" });
    });
});

router.post("/", (req, res) => {
  const newAction = req.body;
  action
    .insert(newAction)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(err => {
      res.status(500).json({ err: "cannot insert" });
    });
});

router.put("/:id", (req, res) => {
  const actionId = req.params.id;
  const updatedAction = req.body;
  action
    .update(actionId, updatedAction)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({ err: "cannot update" });
    });
});

router.delete("/:id", (req, res) => {
  const actionId = req.params.id;

  action
    .remove(actionId)
    .then(action => {
      res.status(204).json(action);
    })
    .catch(err => {
      res.status(500).json({ err: "cannot remove" });
    });
});

module.exports = router;
