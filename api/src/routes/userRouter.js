import express from "express";
import { Adminlogin } from "../controller/userController.js";
const router = express.Router();

router.post("/admin-login", Adminlogin);

export default router;
