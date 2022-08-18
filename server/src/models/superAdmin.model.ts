const superAdmin = require("mongoose");

const superAdminData = superAdmin.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please add a firstname"],
    },
    lastname: {
      type: String,
      required: [true, "Please add a lastname"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    phone: {
      type: String,
      required: [true, "Please add your phone number"],
    },
  },
  {
    timestamps: true,
  }
);



module.exports = superAdmin.model("SuperUser", superAdminData);
