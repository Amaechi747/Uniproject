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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyController = exports.getAllProperties = exports.addAProperty = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const utils_1 = require("../utils/utils");
const properties_service_1 = require("../services/properties.service");
const addAProperty = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, location, type, price, images, listed, description } = req.body;
    yield (0, utils_1.addPropertyValidator)().validateAsync({
        name,
        location,
        type,
        price,
        description,
        listed,
        images,
    });
    const newListing = yield (0, properties_service_1.createProperty)(name, location, type, price, description, listed, images);
    res.status(201).json({
        status: "Successful",
        message: {
            newListing,
        },
    });
    return;
}));
exports.addAProperty = addAProperty;
const getAllProperties = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const status = req.params.status;
    const allProperties = yield (0, properties_service_1.viewAllProperties)(status);
    res.status(200).json({
        status: "Successful",
        message: {
            allProperties,
        },
    });
}));
exports.getAllProperties = getAllProperties;
const getPropertyController = {
    getProperties(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const properties = yield (0, properties_service_1.findProperties)();
                return res.status(201).json({
                    message: "successful",
                    properties
                });
            }
            catch (error) {
                return res.status(401).json({
                    message: 'failed',
                    error
                });
            }
        });
    },
    getProperty(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { propertyId } = req.params;
                const property = yield (0, properties_service_1.getPropertyWithId)(propertyId);
                return res.status(201).json({
                    message: "successful",
                    property
                });
            }
            catch (error) {
                return res.status(401).json({
                    message: 'failed',
                    error
                });
            }
        });
    }
};
exports.getPropertyController = getPropertyController;
//# sourceMappingURL=property.controller.js.map