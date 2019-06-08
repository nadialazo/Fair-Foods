const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
let myOrders = [];
let message = '';



app.get('/',(req, res) => {
    res.render('fairFoods.ejs', {reservationDisplay: message });
    });

    app.use(express.static('public'));
    app.use(express.static)

app.post('/reservations', (req, res) => {
    let reservation = {
        name:req.body.firstName, 
        bags: req.body.bags
    }
     myOrders.push(reservation);
     console.log(myOrders);
        message = `Order accepted: ${reservation.name}, ${reservation.bags} bags. Thanks for your order!`;
     res.redirect('/');
 });

 //All orders 

app.get('/allOrders',(req, res) => {
    res.render('orders.ejs', {myOrders: myOrders});
    });


 app.listen(port, function(){
    console.log(`Fair Foods is listening on port ${3000}!`);
});







