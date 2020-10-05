const WebSocketManager = require("../websocket/WebSocketManager.js");
const EventEmitter = require("events");
const Message = require("../functions/Message.js");
class Client extends EventEmitter {
   constructor({ token: _token }) {
    super();
    
    this.message = new Message();
    this.socket = new WebSocketManager(this);
    this.socket.connect(_token);
    this.token = _token;
  
}
  sendMessage(message, channelID) {
    this.message.create(message, channelID, this.token);
  }
}

module.exports = Client;
