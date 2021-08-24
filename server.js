const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const enforce = require('express-sslify');

if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(enforce.HTTPS({ trustProtoHeader: true }));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname,'client/build','index.html'));
    })
}

app.get('/service-worker.js',(req,res) => {
    res.sendFile(path.resolve(__dirname,'..','build','service-worker.js'));
})

app.listen(port,error => {
    if(error) throw error;
    console.log(`Server up and running at port ${port}`);
});