const { SlashCommandBuilder, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, EmbedBuilder, ButtonBuilder, ComponentType } = require('discord.js');
"use strict";
module.exports = { 
    data: new SlashCommandBuilder()
		.setName('label-message')
		.setDescription('Provides information about the user.'),
	async execute(inter) {
		const embed = new EmbedBuilder()
            .setTitle('sdkjkshjd')
            .setDescription('шиза228');
        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel('sasasas')
            .setStyle('Primary')
            .setCustomId('verify'));
        const modal = new ModalBuilder()
            .setCustomId('verify')
            .setTitle('Верефикация')
            .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId('nickname')
                .setLabel("Твой ник")
                .setPlaceholder("Stive")
                .setMaxLength(15)
                .setStyle(TextInputStyle.Short))
            )
            .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId('name_age')
                .setLabel("Твоё имя и возраст")
                .setPlaceholder("Имя, возраст")
                .setMaxLength(10)
                .setStyle(TextInputStyle.Short))
            )
            .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId('hacks')
                .setLabel("Отношение к читам")
                .setMaxLength(10)
                .setStyle(TextInputStyle.Short))
            )
            .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId('found')
                .setLabel("Как ты нашёл этот сервер")
                .setMaxLength(100)
                .setStyle(TextInputStyle.Short))
            )
            .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId('target')
                .setLabel("Цель на проекте")
                .setMaxLength(100)
                .setStyle(TextInputStyle.Short))
            );
            
        const msg = await inter.reply({embeds: [embed], components: [button]});
        const collector = message.createMessageComponentCollector({ componentType: ComponentType.Button, time: 15000 });
        const collector = await msg.createMessageComponentCollector();
        collector.on('collect', i => { 
            if(i.customId == 'verify'){
                inter.reply('ddd')
             i.showModal(modal)
            }
        })

}}