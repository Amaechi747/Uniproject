"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Properties = void 0;
const Property = require("mongoose");
const propertySchema = new Property.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: { type: String },
});
const Properties = Property.model("Properties", propertySchema);
exports.Properties = Properties;
//# sourceMappingURL=property.model.js.map