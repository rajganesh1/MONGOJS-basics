const mongoose = require("mongoose");
const User = require("./User");
require("dotenv/config");

mongoose.connect(process.env.DB_CONNECTION_STRING,
    ()=>{
        console.log("Connected to DataBase"); 
    }
);

run();
async function run(){
    try{
        // const user = await User.create({
        //     name: "Raj Ganesh R", 
        //     age: 21,
        //     email: "rajganesh@gmail.com",
        //     hobbies: ["pubg", "cricket", "swimming"],
        //     address: {
        //         street: "ssks",
        //         city: "Vellore",
        //     }
        // });
        // user.name="Raj";
        // await user.save();
        // console.log(user);
        
        //const user = await User.findById("62b5a3358ded4fba50794b79");

        //const user = await User.findOne({name: "Raj"});

        //const user = await User.find().byName("Raj");//query

        //const user = await User.findByName({name: "Raj"});//statics

        //const user = await User.findOne({name: "Raj", email: "rajganesh@gmail.com"});

        //const user = await User.exists({name: "Raj"});

        //const user = await User.deleteOne({name: "Raj"});

        //const user = await User.deleteMany({name: "Raj Ganesh"});

        //const user = await User.where("name").equals("Raj");

        //const user = await User.find({$and: [{age: {$gt: 20}},{name: "Raj"}]}).populate("bestFriend").limit(2);
        // user[0].bestFriend = "62b59db393d33f8a5c9eb60e";
        // await user[0].save();

        //const user = await User.where("age").gt("12").where("name").equals("Raj").limit(2);
        const user = await User.findOne({name: "Raj", email: "rajganesh@gmail.com"});
        //console.log(user);
        await user.save();
        console.log(user);
        // user.sayHi();
        //console.log(user.namedEmail);//op = Raj <rajganesh@gmail.com>
    }catch(e){
        console.log(e.message);
    }
}