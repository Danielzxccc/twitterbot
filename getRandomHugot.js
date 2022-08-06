const { randomInt } = require("crypto")

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
]

users = ["Kobayashi_Acads"]

module.exports = () => {
  const randomQuote = quotes[randomInt(quotes.length)]
  const randomUser = users[0]
  return randomQuote.replace("{name}", `@${randomUser}`)
}
