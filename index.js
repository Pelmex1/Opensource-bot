require('dotenv').config({path: './.env'})
 const
    { IntentsBitField, Client, Constants } = require('discord.js'),
    fs = require('fs'),
    { createClient } = require('@supabase/supabase-js'),

    botInfo = new Client({
        intents: new IntentsBitField(32767),
        ws: { 
            properties: {
                    $os: process.platform,
                    $browser: "Discord",
                    $device: "discord.js" 
                }
            }
    });
module.exports = {bot: botInfo};
if (process.argv.includes('--refresh-slash')) { 
    require('.//.js');
};
interactionTypes = [
    'ping', 'command',
    'component', 'autocomplete',
    'modal'
];
selectMenus = {};
processTime = Date.now();
bot.on('ready', async ()=>{
    await bot.user.setPresence({ activities: [{ name: process.env.status, type: 5 }]});
    runtime = Date.now - processTime;
    console.log(`${bot.user.name} запустился за ${runtime}ms`);
    fs
        .readdirSync('./commands')
        .filter(file=>file!='init.js')
        .forEach(file=>commands[file.replace('.js', '')] = require('./commands/'+file).execute)
});
bot.on('interactionCreate', inter=>{
    commands[inter.commandName](inter)
});

bot.login(process.env.token);
