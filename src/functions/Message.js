const axios = require("axios");

class Message {
  create(data, channelID, token) {
    
    axios({
      method: "POST",
      url: `https://discord.com/api/v6/channels/${channelID}/messages`,
      headers: {
        Authorization: `Bot ${token}`,
        "Content-Type": "application/json"
      },
      data: {
        content: data,
        tts: false
      },
    })
  }
}

module.exports = Message;
