const express = require('express');
const app = express();
var bP = require('body-parser');
app.use(bP.json())


const middleware = {
   authReq : (req, res, next) => {
    console.log("api'ye bir istek geldi.")
    next()
   }
}


app.post('*', (req, res, next) => {
    console.log("post için bir istek gönderildi.")
    next()
})


app.use(middleware.authReq);


app.listen(3000, ()  => {
    console.log('Uygulama calistirilmasi basarili');
})


app.get('/',(req, res) => {
    res.json("merhaba, bir get isteği attınız.");
});


app.put('/hello', (req, res) => {
    res.send("merhaba, put isteği attınız.")
})


app.post('/hello', (req, res) => {
    res.status(201).send("merhaba, Bir post isteği attınız.");
})


app.delete('/hello', (req, res) => {
    res.status(202).send("Merhaba, delete isteği attınız.")
})


