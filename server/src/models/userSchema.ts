import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'



const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: validator.isEmail
    },
    imageUrl: String,
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
        select: false
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    passwordConfirm: {
        type: String,
    
    },
    createdAt: Date,
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
}, 
{
    toObject: {virtuals: true},
    toJSON: {virtuals: true }
  })

userSchema.pre('save', async function(next){
    if(this.password === this.passwordConfirm){
        this.password = await bcrypt.hash(this.password, 10);
        this.passwordConfirm = undefined;
        next()
    }
})

userSchema.pre('save', function(next){
    if(!this.isModified('password') || this.isNew) return next();
    this.passwordChangedAt = new Date(Date.now() - 1000);
    next()
})

userSchema.pre('find', function(next){
    this.find({active: {$ne: false}});
    next()
})

userSchema.pre('findOne', function(next){
    this.find({active: {$ne: false}});
    next()
})

userSchema.pre('findById', function(next){
    this.find({active: {$ne: false}});
    next()
})

export const correctPasswordCheck = async function(password: string, userPassword: string){
    return await bcrypt.compare(password, userPassword)
}

export const findUserByEmail = async(email: string) => {
    return await User.findOne({email});
}

export const User = mongoose.model('User', userSchema);