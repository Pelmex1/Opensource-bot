"use strict";
require('dotenv').config({path: './.env'})

 const
    { GatewayIntentBits, Client, Constants, Component } = require('discord.js'),
    fs = require('fs')
    //{ createClient } = require('@supabase/supabase-js'),
  
    const bot = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMembers,
        ],
        ws: { 
            properties: {
                    $os: process.platform,
                    $browser: "Discord",
                    $device: "discord Android" 
                }
            }
    });
    
const commands = {};
module.exports = {bot: bot};
if (true) {   
    require('./commands/init.js');
}
const interactionTypes = [
    'ping', 'command',
    'component', 'autocomplete',
    'modal'
];
const selectMenus = {}
const processTime = Date.now();
bot.on('ready', async ()=>{

    await bot.user.setPresence({ activities: [{ name: process.env.status, type: 5 }]});
    const runtime = Date.now() - processTime;
    console.log(`${bot.user.username} запустился за ${runtime}ms`)
    
        fs.readdirSync('./commands')
        .filter(file=>file!='init.js')
        .forEach(file=>commands[file.replace('.js', '')] = require('./commands/'+file).execute);
});
bot.on('interactionCreate', (inter)=>{
if(inter.isCommand()){
    commands[inter.commandName](inter)
}
else {
    //require('./additions/'+inter.customId.split(' ')[1]).execute(inter)
    require('./additions/'+ inter.customId).execute(inter)
}
});
bot.login(process.env.token)