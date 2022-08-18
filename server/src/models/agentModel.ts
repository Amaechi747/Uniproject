import mongoose from 'mongoose';

const agentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contactAddress: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'client'
    },
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Properties',
        default: null
    }
},{timestamps: true});

export const Agent = mongoose.model('Agent', agentSchema);