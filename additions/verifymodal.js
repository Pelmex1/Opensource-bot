const {EmbedBuilder, ButtonBuilder, ActionRowBuilder} = require('discord.js');
"use strict";
module.exports = {
    async execute(inter) {
        const embedmodaluser = new EmbedBuilder()
        .setTitle(`Заявка пользователя ${inter.user.username}`)
        .setDescription(`**Ник**:` + '\n'  + '\n' + inter.fields.components[0].components[0].value + '\n' + '\n' + `**Имя и возраст:**` + '\n' + '\n' + inter.fields.components[1].components[0].value + '\n' +
        '\n' + `**Отношение к читам:**` + '\n' +  '\n' + inter.fields.components[2].components[0].value + '\n' + '\n' + `**Как ты нашёл этот сервер:**` + '\n' +  
         '\n' + inter.fields.components[3].components[0].value + '\n' + '\n' + `**Цель на проекте:**` + '\n' +  '\n' + inter.fields.components[4].components[0].value)
          .setColor('c9e910')
          .setThumbnail(inter.guild.iconURL());
        const buttons = new ActionRowBuilder()
        .addComponents(
        new ButtonBuilder()
        .setStyle('Success')
        .setLabel('Принять')
        .setEmoji({name:'✅'})
        .setCustomId('modal-button-accept'),
        new ButtonBuilder()
        .setLabel('Отклонить')
        .setCustomId('modal-button-denied')
        .setEmoji({name:'❌'})
        .setStyle('Danger'));
        inter.reply({embeds:[embedmodaluser], components:[buttons]})
    }
}