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
module.exports(bot:botInfo);
/*if (process.argv.includes('--refresh-slash')) { 
    require('.//.js');
}/* //На будущее
interactionTypes = [
    'ping', 'command',
    'component', 'autocomplete',
    'modal'
];
selectMenus = {};
processTime = Date.now();
bot.on('ready', async ()=>{
    await bot.user.setPresence({ activities: [{ name: JSON.parse(config.readFileSync('./config.json')).status, type: 5 }]});
    runtime = Date.now - ${processTime};
    console.log('bot.user.name запустился за ${runtime}ms');
path = './'
    try {
        if (inter.isCommand()) { path += 'commands/'; }
        if (inter.isAutocomplete()) { path += 'autocomplete/'; }
        path += inter.commandName + '/'
        try {
            sub = inter.options.getSubcommand()
            group = inter.options.getSubcommandGroup()
        }
        catch(a) { sub = null; group = null }
        if (inter.options && sub) {
            if (group) {
                path += group + '/'
            }
            path += sub
        }
        path = (path
            .replaceAll('-', '_')
            .replaceAll(' ', '_')
            .toLowerCase() + '.js')
            .replaceAll('/.js', '.js')
        console.log(path)
        path = require(path)
        path(inter, getLocalisation(data.language))
                .catch((err) => handleError(inter, err, getLocalisation(data.language)));
    } catch(err) { handleError(inter, err, getLocalisation(data.language)); }
});
bot.on("guildCreate", refreshGuild)

bot.login(process.env.token)
