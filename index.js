const http = require("http");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
const app = require('./app');
const express = require("express");

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.use("*", (req,res) => {
                res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const port = process.env.port || 5000;  
const server = http.createServer(app);
server.listen(port);


   