const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');


//Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// //encrypting pass for saving in DB

UserSchema.pre('save', async function (next) {
    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
    next();
})

//Verify password
UserSchema.methods.isPasswordMatch = async function (enteredPassword) {
    return await bcryptjs.compare(enteredPassword, this.password);
}





const User = mongoose.model('User', UserSchema);
module.exports = User;