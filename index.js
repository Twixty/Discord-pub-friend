const discord = require('discord.js-self-v13');
const client = new discord.Client({
    restTimeOffset: 5,
    intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MEMBERS, discord.Intents.FLAGS.GUILD_MESSAGES],
});
const { token, msg, qrLogin } = require('./config.json');

let count = 1;

client.on('ready', () => {
    console.log('Connecté en tant que: ' + client.user.tag)
    
    client.user.friends.forEach(member => {
        member.send(msg).catch(console.error).then(() => {
            count++
            console.log(`[${count}] Message envoyé à ${member.tag}`)
        });
    })
})

if(!qrLogin){
    client.login(token)
} else {
    client.QRLogin()
}