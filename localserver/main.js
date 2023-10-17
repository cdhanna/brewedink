var textEntry = document.getElementById('input');
var sendBtn = document.getElementById('sendBtn');

var ws = new WebSocket("ws://localhost:8090")
ws.onopen = function(data) {
  console.log('connected', data)
}
ws.onerror = function(err){
  console.log('error', err)
}
ws.onclose = function(data){
  console.log('closed', data, arguments)
}
ws.onmessage = function(msg){
  console.log('message', msg, arguments)
}


sendBtn.addEventListener('click', function(){

  console.log('clicked on button', textEntry.value)
  ws.send(textEntry.value);
});
