const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('Historia')
		.setDescription('Provides information about the user.')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input to echo back'))
                .setRequired(true),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
        
        //Forma de pegar a opção...
        //const category = interaction.options.getString('category');
		await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
	},
};