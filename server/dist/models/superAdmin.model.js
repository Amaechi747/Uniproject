"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const superAdmin = require("mongoose");
const superAdminData = superAdmin.Schema({
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
}, {
    timestamps: true,
});
const SuperAdmin = superAdmin.model("SuperUser", superAdminData);
exports.default = superAdmin;
//# sourceMappingURL=superAdmin.model.js.map