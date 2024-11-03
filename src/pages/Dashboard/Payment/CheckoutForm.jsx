import {
  PaymentElement,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import useCart from './../../../hooks/useCart';
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const {cart, refetch, isLoading} = useCart();
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const {user} = useAuth();
  const price = cart?.reduce((total, item)=> total + item.price, 0);
 
  useEffect(()=>{
    
    if(price > 0 && !isLoading){
      axiosSecure.post('/create-payment-intent', {price})
    .then(res =>{
      // console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    })
    }
  }, [axiosSecure, price])

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log("[error]", error);
      setError(error.message);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          email: user?.email || 'anonymuos',
          name: user?.displayName || 'anonymous'
        }
      }
    })

    if(confirmError){
      // console.log('error occured');
    } else {
      // console.log(paymentIntent);
      if(paymentIntent.status === 'succeeded'){
        // console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user?.email,
          price,
          date: new Date(),
          transactionId: paymentIntent.id,
          cartId: cart.map(item => item._id),
          menuItemId: cart.map(item => item.menuId),
          status: 'pending'
        };
        const res = await axiosSecure.post('/payments',payment);
        // console.log(res.data);
        if(res?.data?.paymentResult?.insertedId && res?.data?.deleteResult?.deletedCount > 0){
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your payment is successful",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && <p className="text-green-600 my-4">Your transaction id: {transactionId}</p>}
    </form>
  );
};

export default CheckoutForm;
