const express = require ('express')
const Connection = require('./database/db.js')
const app = express();
const route = require('./routes/route')
const bodyparser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000
const path = require('path')

app.use(cors())
app.use(bodyparser.json({extended:true}))
app.use(bodyparser.urlencoded({extended:true}))
app.use('/movies', route)
// app.use(express.static(path.join(__dirname, "client/build/")));
app.use(express.static(path.resolve(__dirname, "./client/build")));

/* if(process.env.NODE_ENV == 'production'){
    // app.use(express.static('public'))
    const path = require('path')
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
} */



app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  });


app.listen(port, ()=>{
    console.log('server is running at port no ' + port)
});
Connection()

