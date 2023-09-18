const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Return my ping!"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });

    const newMessage = `API Latency: ${client.ws.ping}\n Client Ping: ${
      message.createdTimeStamp - interaction.createdTimeStamp
    }`;
    await interaction.editReply({ content: newMessage });
  },
};
