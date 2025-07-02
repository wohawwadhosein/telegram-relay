# Telegram Relay for RcooShop ðŸš€

This is a simple and secure **serverless API** built with [Vercel](https://vercel.com), designed to **relay messages from a WordPress site hosted in Iran to a Telegram bot**.

---

## ðŸ”§ Use Case

Many Iranian hosts **cannot connect directly to Telegram API** due to filtering. This relay acts as a bridge between your WordPress/WooCommerce site and Telegram bot.

---

## ðŸ›  How It Works

- Your WordPress site sends a simple HTTP request like this:

  ```
  https://your-vercel-app.vercel.app/api/send?text=ðŸ“¦+New+Product+Added!
  ```

- This relay receives the request and sends the message to your **Telegram bot + channel** via Telegram Bot API.

---

## ðŸ“‚ Project Structure

```
telegram-relay/
â””â”€â”€ api/
    â””â”€â”€ send.js  â† The main serverless function
```

---

## ðŸ“Œ Setup Instructions

### 1. Deploy to Vercel

- Import this repository into your [Vercel dashboard](https://vercel.com/import/git)
- Vercel will auto-detect it as a Serverless Function
- Deploy the project

### 2. Add Environment Variable

In your Vercel project dashboard:

| Key        | Value                                      |
|------------|--------------------------------------------|
| `BOT_TOKEN` | `your-telegram-bot-token` (keep it secret) |

> Example BOT_TOKEN: `123456789:ABCdefGHIjklMNOpqrSTUvwxYZ`

### 3. Use the Relay

Send a GET request like:

```
https://your-vercel-app.vercel.app/api/send?text=Ø³Ù„Ø§Ù…+ØªÙ„Ú¯Ø±Ø§Ù…
```

---

## âœ… Example

```bash
curl "https://telegram-relay-rcooshop.vercel.app/api/send?text=ðŸ“¢+Ù…Ø­ØµÙˆÙ„+Ø¬Ø¯ÛŒØ¯+Ø§Ø¶Ø§ÙÙ‡+Ø´Ø¯"
```

---

## ðŸ” Security Notes

- The Telegram bot token is **not exposed** in the code (stored as `BOT_TOKEN` env variable)
- You can add IP filtering or secret tokens if you want to restrict usage

---

## âœï¸ Author

Built by [Mohammad Ebrahimzadeh](https://github.com/sunglassesstoreintehran) for [RcooShop](https://rcoo.shop)

---

## ðŸ“£ License

MIT â€“ Feel free to use, modify and deploy.
