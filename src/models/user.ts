import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

export default mongoose.models.Users || mongoose.model("Users", schema)


//http://10.10.1.7:8080/phpMyAdmin/