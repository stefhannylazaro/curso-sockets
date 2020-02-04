var socket=io.connect('http://192.168.1.5:8080',{forceNew:true});
socket.on('messages', function(data){
    console.log(data);
    render(data);
});

function render(data){
    var html='';
    data.map(function(item,index){
        html=`${html}
            <div class="message">
                <strong>${item.nickname} dice:</strong>
                <p>${item.text}</p>
            </div>
        `;
    });
    document.getElementById('block-messages').innerHTML=html;
}
