const { randomInt } = require("crypto");
const rwClient = require("./twitterClient.js");

// lf commissioner yung kaya akong ipaglaban
const quotes = [
  "miss na kita {name}",
  "miss u {name}",
  "i miss you {name}",
  "i miss you {name} balik ka na",
  "balik ka na {name} hindi ko kaya ng wala ka",
  "pano naman ako {name}",
  "sabihin mo naman sa kin {name} kung san ako nagkulang",
  "{name} lamig mo na",
  "hindi ba pwedeng tayo nalang ulit {name}",
  "ako nalang kasi {name}",
  "dribble, back-step, sabay sabi ng miss na kita {name}",
  "ano ba talaga tayo {name}",
  "sana ako nalang paikutin mo kesa sa bike {name}",
  "Sorry ha, ganito lang kasi ako {name}",
  "{name} looking right because you left looking up because you let me down looking down because you didn't lift me up looking left because you're always right",
  "{name} baby baby your my sun and moon",
];


// user id ni scammer
const userid = "1555081729131442182";


module.exports = async () => {
  const randomQuote = quotes[randomInt(quotes.length)];
  const randomUser = await rwClient.v2
        .user(userid, { "tweet.fields": ["id", "text"] })
        .then((result) => {
          response = result.data.username;
          return response
        });
  return randomQuote.replace("{name}", `@${randomUser}`);
};
