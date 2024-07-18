import express from "express";
import {
  Adminlogin,
  createUser,
  getAllRoleGroups,
  getAllUsers,
  getUserPermissions,
  editUser,
  getAUser,
  deleteUser,
  Userlogin,
} from "../controller/userController.js";
import { checkAdminJwtToken } from "../middleware/authentication.js";
// import { upload } from "../../index.js";
import multer from "multer";

const router = express.Router();

// Multer setup for file uploads
export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../documents/profile_pics/"));
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

export const upload = multer({ storage: storage });

router.post("/admin-login", Adminlogin);
router.get("/get-all-role-groups", getAllRoleGroups);
router.post("/add-user",  checkAdminJwtToken,upload.single("profile_pic"), createUser);
// router.put("/edit-user/:id", upload.single("profile_pic"), checkAdminJwtToken, editUser);
router.put("/edit-user/:id", upload.single("profile_pic"), editUser);

router.get("/get-all-users", getAllUsers);
router.get("/get-a-user/:id", getAUser);

// router.get("/get-user-permissions/:id", checkAdminJwtToken, getUserPermissions);
router.get("/get-user-permissions/:id", getUserPermissions);
router.delete("/delete-user/:id", checkAdminJwtToken, deleteUser);
router.post("/user-login",checkAdminJwtToken,Userlogin);

export default router;
