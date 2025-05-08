// src/app/api/webhook/route.js
import TelegramBot from "node-telegram-bot-api";
import { NextResponse } from "next/server";

const TOKEN = "8093601866:AAGIY6LVOBb21JXa3iWHvOywQvE7pV9juJo";
const WEB_APP_URL = "https://tma-oasis.vercel.app";

/**
 * Инициализируем бота без polling, чтобы использовать webhook
 * { webHook: true } тут не обязателен, главное — не включать polling
 */
const bot = new TelegramBot(TOKEN, { webHook: true });

// Реакция на /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Запустить приложение:", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Открыть Web App",
            web_app: { url: WEB_APP_URL },
          },
        ],
      ],
    },
  });
});

export async function POST(request) {
  // Telegram пришлёт update JSON в тело запроса
  const update = await request.json();
  // Передаём его в бота
  await bot.processUpdate(update);
  // Возвращаем любой 200-ответ
  return NextResponse.json({ ok: true });
}
