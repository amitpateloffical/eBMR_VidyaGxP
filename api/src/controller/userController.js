import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import RoleGroup from "../models/roleGroups.model.js";
// import RoleGroup from "module";

dotenv.config();
//   res.json({
//     message: "Api route is working!!",
//   });

export const Adminlogin = (req, res) => {
  const { email, password } = req.body;
  //   console.log("Hello", req.body);
  if (email.toLowerCase() !== "admin@vidyagxp.com") {
    res.status(401).json({
      error: false,
      message: "Couldn't find User!",
    });
  } else {
    if (password !== "admin") {
      res.status(400).json({
        error: false,
        message: "Incorrect Password!",
      });
    } else {
      const token = jwt.sign({ user: "Admin" }, process.env.JWT_ADMIN_SECRET, {
        expiresIn: "1h",
      });
      if (token) {
        res.status(200).json({
          error: false,
          token: token,
        });
      } else {
        res.status(400).json({
          error: true,
          message: "Some unknown error",
        });
      }
    }
  }
};

export const getAllRoleGroups = async (req, res) => {
  try {
    const result = await RoleGroup.findAll();
    res.status(200).json({
      error: false,
      response: result,
    });
  } catch (e) {
    res.status(400).json({
      error: true,
      response: e.message,
    });
  }
};
