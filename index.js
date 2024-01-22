const express = require("express");

const app = express();

app.use(express.json());

app.listen('3000', ()=>{
    console.log('Running');
})

app.post('/zenvia', (req, res)=> {
    console.log(req.body);
    console.log("");
    console.log(JSON.stringify(req.header));
    console.log(JSON.stringify(req.body));

    res.send('Ok');
})
app.post('/zenvia/message', (req, res)=> {
    console.log(req.body);
    console.log("");
    console.log(JSON.stringify(req.header));
    console.log(JSON.stringify(req.body));

    res.send('Ok');
})
app.post('/zenvia/message_status', (req, res)=> {
    console.log(req.body);
    console.log("");
    console.log(JSON.stringify(req.header));
    console.log(JSON.stringify(req.body));

    res.send('Ok');
})
app.get('/zenvia/chat', (req, res)=>{
    res.send('<script src="https://static.zenvia.com/embed/js/zenvia-chat.min.js"></script><script>var chat = new ZenviaChat("ef29174e637bdc6d6ef9286acb4c76bd").embedded("button").build();</script>');
})