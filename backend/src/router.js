const express = require("express");

const router = express.Router();

const cors = require("cors");

router.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

const projetControllers = require("./controllers/projetControllers");

const languageControllers = require("./controllers/languageControllers");

router.get("/projets", projetControllers.browse);
router.get("/projets/:id", projetControllers.read);
router.post("/projets", projetControllers.add);

router.get("/languages", languageControllers.browse);
router.get("/languages/:id", languageControllers.read);
router.get("/languages/projet/:id", languageControllers.readProjetTechno);

module.exports = router;
