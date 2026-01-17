const { getPrice } = require("./price");
const { sendAlert } = require("./notifier");

const coin = process.argv[2];
const target = Number(process.argv[3]);

if (!coin || !target) {
  console.log("Usage: node bot.js bitcoin 50000");
  process.exit(0);
}

console.log("Tracking", coin, "target:", target);

setInterval(async () => {
  const price = await getPrice(coin);
  console.log("Current price:", price);

  if (price >= target) {
    sendAlert("Price reached: " + price);
  }
}, 60000);
