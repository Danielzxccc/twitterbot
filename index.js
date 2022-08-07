const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;
const getRandomHugot = require("./getRandomHugot");
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot lang i2 guys'))

app.listen(3000, ()=> console.log("BOT STARTED"));

const tweet = async () => {
  try {
    await rwClient.v2.tweet(await getRandomHugot() + Math.floor(Math.random() * 100));
    console.log("tweeted successfully");
  } catch (e) {
    console.error(e);
  }
};



const job = new CronJob("* * * * *", () => {
  tweet();
});

job.start();
