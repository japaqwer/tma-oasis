// src/app/api/webhook/route.js
import TelegramBot from "node-telegram-bot-api";
import { NextResponse } from "next/server";

const TOKEN = "8093601866:AAGIY6LVOBb21JXa3iWHvOywQvE7pV9juJo";
const WEB_APP_URL = "https://tma-oasis.vercel.app";

const bot = new TelegramBot(TOKEN, { webHook: true });

export async function GET(request) {
  // отвечаем на проверочные GET от Telegram
  return NextResponse.json({ ok: true });
}

export async function POST(request) {
  const update = await request.json();
  console.log("📨 update:", JSON.stringify(update));

  const msg = update.message;
  if (msg?.text?.startsWith("/start")) {
    console.log("➡️ /start received");
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
