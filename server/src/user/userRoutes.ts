import express = require("express");
const router = express.Router();
import {registerUser} from "./userController";

router.post("/", registerUser);

module.exports = router;
