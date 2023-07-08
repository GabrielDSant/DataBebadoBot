const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SlashCommandBuilder,
} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("contar")
    .setDescription(
      "Vou puxar do meu banco uma história aleátoria para sua avaliação."
    ),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command

    //Forma de pegar a opção...
    //const category = interaction.options.getString('category') ?? 'No reason provided';

    // Montando botões
    const upVote = new ButtonBuilder()
      .setCustomId("Up")
      .setLabel("upVote")
      .setStyle(ButtonStyle.Primary)
      .setEmoji('⬆️');

    const downVote = new ButtonBuilder()
      .setCustomId("Down")
      .setLabel("downVote")
      .setStyle(ButtonStyle.Secondary)
      .setEmoji('⬇️');

    // Criando a linha com os botões
    const row = new ActionRowBuilder().addComponents(upVote, downVote);

    // Enviando os botões junto com o conteudo escrito...
    const response = await interaction.reply({
      content: `.................HISTORIA SERELEPE.................`,
      components: [row],
    });

    //Colentado a interação com os botões.
    const collectorFilter = (i) => i.user.id === interaction.user.id;

    try {
      //Criando timer de resposta.
      const confirmation = await response.awaitMessageComponent({
        filter: collectorFilter,
        time: 60000,
      });

      // Se confirmado
      if (confirmation.customId === "Up") {
        //Remove os botões deixando apenas o conteudo escrito.
        await confirmation.update({
          components: [],
        });
        await interaction.channel.send("Pong!");
      // Se cancelado
      } else if (confirmation.customId === "Down") {
        //Remove os botões deixando apenas o conteudo escrito.
        await confirmation.update({
          components: [],
        });
        await interaction.channel.send("Pong!");
      }
    } catch (e) {
      await interaction.editReply({
        content: "Confirmation not received within 1 minute, cancelling",
        components: [],
      });
    }
  },
};
