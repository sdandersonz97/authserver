const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')
//define our model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

//on save , encrypt password
//before save run this function
userSchema.pre('save',function(next){
    const user= this;

    //generate salt
    bcrypt.genSalt(10,function(err,salt){
        if(err){ return next(err); }
        //hash password
        bcrypt.hash(user.password,salt,null,function(err,hash){
            if(err){ return next(err); }
            //overwrite plain text password
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword,callback){
    bcrypt.compare(candidatePassword,this.password, function(err, isMatch){
        if(err) { return callback(err); }
        callback(null, isMatch);
    });
}
//create the model class
const model = mongoose.model('user', userSchema);

//export the model

module.exports = model;