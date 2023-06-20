const { SlashCommandBuilder } = require("discord.js");

//conexão com o banco de dados
const getConnection = require('../../database');
const conn = getConnection();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("escutar")
    .setDescription("Me envia tua historia mais maluca ai.")
    .addStringOption((option) =>
      option
        .setName("historia")
        .setDescription("Escreva sua história aqui")
        .setRequired(true)
    ),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command

    //Forma de pegar a opção...
    //const category = interaction.options.getString('historia');

    await interaction.reply(
      `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
    );
    
  },
};
