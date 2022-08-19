import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    phoneNumber: { 
        type: String,
        required: true
    },
});

export const RequestSchema = mongoose.model('Request', requestSchema);