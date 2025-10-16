import Razorpay from "razorpay";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { amount } = req.body;
    const amountNum = Number(amount);

    if (isNaN(amountNum) || amountNum <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await instance.orders.create({
      amount: Math.round(amountNum * 100), // Razorpay expects paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    return res.status(200).json(order);
  } catch (error) {
    console.error("Razorpay order error:", error);
    return res.status(500).json({ error: "Failed to create order" });
  }
}
