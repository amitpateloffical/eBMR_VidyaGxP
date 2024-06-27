import express from "express";
import { Adminlogin, getAllRoleGroups } from "../controller/userController.js";
const router = express.Router();

router.post("/admin-login", Adminlogin);
router.get("/get-all-role-groups", getAllRoleGroups);

export default router;
