const express = require("express");
const project = require("./projectModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  project
    .get()
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ err: "no projects to get" });
    });
});

router.get("/:id", (req, res) => {
  const projectId = req.params.id;
  project
    .get(projectId)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ err: "no such project with id" });
    });
});

router.post("/", (req, res) => {
  const newProject = req.body;
  project
    .insert(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ err: "cannot post" });
    });
});

router.put("/:id", (req, res) => {
  const projectId = req.params.id;
  const updatedProject = req.body;

  project
    .update(projectId, updatedProject)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ err: "no updating here" });
    });
});

router.delete("/:id", (req, res) => {
  const projectId = req.params.id;

  project
    .remove(projectId)
    .then(project => {
      res.status(204).send("stupid you deleted it");
    })
    .catch(err => {
      res.status(500).json({ err: "no deleting" });
    });
});

router.get("/:id/action", (req, res) => {
  const projectId = req.params.id;
  project
    .getProjectActions(projectId)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ err: "no deleting here" });
    });
});
module.exports = router;
