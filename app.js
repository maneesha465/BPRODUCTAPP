require('dotenv').config();
const express = require('express')
const app = new express();

const morgan =require('morgan')

require('./db')
const cors = require('cors')

const PORT = process.env.PORT || 4528
const routes =require('./routes')

app.use(cors({
    origin:'*'
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use('/',routes)
//modular structure



app.listen(PORT, () =>{
    console.log('Serving on port:' +PORT);
})