"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyWithId = exports.findProperties = exports.viewAllProperties = exports.createProperty = void 0;
const property_model_1 = require("../models/property.model");
const createProperty = (name, location, type, price, description, listed, images) => __awaiter(void 0, void 0, void 0, function* () {
    const newProperty = yield property_model_1.Properties.create({
        name,
        location,
        type,
        price,
        description,
        listed,
        images,
    });
    return newProperty;
});
exports.createProperty = createProperty;
const viewAllProperties = (status) => __awaiter(void 0, void 0, void 0, function* () {
    if (status === "true") {
        const getProperties = yield property_model_1.Properties.find({ listed: status }, { _id: 0, __v: 0 });
        return getProperties;
    }
    else {
        const getProperties = yield property_model_1.Properties.find({ listed: status }, { _id: 0, __v: 0 });
        return getProperties;
    }
});
exports.viewAllProperties = viewAllProperties;
const findProperties = () => __awaiter(void 0, void 0, void 0, function* () {
    const properties = yield property_model_1.Properties.find();
    return properties;
});
exports.findProperties = findProperties;
const getPropertyWithId = (propertyId) => __awaiter(void 0, void 0, void 0, function* () {
    const property = yield property_model_1.Properties.findById(propertyId);
    if (!property)
        throw new Error('Property not Available');
    return property;
});
exports.getPropertyWithId = getPropertyWithId;
//# sourceMappingURL=properties.service.js.map