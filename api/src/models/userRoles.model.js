import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import User from "./users.model";
import Role from "./roles.model";
import Site from "./sites.model";
import Process from "./processes.model";
import RoleGroup from "./roleGroups.model";

// const { default: Role } = require("./roles.model");
// const { default: Site } = require("./sites.model");
// const { default: Process } = require("./processes.model");
// const { default: RoleGroup } = require("./roleGroups.model");
// const { default: User } = require("./users.model");

const UserRole = sequelize.define("UserRole", {
  userRole_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: "role_id",
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "user_id",
    },
  },
  site_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Site,
      key: "site_id",
    },
  },
  process_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Process,
      key: "process_id",
    },
  },
  roleGroup_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: RoleGroup,
      key: "roleGroup_id",
    },
  },
});

UserRole.belongsTo(User, { foreignKey: "user_id" });
UserRole.belongsTo(Role, { foreignKey: "role_id" });
UserRole.belongsTo(Site, { foreignKey: "site_id" });
UserRole.belongsTo(Process, { foreignKey: "process_id" });
UserRole.belongsTo(RoleGroup, { foreignKey: "roleGroup_id" });

User.hasMany(UserRole, { foreignKey: "user_id" });
Role.hasMany(UserRole, { foreignKey: "role_id" });
Site.hasMany(UserRole, { foreignKey: "site_id" });
Process.hasMany(UserRole, { foreignKey: "process_id" });
RoleGroup.hasMany(UserRole, { foreignKey: "roleGroup_id" });

export default UserRole;
