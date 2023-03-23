const {Schema, model} = require ('mongoose')
const ProductSchema=new Schema({
    IdentidadSecreta:{type:String, required:true},
    años:{type:String, required:true},
    Poderes:{type:String, required:true}
},{
timestamps:true,
versionKey:false
})
module.exports = model('producto', ProductSchema)