//import { REST, Routes } from 'discord.js';
const { REST, Routes } = require("discord.js");

const commands = [
    {
      name: "create",
      description: "creates a new short url!",
    },
  ];



  const rest = new REST({ version: '10' }).setToken('Token');

  (async () => {
   
    
   try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands('1263050300001091594'), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }


  }) ();