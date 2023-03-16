const express = require ('express'); 
const app = express();//instancia
const morgan = require ('morgan'); //sacar las respuestas del server para que salgan en consola


//Configuraciones
app.set('port',3000)

//middlewares
app.use (morgan('dev'));
app.use(express.json());

//rutas
app.get('/',(req,res) =>(
    res.send('si funciona')
));

app.get('/HOME',(req,res) =>(
    res.send('Estas en el HOME')
));

//Empezando el servidor
app.listen(app.get('port'));
//app.listen(3000);//puerto
console.log("mi primer servidor");