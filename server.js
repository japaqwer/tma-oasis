// server.js
import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8093601866:AAGIY6LVOBb21JXa3iWHvOywQvE7pV9juJo";
const URL = "https://2455-46-251-192-211.ngrok-free.app";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Запустить Web App:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Открыть приложение",
            web_app: { url: URL },
          },
        ],
      ],
    },
  });
});
