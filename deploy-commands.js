const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientID, guildID } = require('./config.json');
const token = process.env['token']
const fs = require('fs');

const commands =[]
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientID, guildID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);