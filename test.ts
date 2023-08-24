import { Client, GatewayIntentBits } from "discord.js";

const x = process.env.TEST;
console.log(x);

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
  ],
});
