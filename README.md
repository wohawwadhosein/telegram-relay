# Telegram Relay for RcooShop 🚀

This is a simple and secure **serverless API** built with [Vercel](https://vercel.com), designed to **relay messages from a WordPress site hosted in Iran to a Telegram bot**.

---

## 🔧 Use Case

Many Iranian hosts **cannot connect directly to Telegram API** due to filtering. This relay acts as a bridge between your WordPress/WooCommerce site and Telegram bot.

---

## 🛠 How It Works

- Your WordPress site sends a simple HTTP request like this:

  ```
  https://your-vercel-app.vercel.app/api/send?text=📦+New+Product+Added!
  ```

- This relay receives the request and sends the message to your **Telegram bot + channel** via Telegram Bot API.

---

## 📂 Project Structure

```
telegram-relay/
└── api/
    └── send.js  ← The main serverless function
```

---

## 📌 Setup Instructions

### 1. Deploy to Vercel

- Import this repository into your [Vercel dashboard](https://vercel.com/import/git)
- Vercel will auto-detect it as a Serverless Function
- Deploy the project

### 2. Add Environment Variable

In your Vercel project dashboard:

| Key        | Value                                      |
|------------|--------------------------------------------|
| BOT_TOKEN  | your-telegram-bot-token (keep it secret)   |

> Example BOT_TOKEN: `123456789:ABCdefGHIjklMNOpqrSTUvwxYZ`

### 3. Use the Relay

Send a GET request like:

```
https://your-vercel-app.vercel.app/api/send?text=Hello+Telegram
```

---

## ✅ Example

```bash
curl "https://your-vercel-app.vercel.app/api/send?text=📢+New+Product+Added"
```

---

## 🔐 Security Notes

- The Telegram bot token is **not exposed** in the code (stored as `BOT_TOKEN` environment variable)
- You can add IP filtering or secret tokens if you want to restrict usage

---

## ✍️ Author

Built by [Mohammad Ebrahimzadeh](https://github.com/wohawwadhosein) for [RcooShop](https://rcooshop.com)

---

## 📣 License

MIT – Feel free to use, modify and deploy.
