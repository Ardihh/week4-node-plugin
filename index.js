const chalk = require("chalk");
const cowsay = require("cowsay");
const figlet = require("figlet");
const dayjs = require("dayjs");
const gradient = require("gradient-string");

// Ambil input dari terminal
const input = process.argv[2] || "M. Rizki Juniardi - F1D02310074";

// Tampilkan nama dan nim dengan warna
console.log(chalk.green.bold("Nama & NIM: ") + chalk.yellow(input));

// karakter dengan cowsay dan warna gradient
console.log(cowsay.say({
  text: gradient.pastel("Coba tolong itu apanya di apain biar ga apa kali"),
  f: "daemon"
}));   

// ASCII art dengan figlet
figlet(input.split("-")[0].trim(), function (err, data) {
  if (err) {
    console.log("Something went wrong with figlet...");
    console.dir(err);
    return;
  }
  console.log(chalk.cyan(data));
});

// datetime
console.log(chalk.magenta("Current Time: " + dayjs().format("YYYY-MM-DD HH:mm:ss")));