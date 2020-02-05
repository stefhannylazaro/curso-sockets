var socket=io.connect('http://10.0.2.15:8080',{forceNew:true});
socket.on('messages', function(data){
    console.log("mensajes");
    console.log(data);
    render(data);
});

function render(data){
    var html=data.map(function(item,index){
        return(`
            <div class="message">
                <strong>${item.nickname} dice:</strong>
                <p>${item.text}</p>
            </div>
        `);
    }).join('');
    document.getElementById('block-messages-in').innerHTML=html;
}

function sendMessage(e){
    //capturar mensaje
    var msg = {
        nickname : document.querySelector("#nickname").value,
        text: document.querySelector("#text").value
    }
    document.querySelector("#nickname").style.display="none";
    document.querySelector("#text").value = "";
    //enviar mensaje al servidor
    socket.emit('add-message',msg);
    return false;
}
