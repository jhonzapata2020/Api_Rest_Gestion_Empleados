
const mongoose = require('mongoose');
const {Schema} = mongoose;

const UsuarioSchema = new Schema({
    name: {type:String, require:true},
    position: {type:String, require:true},
    office: {type:String, require:true},
    salary: {type:Number, require:true},
});
module.exports = mongoose.model('Usuario', UsuarioSchema);
