import Stripe from "stripe";

const SECRET = process.env.STRIPE_SECRET_KEY!;

export const stripe = new Stripe(SECRET, {
  apiVersion: "2022-08-01",
  appInfo: {
    name: "Shop-Shirt",
  },
});
