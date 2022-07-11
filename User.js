const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    street: String,
    address: String,
})

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validator: function (v){
                return v>18;
            },
            message: (props) =>{
                return `${props.value} is below 18`;
            },
        }
    },
    email: {
        type: String,
        minLength: 10,
        //required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },
    hobbies: [String],
    address: addressSchema,
});

userSchema.methods.sayHi = function() {
    console.log(`Hi my name is ${this.name}`);
}

userSchema.statics.findByName = function (name){
    return this.find({name: new RegExp(name,"i")});
}

userSchema.query.byName = function(name){
    return this.where({name: new RegExp(name,"i")});
}

userSchema.virtual('namedEmail').get(function(){// creating a virtual property
    return `${this.name} <${this.email}> <${this.age}>`
})

userSchema.pre('save', function(next){
    console.log("Hii");
    this.updatedAt = Date.now();
    next();
    throw new Error("fail save");
})

userSchema.post('save', function(doc, next){
    doc.sayHi();
    next();
})
module.exports = mongoose.model("User", userSchema);

