"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requestModel_1 = require("../models/requestModel");
const dummyRequest = {
    _id: '',
    name: '',
    email: '',
    date: new Date(),
    time: '',
    phoneNumber: ''
};
function createRequest(request) {
    let requestOutput = { result: dummyRequest, error: null };
    const newRequest = new requestModel_1.RequestSchema(request);
    return newRequest.save().then((savedRequest) => {
        requestOutput.result = savedRequest.toObject();
        return requestOutput;
    }).catch((err) => {
        requestOutput.error = err;
        return requestOutput;
    });
}
exports.default = { createRequest };
//# sourceMappingURL=requestService.js.map