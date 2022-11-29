const { SlashCommandBuilder, ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('label-messagge')
		.setDescription('Provides information about the user.'),
	async execute(inter) {
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
                )

        inter.showModal(modal);
    },
};
