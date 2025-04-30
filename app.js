const TelegramBot = require('node-telegram-bot-api');

// Ganti dengan token bot Telegram Anda dari BotFather
const token = '8187353779:AAGps6cekrxUmKvYnXV9janleVGRd3wYuE8';

// Buat bot dengan polling (bot aktif menunggu pesan)
const bot = new TelegramBot(token, { polling: true });

// Tangani pesan teks masuk
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Balas pesan dengan mengulang teks yang dikirim
  bot.sendMessage(chatId, `Anda mengirim: ${text}`);
});

console.log('Bot Telegram berjalan...');
