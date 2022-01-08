const socket = io();

socket.on('wait', () => {
  new Alert('Wait...');
});

socket.on('added', code => {
  new Alert(`Success! Your Link <a href="https://URL-Shortener.girlorboy.repl.co/${code}">https://URL-Shortener.girlorboy.repl.co/${code}</a>`);
});


document.getElementById('url').addEventListener('keydown', event => {
  if(event.keyCode == 13) {
    event.preventDefault();
    sendURL();
  }
});

function sendURL() {
  let value = document.getElementById('url').value;
  if(!value.length) {
    return new Alert('Your URL can\'t be blank!');
  }
  if(!/^(https?:\/\/)?\w+\.\w/.test(value)) {
    return new Alert('That URL isn\'t valid!');
  }
  socket.emit('shorten', value);
}

