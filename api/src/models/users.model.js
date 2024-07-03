import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    // unique: true,
    // indexes: [], // Disable index creation for the email field
    // validate: {
    //   isEmail: true,  
    // }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 255], // Minimum and maximum allowed length
        msg: "Password must be at least 8 characters long",
      },
    },
  },
  age: {
    type: DataTypes.INTEGER,
  },
  gender: {
    type: DataTypes.STRING,
  },
  profile_pic: {
    type: DataTypes.STRING,
  },
});

// User.belongsToMany(Project, { through: UserProject });
// Project.belongsToMany(User, { through: UserProject });

export default User;
