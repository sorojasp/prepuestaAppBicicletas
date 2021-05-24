

const exp = require('express')
const bodyParser = require("body-parser")

const app = exp()
app.use((req,res,next)=>{

    // req es todo lo que el navegador esta enviando. 
    // res es todo lo que se le devuelve al navegador. 
    console.log(`urlRequerida:${req.url} - métodoRequerido:${req.method}`);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    //se incorporan las cabeceras cors en las respuestas de http 
    
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.post("/", function(req, res) {

    //const result = int(req.body.num1) + int(rereq.body.num2)

    console.log(req.body)
    
     
    res.send(req.body);
  });

app.set('port',3000)

app.listen(app.get('port'),(()=>{console.log(`listening by port ${app.get('port')}`)}))

