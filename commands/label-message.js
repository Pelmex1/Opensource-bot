const { SlashCommandBuilder, ActionRowBuilder, EmbedBuilder, ButtonBuilder} = require('discord.js');
"use strict";
module.exports = { 
    data: new SlashCommandBuilder()
		.setName('label-message')
		.setDescription('Provides information about the user.'),
	async execute(inter) {
		const embedlabel = new EmbedBuilder()
            .setTitle('Заполните анкету')
            .setDescription('Нажмите на кнопку, чтобы заполнить анкету и попасть на сервер')
            .setThumbnail(inter.guild.iconURL())
            .setColor('15f129')
        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel('Заполнить анкету')
            .setStyle('Success')
            .setEmoji({name:'🌠'})
            .setCustomId('verify'));
    inter.reply({content:'Сообщение было отправлено', ephemeral: true})
    inter.channel.send({embeds:[embedlabel],components:[button]})
    }
}