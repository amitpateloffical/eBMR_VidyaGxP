import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import RoleGroup from "../models/roleGroups.model.js";
// import RoleGroup from "module";
import bcrypt from "bcrypt";
import { getFileUrl } from "../middleware/authentication.js";
import Role from "../models/roles.model.js";
import Process from "../models/processes.model.js";
import Site from "../models/sites.model.js";
import UserRole from "../models/userRoles.model.js";
import User from "../models/users.model.js";
import { sequelize } from "../config/db.js";
import config from "../config/config.json" assert { type: "json" };
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
      const token = jwt.sign({ user: "Admin" }, config.development.JWT_ADMIN_SECRET, {
        expiresIn: "24h",
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

export const createUser = async (req, res) => {
  const { password, email, name, rolesArray, age, gender } = req.body;
  console.log(req.body);
  // console.log(req.body);
  if (!password || !email || !name || !rolesArray) {
    return res.status(400).json({
      error: true,
      message: "Please provide proper user details!",
    });
  }

  // Start a transaction
  const transaction = await sequelize.transaction();

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
      return res.status(400).json({
        error: true,
        message: "User already registered!",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(password, salt);

    // Create the user
    const newUser = await User.create(
      {
        name: name,
        email: email,
        password: hashpass,
        age: age,
        gender: gender,
        profile_pic: getFileUrl(req?.file),
      },
      { transaction }
    );

    // Process roles array
    for (const role of rolesArray) {
      const singleRole = role.label.split("-");
      // console.log("singleRole", singleRole);
      const roleId = await Role.findOne({ where: { role: singleRole[2] } });
      // console.log("roleId", roleId);

      const roleGroup = await RoleGroup.findOne({
        where: { roleGroup: role.label },
      });
      // console.log("roleGroup", roleGroup);

      const processId = await Process.findOne({
        where: { process: singleRole[1] },
      });
      // console.log("processId", processId);

      const siteId = await Site.findOne({ where: { site: singleRole[0] } });
      // console.log("siteId", siteId);

      await UserRole.create(
        {
          user_id: newUser.user_id,
          site_id: siteId.site_id,
          process_id: processId.process_id,
          role_id: roleId.role_id,
          roleGroup_id: roleGroup.roleGroup_id,
        },
        { transaction }
      );
    }

    // Commit the transaction
    await transaction.commit();

    return res.status(200).json({
      error: false,
      message: "User Registered",
    });
  } catch (error) {
    // Rollback the transaction in case of error
    await transaction.rollback();

    return res.status(500).json({
      error: true,
      message: `Error during registration: ${error.message}`,
    });
  }
};

export const Userlogin = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  // console.log(email, password);
  User.findOne({
    where: {
      email: email.toLowerCase(),
    },
    raw: true,
  })
    .then((data) => {
      bcrypt.compare(password, data.password, async (_err, result) => {
        if (!result) {
          res.status(400).json({
            error: true,
            message: "Invalid Password!",
          });
        } else {
          let userRoles = await UserRole.findAll({
            where: {
              user_id: data?.user_id,
            },
            attributes: { exclude: ["createdAt", "updatedAt"] },
          });
          const token = jwt.sign(
            { userId: data.user_id, roles: userRoles },
            config.development.JWT_ADMIN_SECRET,
            { expiresIn: "24h" }
          );
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
      });
    })
    .catch((e) => {
      res.status(401).json({
        error: false,
        message: "Couldn't find User!",
      });
    });
};

export const getAllUsers = async (req, res) => {
  User.findAll()
    .then((result) => {
      res.status(200).json({
        error: false,
        response: result,
      });
    })
    .catch((e) => {
      res.status(400).json({
        error: true,
        response: e.message,
      });
    });
};
export const deleteUser = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const user = await User.findOne({ where: { user_id: req.params.id } }, { transaction });
    if (!user) {
      return res.status(404).json({
        error: true,
        message: "User not found",
      });
    }

    await UserRole.destroy({ where: { user_id: req.params.id } }, { transaction });

    await User.destroy({ where: { user_id: req.params.id } }, { transaction });
    await transaction.commit();
    res.json({
      error: false,
      message: "User deleted successfully",
    });
  } catch (err) {
    await transaction.rollback();
    res.status(500).json({
      error: true,
      message: err.message,
    });
  }
};

export const getAUser = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { user_id: req.params.id },
      include: [
        {
          model: UserRole,
          include: [
            {
              model: RoleGroup,
              attributes: ["roleGroup", "roleGroup_id"], // Select roleGroup and roleGroup_id attributes
            },
          ],
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const formattedUser = {
      user_id: user.user_id,
      name: user.name,
      email: user.email,
      age: user.age,
      gender: user.gender,
      profile_pic: user.profile_pic,
      roles: user.UserRoles.map((userRole) => ({
        label: userRole.RoleGroup.roleGroup,
        value: userRole.RoleGroup.roleGroup_id,
      })),
    };

    res.status(200).json(formattedUser);
  } catch (error) {
    console.error("Error fetching user with role groups:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUserPermissions = async (req, res) => {
  UserRole.findAll({
    where: {
      user_id: req.params.id,
    },
    include: [
      {
        model: RoleGroup,
      },
    ],
  })
    .then((result) => {
      res.json({
        error: false,
        message: result,
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: true,
        message: error.message,
      });
    });
};

export const editUser = async (req, res) => {
  // Check if request body is empty
  if (!req.body && !req.files) {
    return res.status(400).json({
      error: true,
      message: "Please provide details to update!",
    });
  }

  // Start a transaction
  const transaction = await sequelize.transaction();

  try {
    // Update user details
    const userdetails = {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      gender: req.body.gender,
      profile_pic: getFileUrl(req?.file),
    };

    await User.update(userdetails, {
      where: { user_id: req.params.id },
      transaction,
    });

    // Delete existing UserRole entries
    await UserRole.destroy({
      where: { user_id: req.params.id },
      transaction,
    });

    // Process roles array
    const rolesArray = req.body.rolesArray;
    for (const role of rolesArray) {
      const singleRole = role.label.split("-");
      const roleId = await Role.findOne({
        where: { role: singleRole[2] },
        transaction,
      });
      const processId = await Process.findOne({
        where: { process: singleRole[1] },
        transaction,
      });
      const siteId = await Site.findOne({
        where: { site: singleRole[0] },
        transaction,
      });
      const roleGroup = await RoleGroup.findOne({
        where: { roleGroup: role.label },
        transaction,
      });

      await UserRole.create(
        {
          user_id: req.params.id,
          site_id: siteId.site_id,
          process_id: processId.process_id,
          role_id: roleId.role_id,
          roleGroup_id: roleGroup.roleGroup_id,
        },
        { transaction }
      );
    }

    // Commit the transaction
    await transaction.commit();

    console.log("User Edited Successfully");
    return res.status(200).json({
      error: false,
      message: "User Details Updated",
    });
  } catch (error) {
    // Rollback the transaction in case of error
    await transaction.rollback();

    return res.status(500).json({
      error: true,
      message: `Error during update: ${error.message}`,
    });
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
