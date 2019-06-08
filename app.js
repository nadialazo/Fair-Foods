const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
let myOrders = [];
let message = '';

//====GREAT job with the message! Very clever use of a global variable. If you would like to look at a more advanced use and how to avoid using the global scope, see http://expressjs.com/en/api.html#res.locals

app.get('/', (req, res) => {
    res.render('fairFoods.ejs', { reservationDisplay: message });
});

app.use(express.static('public')); //====STATIC files would need to be placed inside of this folder
// app.use(express.static) //====NEEDS A FOLDER

app.post('/reservations', (req, res) => {
    let reservation = {
        name: req.body.firstName,
        bags: req.body.bags
    }
    myOrders.push(reservation);
    console.log(myOrders);
    message = `Order accepted: ${reservation.name}, ${reservation.bags} bags. Thanks for your order!`;
    res.redirect('/');
});

//All orders 

app.get('/allOrders', (req, res) => { 
    res.render('orders.ejs', { myOrders: myOrders });
});


app.listen(port, function () {
    // console.log(`Fair Foods is listening on port ${3000}!`);
    
    //====THE IDEA of using string templates is so that you can use variables, not primitives, inside of the string, as it is shown below
    console.log(`Fair Foods is listening on port ${port}!`);
});







