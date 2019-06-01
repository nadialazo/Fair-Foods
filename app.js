const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function(){
    console.log(`Fair Foods is listening on port ${3000}!`);
});

app.get('/',(req, res) => {
    res.render('fairFoods.ejs', {'reservations': myArray});
    });

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

 app.post('/reservations', (req, res) => {
     myArray.push(req.body.firstName);
     res.redirect('/');
 });

 let myArray = [];





