const express = require('express');
const opusscript = require('opusscript');
const ffmpeg = require('ffmpeg');
const sodiumjs = require('sodiumjs');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('fuckoff world'));

app.listen(port, () => console.log(`https://bot1.aidenfavish.repl.co${port}`));

// ================= START BOT CODE ===================
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
var x = 1

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('mute')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        
          muted = user.id
          console.log(muted)
          member
          .send('you have been muted')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply("you muted a person")
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to help the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this channel!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to help!");
    }
  }
});

client.on('message', message => {
  user = message.mentions.users.first()
  if (message.content == 'so sorry') {
    user.send("return link\nhttps://discord.gg/T5E2dCf")
    print(user)
  }
});



client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'fwaygfwryfg') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('The Birth')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription('@everyone please gather around and whitness the great birth of baby Satan');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
    message.channel.send(`Baby Satan is being born because no one has killed him yet his counter will reset try to kill him faster`);
    
  }
});

client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'I hate you') {
    

    // Send "pong" to the same channel
    message.channel.send('What? Why?');
    message.channel.send('I did not do anything');
    message.channel.send('you big bully');
    message.channel.send('YOUR A JERK AND A BIG BULLY!'); 
    message.channel.send('your just jelous of my face');
    message.channel.send('Look at me now I am crying'); 
  }
  if (message.content === "I hate you".toLowerCase()){
    message.channel.send('What? Why?');
    message.channel.send('I did not do anything');
    message.channel.send('you big bully');
    message.channel.send('YOUR A JERK AND A BIG BULLY!'); 
    message.channel.send('your just jelous of my face');
    message.channel.send('Look at me now I am crying');
  }
});



client.on('message', message => {
  // If the message is "ping"
  if (message.author == muted) {
    console.log("done")

  }
});



client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', message => {
  // If the message is '!rip'
  if (message.content === 'Hey Timmy') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://i.pinimg.com/originals/df/9c/79/df9c79b39620ee3ecec0587f25f41532.jpg');
    // Send the attachment in the message channel with a content
    message.channel.send(`I got a suprise for you...`, attachment);
  }
});


// You really don't want your token here since your repl's code
// is publically available. We'll take advantage of a Repl.it 
// feature to hide the token we got earlier. 
client.login(process.env.DISCORD_TOKEN);



/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */



