const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('escutar')
		.setDescription('Me envia tua historia mais maluca ai.')
		.addStringOption(option =>
			option.setName('historia')
				.setDescription('Escreva sua história aqui')
				.setRequired(true)),
	async execute(interaction) {
		
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
        
        //Forma de pegar a opção...
        //const category = interaction.options.getString('category');
		await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
	},
};