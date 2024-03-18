const myInfo = require("./information");
const cowsay = require("cowsay")

console.log(cowsay.say({
  text : `hello, i'm ${myInfo.nom} from ${myInfo.campus}.`,
}))

