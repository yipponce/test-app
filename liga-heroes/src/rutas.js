app.get('/',(req,res) =>(
    res.send('si funciona')
));


///instanciar

const { Router } = require ('express');
const router = Router();

const heroe = require('./data.json');
console.log(heroe);


router.get('/', (req,res) =>{
    res.json(heroe);
});


router.get('/:id', (req,res) =>{
    const {id}= req.params;
    juegos.forEach(heroe=> {
    if(heroe.id == id){
        res.json(heroe);
        //console.log(heroe.tittle);
    }
    });

    console.log(id);
})

const{title, verió, genre}=req.body;
if(title && version && genre){
    const id = heroe.length + 1;
    const nuevoheroe = {...req.body, id};
    juegos.push(nuevoheroe);
    res.status(200).json(heroe);

}else{res.status(500).json({error:'no data'})}

module.exports = router;
 


