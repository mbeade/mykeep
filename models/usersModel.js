let mongoose = require('mongoose');
 

// Define user schema
let userSchema = new mongoose.Schema({
    email : String,
    first : String,
    last  : String,
});

// Add basic auth to the user schema
userSchema.plugin(require('basic-auth-mongoose'));
let User = mongoose.model('User', userSchema);

module.exports = User;