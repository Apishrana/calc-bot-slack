require('dotenv').config();

const { App } = require('@slack/bolt');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
});

app.command('/dsb-calc', async ({ command, ack, respond }) => {
    const comm = command.text;
    console.log(command);
    await ack();
    // const latency = Date.now() - start;
    await respond({ text: `${eval(comm)}` });
});

(async () => {
    await app.start();
    console.log('bot is running!');
})();
