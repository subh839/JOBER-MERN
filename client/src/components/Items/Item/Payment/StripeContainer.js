import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./Payment";

const PUBLIC_KEY =
  "";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer({ amount, itemStatus }) {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm amount={amount} itemStatus={itemStatus} />
    </Elements>
  );
}
