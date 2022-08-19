import {RequestSchema} from '../models/requestModel';
import {Document} from 'mongoose';

const dummyRequest: requestReg = {
    _id: '',
    name: '',
    email: '',
    date: new Date(),
    time: '',
    phoneNumber: ''
}

function createRequest(request: requestReg):Promise<output<requestReg, unknown>>{
    let requestOutput: output<requestReg, unknown> = {result: dummyRequest, error: null};
    const newRequest = new RequestSchema(request);
    return newRequest.save().then((savedRequest: Document<any, requestReg>) => {
        requestOutput.result = savedRequest.toObject();
        return requestOutput;
    }).catch((err:any) => {
        requestOutput.error = err;
        return requestOutput;
    });
}

export default {createRequest}