import express from "express";
import CryptoJS from "crypto-js";

import {
  reportAddress,
  checkAddress,
} from "../controller/addressController.js";

const router = express.Router();

router.post("/report", reportAddress);
router.get("/check/:address", checkAddress);

router.post("/encrypt", (req, res) => {
  try {
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({ error: "Date de intrare incorecte" });
    }

    const key = process.env.REACT_APP_SECRET_KEY;
    const encryptedData = CryptoJS.AES.encrypt(data, key).toString();

    res.json({ encryptedData });
  } catch (error) {
    res.status(500).json({ error: "A apărut o eroare în timpul criptării" });
  }
});

router.post("/decrypt", (req, res) => {
  try {
    const { encryptedData } = req.body;

    if (!encryptedData) {
      return res.status(400).json({ error: "Date de intrare incorecte" });
    }

    const key = process.env.REACT_APP_SECRET_KEY;
    const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(
      CryptoJS.enc.Utf8
    );
    console.log("pkey criptat homepage------------   " + encryptedData);
    res.json({ decryptedData });
    console.log("pkey decriptat homepage-------- " + decryptedData);
  } catch (error) {
    res.status(500).json({ error: "A apărut o eroare în timpul decriptării" });
  }
});

export default router;
