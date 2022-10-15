const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const users = [
    { id:'test01', pw:'12345'},
    { id:'test02', pw:'12345'},
    { id:'test03', pw:'12345'},
    { id:'test04', pw:'12345'},
    { id:'test05', pw:'12345'}
]

const cors = require('cors');
app.use(cors());

const path = require('path');


app.use( express.json());
app.use( express.urlencoded({extended:false}));
// app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, 'views' + '/index.html' ));
})

app.get('/index', (req, res)=> {
    res.sendFile(path.join(__dirname, 'views' + '/index.html' ));
})

app.get('/select', (req, res)=> {
    res.sendFile(path.join(__dirname, 'views' + '/select.html' ));
})

app.get('/sub', (req, res)=>{ 
    res.sendFile( path.join( __dirname, 'views', '/sub.html' ))
})

app.get('/login', (req, res)=>{ 
    res.sendFile( path.join( __dirname, 'views', '/login.html' ))
})

app.post('/login', (req, res)=>{ 
    const user = users.find( user => user.id === req.body.id );
    console.log('test', req.body.id);
    if( user ) 
        res.send( {success : true, message: `${user.id}님 안녕하세요.`});
    else   
        res.send( {success : false, message: `id 또는 pw를 확인하세요.`});
})

app.get('/indexEng', (req, res)=>{ 
    res.sendFile( path.join( __dirname, 'views', '/indexEng.html' ))
})

app.get('/*', (req, res)=> {
    console.log(req.url);
    res.status(404).sendFile(path.join(__dirname, 'views', '/404.html'));
})
 
app.listen( PORT , () => {
    console.log(`server runing on PORT ${PORT}`);
})