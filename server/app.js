const express = require('express')
const http = require('http')
const Server = require("socket.io").Server
const app = express()
const path = require('path')

const _dirname = path.dirname("")
const buildPath = path.join(_dirname , "../client/build");

app.use(express.static(buildPath))
app.get("/*", function(req, res){

    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function(err){
            if(err){
                res.status.apply(500).send(err); 
            }
        }
    )
})


const server  = http.createServer(app)
const io = new Server(server, {
    cors:{
        origin:"*"
    }
})


io.on("connection", (socket) =>{
    console.log('we are connect')

    socket.on('disconnect', () => {
        console.log('disconnected')
    })
})
server.listen(5001, () => console.log('Listening to port 5001'))