import { Markup } from "telegraf";

export const handlers = {
  Start: async (ctx) => {
    await ctx.reply("Добро пожаловать");
  },

  Menu: (ctx) => {
    ctx.reply(
      "Какой прогноз вас интересует?",
      Markup.keyboard([
        ["Погода сейчас 🔥", "Погода на завтра ⚡"],
        ["Погода на неделю ☀️", "Погода на 14 дней 🌟"],
        [`Поменять город 🏙️`],
      ])
    );
  },
};
