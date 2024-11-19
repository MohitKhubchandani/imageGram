import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        minLength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 6,
        validate: {
            validator: function (emailValue) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
            },
            message: 'Invalid email format'
        },
        
    },
    password:{
        type: String,
        required: true,
        minLength: 5
    }
}, {timestamps : true});

userSchema.pre("save", async function modifyPassword(next) {
    if (!this.isModified('password')) return next(); // Skip if password hasn't changed
    
    try {
        const SALT = await bcrypt.genSalt(9);
        this.password = await bcrypt.hash(this.password, SALT);
        next();
    } catch (err) {
        next(err); // Pass error to next middleware
    }
});

const user = mongoose.model("User", userSchema); // User Connection


export default user;