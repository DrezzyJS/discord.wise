const WebSocket = require("ws");
const Variables = require("../utils/Exports.js");

class WebSocketManager {
  constructor(_client) {
    //Client

    this.client = _client;
  }

  connect(token) {
    //Client
    let client = this.client;

    //Socket

    let socket = new WebSocket(Variables.gateway_url);

    //Receiving Payload

    function receiveMessage(message){
      
    }
    socket.on("message", function(message) {
      //Settings

      this.payload = JSON.parse(message);
      this.d = this.payload.d;
      this.event = this.payload.t;
      this.s = this.payload.s;
      this.op = this.payload.op;

      //Idenfity

      this._identify = {
        op: 2,
        d: {
          token: token,
          properties: {
            $os: "linux",
            $browser: "discord.wise",
            $device: "discord.wise"
          }
        }
      };

      if (this.op === 10) {
        socket.send(JSON.stringify(this._identify));
      }
      // Conection

      this.connection = {
        op: 1,
        d: null
      };

      if (this.op === 11) {
        setInterval(() => {
          socket.send(JSON.stringify(this._identify));
        }, 41250);
      }

      //Events

      if (this.event && Variables.events.includes(this.event)) {
        //Emiting Events
        this._event = require(`../events/${this.event}.js`);
        this._event.execute(this.payload, client);
      }
    });
  }
}

module.exports = WebSocketManager;
