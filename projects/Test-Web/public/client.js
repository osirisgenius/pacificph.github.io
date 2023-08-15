var socket = io();

var form = document.getElementById('form');
var input = document.getElementById('input');
var usertype = document.getElementById('')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Submitted")
    if (input.value) {
        socket.emit('send-chat-message', input.value);
        input.value = '';
    }
});

socket.on('send-chat-message', function (msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
