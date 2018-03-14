/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// import the discord.js module
const Discord = require('discord.js');


// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  console.log('I am ready!');
});

// create an event listener for messages
bot.on('message', message => {
  // if the message is "ping",
  if (message.content === 'pong') {
    // send "pong" to the same channel.
    message.channel.sendMessage('ping');
  }
});

// log our bot in
client.login(process.env.BOT_TOKEN);
