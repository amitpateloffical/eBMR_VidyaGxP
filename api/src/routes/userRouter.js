import express from "express";
import { Adminlogin, createUser, getAllRoleGroups } from "../controller/userController.js";
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
router.post("/add-user", checkAdminJwtToken, upload.single("profile_pic"), createUser);


export default router;
