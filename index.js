const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;
const getRandomHugot = require("./getRandomHugot")

const randomday = Math.floor(Math.random() * 9999);
const tweet = async () => {
  try {
    await rwClient.v2.tweet(getRandomHugot());
    console.log("tweeted successfully");
  } catch (e) {
    console.error(e);
  }
};

tweet();
// const job = new CronJob("* * * * *", () => {
//   tweet();
// });

// job.start();
