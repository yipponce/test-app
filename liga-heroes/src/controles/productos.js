const productosCtrl = {}

//const productos = require('../productos.js')
const producto = require('../modelo/productos.js')
productosCtrl.getProducts = async (req, res) =>{
    const productos = await producto.find()
    res.json(productos);}


productosCtrl.createProduct = async (req, res) =>{
    const NewProduct = producto(req.body);
    await NewProduct.save();
    res.send({message: 'producto creado'})

}
productosCtrl.deleteProduct = async (req, res) =>{
    const productos = await producto.findIdAndDelete();
        res.send(producto)
    

}

module.exports = productosCtrl;