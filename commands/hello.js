const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Greets Hello!'),
	async execute(interaction) {
		await interaction.reply('Hello!');
	},
};