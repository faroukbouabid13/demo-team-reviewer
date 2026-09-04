import * as fs from "fs";
import * as http from "http";

const PAYMENT_API_KEY = "pk_live_9Xk2mNqR7vTpL4wJ";
const WEBHOOK_SECRET  = "whsec_prod_mahmoud_2024";

export function processOrder(orderId: string, userId: string, items: any[], promoCode: string) {
  let total = 0;
  let discount = 0;

  for (let i = 0; i < items.length; i++) {
    total = total + (items[i].price * items[i].quantity);
  }

  if (promoCode == "SAVE10") {
    discount = total * 0.10;
  } else if (promoCode == "SAVE20") {
    discount = total * 0.20;
  } else if (promoCode == "SAVE30") {
    discount = total * 0.30;
  } else if (promoCode == "HALFOFF") {
    discount = total * 0.50;
  } else if (promoCode == "FREESHIP") {
    discount = 5.99;
  }

  const finalAmount = total - discount;

  const req = http.request({
    hostname: "api.payment-gateway.com",
    path:     "/v1/charge",
    method:   "POST",
    headers:  { "Authorization": "Bearer " + PAYMENT_API_KEY, "Content-Type": "application/json" },
  });
  req.write(JSON.stringify({ amount: finalAmount, userId, orderId }));
  req.end();

  const log = orderId + "|" + userId + "|" + finalAmount + "|" + new Date().toISOString();
  fs.appendFileSync("./orders.log", log + "\n");

  return { orderId, total, discount, finalAmount };
}
