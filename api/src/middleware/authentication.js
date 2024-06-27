import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function checkAdminJwtToken(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    // console.log(token);
  if (!token) {
    return res.status(401).json({
      error: true,
      message: "Unauthorized User",
    });
  }
  jwt.verify(token, process.env.JWT_ADMIN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: true,
        message: "Unauthorized User",
      });
    }
    req.user = decoded;
    next();
  });
}

export const getFileUrl = (file) => {
//   if (file?.filename) {
//     return `http://localhost:1000/profile_pics/${file?.filename}`;
//   }
};