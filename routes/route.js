import express from "express";

import {
  reportAddress,
  checkAddress,
} from "../controller/addressController.js";

const router = express.Router();

router.post("/report", reportAddress);
router.get("/check/:address", checkAddress);

export default router;
