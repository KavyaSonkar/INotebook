const express = require('express')
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost:27017/kavyadb');
const UserSchema = new mongoose.Schema({ name: String, age: Number });
const UserModel = mongoose.model("inotebook", UserSchema);
app.get('/getData', (req, res) => {
    UserModel.find({}).then(function (inotebook) { res.json(inotebook) });
});
app.get('/getName', (req, res) => {
    res.send('Kavya');
});
app.listen(3000, () => { console.log("server is running") });