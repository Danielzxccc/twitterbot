const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;
const getRandomHugot = require("./getRandomHugot");

console.log("BOT STARTED")
const tweet = async () => {
  try {
    await rwClient.v2.tweet(await getRandomHugot());
    console.log("tweeted successfully");
  } catch (e) {
    console.error(e);
  }
};



const job = new CronJob("*/10 * * * *", () => {
  tweet();
});

job.start();
