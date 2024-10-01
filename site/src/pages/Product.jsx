import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import Banner from "../components/Banner";
import YouTubeEmbed from "../components/YouTubeEmbed";

const list = [
  {
    title: "Sheet Music 1 abcd",
    productId: "prod_Qo3e6TFYVUruyn",
    id: "0001",
    priceId: "price_1PwRai08IrP3t4bBLp4FvxS2",
  },
  {
    title: "Sheet Music 2 efgh",
    id: "0002",
    productId: "prod_Qo4XUe41UK4xPn",
    priceId: "price_1PwSOL08IrP3t4bBtwxavbxC",
  },
  {
    title: "Sheet Music 3 ijkl",
    id: "0003",
    productId: "prod_Qo4XhVoe2wndCO",
    priceId: "price_1PwSOr08IrP3t4bBY4WmCWL3",
  },
];

let stripePromise;

const getStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(import.meta.env.VITE_STRIPE_KEY);
  }

  return stripePromise;
};

function Product() {
  const { id } = useParams();
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const item = {
    price: list.find((item) => item.id === id).priceId,
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/product/${id}`,
  };

  const redirectToCheckout = async () => {
    setIsLoading(true);

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);

    if (error) setStripeError(error.message);
    setIsLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div>
      <Banner />
      <h1>Sheet music id = {id}</h1>
      <div>
        <YouTubeEmbed />
      </div>
      <button onClick={redirectToCheckout} disabled={isLoading}>
        {isLoading ? "Loading..." : "Buy"}
      </button>
    </div>
  );
}

export default Product;
