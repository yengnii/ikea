const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

const path = require('path');
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'views') + 'index.html' );
})

app.get('/index', (req, res)=> {
    res.sendFile(path.join(__dirname, 'views') + 'index.html' );
})

app.get('/sub', (req, res)=>{ 
    res.sendFile( path.join( __dirname, 'views', 'sub.html' ))
})

app.get('/indexEng', (req, res)=>{ 
    res.sendFile( path.join( __dirname, 'views', 'indexEng.html' ))
})

app.get('/*', (req, res)=> {
    console.log(req.url);
    res.status(404).sendFile(path.join(__dirname, 'views'), '404.html');
})
app.listen( PORT , () => {
    console.log(`server runing on PORT ${PORT}`);
})