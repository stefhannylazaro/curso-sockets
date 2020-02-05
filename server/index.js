console.log("hola");
var express= require('express');
var app=express();

var server= require('http').Server(app);
var io= require('socket.io')(server);

app.use(express.static('client'));

//configurar ruta
app.get('/',function(req,res){
    res.send("Hola mundo")
});

var messages=[{
    id:1,
    text:"Bienvenido al chat",
    nickname:"luna99"
},
{
    id:2,
    text:"¿Cual es tu consulta? gustosos te atenderemos",
    nickname:"luna99"
},
{
    id:3,
    text:"¿Cual es tu consulta? gustosos te atenderemos",
    nickname:"luna99"
},
{
    id:4,
    text:"¿Cual es tu consulta? gustosos te atenderemos",
    nickname:"luna99"
}
];

//abrir una conexion al socket
io.on('connection',function(socket){
    console.log("Cliente con IP:"+socket.handshake.address+"se ha conectado");
    socket.emit('messages',messages);
    //recibir mensaje de cliente
    socket.on('add-message',function(data){
        messages.push(data);//add mensaje
        io.sockets.emit('messages',messages);//enviar mensaje a todos

    })
})
//crear un servidor
server.listen(8080,function(){
    console.log("server corriendooo en http://localhost:8080")
});
