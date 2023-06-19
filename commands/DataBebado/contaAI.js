const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SlashCommandBuilder,
} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('contar')
    .setDescription("Vou puxar do meu banco uma história aleátoria para sua avaliação."),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild

    //Forma de pegar a opção...
    //const category = interaction.options.getString('category') ?? 'No reason provided';

    // Montando botões
    const confirm = new ButtonBuilder()
      .setCustomId("Up")
      .setLabel("Up Vote")
      .setStyle(ButtonStyle.Secondary);

    const cancel = new ButtonBuilder()
      .setCustomId("Down")
      .setLabel("Down vote")
      .setStyle(ButtonStyle.Secondary);

    const row = new ActionRowBuilder().addComponents(cancel, confirm);

    // Enviando os botões
    const response = await interaction.reply({
      content: `.................HISTORIA SERELEPE.................`,
      components: [row],
    });

    //Colentado a interação com os botões
    const collectorFilter = (i) => i.user.id === interaction.user.id;

    try {
      const confirmation = await response.awaitMessageComponent({
        filter: collectorFilter,
        time: 60000,
      });

      if (confirmation.customId === "Up") {
        await confirmation.update({
          components: [],
        });
        await interaction.channel.send('Pong!');

      } else if (confirmation.customId === "Down") {
        await confirmation.update({
          components: [],
        });
        await interaction.channel.send('Pong!');
      }
    } catch (e) {
      await interaction.editReply({
        content: "Confirmation not received within 1 minute, cancelling",
        components: [],
      });
    }
  },
};
