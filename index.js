const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");

const client = new Client({
  puppeteer: {
    executablePath: '/usr/bin/google-chrome-stable',
    headless: true
  },
  authStrategy: new LocalAuth()
});

client.initialize();
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});
client.on("authenticated", () => {
  console.log("Auth Completed!");
});
client.on("ready", () => {
  console.log("Bot is ready!");
});



const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

client.on("message", async (message) => {
  var m_link = "https://api.amosayomide05.cf/gpt/?question=" + msg_old + "&string_id=" + msg_from;
      request(m_link, options, (error, res, body) => {

                if (!error && res.statusCode == 200) {
                    
                    
                    var response = body.response;

                        let responseStr = response.trim();
                    ctx.reply();

                   
                    
                }
                else{
                    ctx.reply("Chatgpt is down on my server");
                }
            });

});
const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");

const client = new Client({
  puppeteer: {
    executablePath: '/usr/bin/google-chrome-stable',
    headless: true
  },
  authStrategy: new LocalAuth()
});

client.initialize();

client.on("qr", (qr) => {
  const qrImage = qrcode.generate(qr, { small: true });
  const imgElement = document.createElement("img");
  imgElement.src = qrImage;
  document.body.appendChild(imgElement);
});

client.on("authenticated", () => {
  console.log("Auth Completed!");
});

client.on("ready", () => {
  console.log("Bot is ready!");
});

client.on("message", async (message) => {
  // handle incoming messages
});
