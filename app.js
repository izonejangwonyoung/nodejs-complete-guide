const http = require('http')
const express = require('express')
const app = express();
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const bodyParser = require('body-parser')
const path = require("path");

app.use(bodyParser.urlencoded({extends: false}));////클라이언트로부터 받은 http 요청 메시지 형식에서 body 데이터를 해석하기 위해서 처리가 필요함

app.use('/admin',adminRoutes)
app.use(shopRoutes)


app.use((req, res, next) => {
    const presentPage = (req.url).slice(1)
    console.log(presentPage)
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(16500);