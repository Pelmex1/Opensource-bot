const config = require('.config/config.json'),
    { IntentsBitField, Client } = require('discord.js'),
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
/*if (process.argv.includes('--refresh-slash')) { 
    require('.//.js');
} */ //На будущее
interactionTypes = [
    'ping', 'command',
    'component', 'autocomplete',
    'modal'
];
selectMenus = {};
processTime = Date.now();
bot.on('ready', async ()=>{
    await bot.user.setPresence({ activities: [{ name: JSON.parse(config.readFileSync('./config.json')).status, type: 5 }]});
    runtime = Date.now - processTime;
    console.log('bot.user.name запустился за ${runtime}ms');
});
bot.on("guildCreate", refreshGuild)

bot.login(JSON.parse(config.readFileSync('./config.json')).token)
