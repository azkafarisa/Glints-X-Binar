const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

router.get("/:name", Controller.get);
router.post("/:name", Controller.post);
router.put("/:name", Controller.put);
router.delete("/:name", Controller.delete);

module.exports = router;
