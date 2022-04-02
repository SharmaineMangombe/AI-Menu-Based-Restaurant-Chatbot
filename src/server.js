require("dotenv").config({path: '../dev.env'});
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";

let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static('./public'))
app.use('/css',express.static(__dirname + './public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))


configViewEngine(app)

initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('App is running at the port ${port}');
});