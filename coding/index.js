const express = require('express')
const app = express()
const cors = require('cors');
const port = 3001

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.get('/', (req, res) => res.send('root page'))
app.get('/endpoint.com/all_tracks',(req,res) =>{
let fs = require('fs');
let data;
fs.readFile('src/tracks.json','utf8',(err,data)=>{
    if(err) throw new Error('cannot determine');
    data = JSON.parse(data);
    res.send(data);
    })
}) ;

app.post('/endpoint.com/track',(req,res)=>{
    
    let user_id = Object.keys(req.body)[0]
    
    let fs = require('fs');
    
    fs.readFile('src/tracks.json','utf8',(err,data)=>{
        data = JSON.parse(data);
        if(Object.keys(data).includes(user_id)){
            res.send(user_id)
        }else{
            res.send("Target not found")
        }
      
    }) ;
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))