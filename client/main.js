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
