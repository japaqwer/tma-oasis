// src/app/api/webhook/route.js
import TelegramBot from "node-telegram-bot-api";
import { NextResponse } from "next/server";

const TOKEN = "8093601866:AAGIY6LVOBb21JXa3iWHvOywQvE7pV9juJo";
const WEB_APP_URL = "https://tma-oasis.vercel.app";

const bot = new TelegramBot(TOKEN, { webHook: true });

// Отвечаем на GET (Telegram проверяет)
export async function GET(request) {
  return NextResponse.json({ ok: true });
}

// Обрабатываем обновления от Telegram
export async function POST(request) {
  const update = await request.json();
  console.log("📨 Telegram update:", JSON.stringify(update));

  const msg = update.message;
  if (msg?.text?.startsWith("/start")) {
    console.log("➡️ /start received, sending Web App button");
    await bot.sendMessage(msg.chat.id, "Запустить приложение:", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Открыть Web App", web_app: { url: WEB_APP_URL } }],
        ],
      },
    });
  }

  return NextResponse.json({ ok: true });
}
