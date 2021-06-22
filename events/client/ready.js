const config = require("../../config.json");
module.exports = async client => {

  console.log(`Bot: ${client.user.tag}\nChannels: ${client.channels.cache.size}\nServers: ${client.guilds.cache.size}\nUsers: ${client.users.cache.size}`);



  let statuses = [
    `XDDhelp | play.xddcraft.net`,
  ]

  setInterval(function () {
    let status = statuses[Math.floor(Math.random() * statuses.length)];

    client.user.setActivity(status, { type: 'PLAYING' })
  }, 10000)
}
