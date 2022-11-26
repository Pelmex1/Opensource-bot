const { SlashCommandBuilder, ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('owo')
		.setDescription('Provides information about the user.'),
	async execute(inter) {
        const modal = new ModalBuilder()
                .setCustomId('verify')
                .setTitle('Вереф')
                .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                    .setCustomId('nickname')
                    .setLabel("Твой ник")
                    .setPlaceholder("xXx_cool_vip_player_xXx")
                    .setMaxLength(15)
                    .setStyle(TextInputStyle.Short))
                )
                .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                    .setCustomId('name_age')
                    .setLabel("Твоё имя и возраст")
                    .setPlaceholder("Эдик, 12")
                    .setMaxLength(10)
                    .setStyle(TextInputStyle.Short))
                )
                .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                    .setCustomId('hacks')
                    .setLabel("Отношение к читам")
                    .setPlaceholder("Мне нравится портить жизнь другим")
                    .setMaxLength(10)
                    .setStyle(TextInputStyle.Short))
                )
                .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                    .setCustomId('found')
                    .setLabel("Как ты нашёл этот сервер")
                    .setPlaceholder("Брат моего троюродного дяди по маминой линии рассказал")
                    .setMaxLength(100)
                    .setStyle(TextInputStyle.Short))
                )
                .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                    .setCustomId('target')
                    .setLabel("Цель на проекте")
                    .setPlaceholder("Завести кучу котиков и кормить их")
                    .setMaxLength(100)
                    .setStyle(TextInputStyle.Short))
                )

        inter.showModal(modal);
    },
};