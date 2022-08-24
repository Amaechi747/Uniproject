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
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
        // select: false
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    passwordConfirm: {
        type: String
    
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

  //hash password before saving to database
userSchema.pre('save', async function(next){
    if(this.password !== this.passwordConfirm) throw new Error ('Password and Password confirm not same')
        this.password = await bcrypt.hash(this.password, 10);
        this.passwordConfirm = undefined;
        next()
    
})

//if its not a new user and password is modified
userSchema.pre('save', function(next){
    if(!this.isModified('password') || this.isNew) return next();
    this.passwordChangedAt = new Date(Date.now() - 1000);
    next()
})

//check if user status is active before returning user
userSchema.pre('find', function(next){
    this.find({active: {$ne: false}});
    next()
})

//check if user status is active before returning user
userSchema.pre('findOne', function(next){
    this.find({active: {$ne: false}});
    next()
})

//check if user status is active before returning user
userSchema.pre('findById', function(next){
    this.find({active: {$ne: false}});
    next()
})

export const User = mongoose.model('User', userSchema);