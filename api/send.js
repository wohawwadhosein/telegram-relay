export default async function handler(req, res) {
  const token = process.env.BOT_TOKEN;
  const chat_id = "@rcoo_shop";

  const { text = "پیامی وارد نشده" } = req.query;

  if (!token) {
    return res.status(500).send("❌ توکن بات تعریف نشده (BOT_TOKEN missing)");
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id,
      text,
      parse_mode: "Markdown",
    }),
  });

  if (response.ok) {
    res.status(200).send("✅ پیام با موفقیت ارسال شد.");
  } else {
    const errorText = await response.text();
    res.status(500).send("❌ خطا در ارسال پیام:\n" + errorText);
  }
}
