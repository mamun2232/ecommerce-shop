import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const CheckoutForm = () => {
  // const [email, setEmail] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const totalCost = useSelector((state) => state.shipping.totalCost);
  // const [user] = useAuthState(auth)
  
 const [payment , setPayment] = useState(false)
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }
 
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      
      switch (paymentIntent.status) {
        case "succeeded": 
       
          setMessage("Payment succeeded!");
       
          break;
        case "processing":
          
          setMessage("Your payment is processing.");
          console.log(paymentIntent.status)
        
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/chackout/orderReview/payment/success",
        // receipt_email: email,
      
      },
      
    });
   
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setPayment(true)
    setIsLoading(false); 
  };

  

  return (
    <>
      <div className="card lg:w-2/3 w-full  m-auto  border p-3">
        <div class="">
          <div class="p-2">
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-center">Payment Now</p>
            </div>

            <form className="mt-7" id="payment-form" onSubmit={handleSubmit}>
           
            {/* <input
        id="email"
        type="text"
        className="block w-full px-4 py-2 mt-2  bg-white border rounded-md   outline-none  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring focus:ring-opacity-40"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
      /> */}
      <div className="mt-3">
      <PaymentElement id="payment-element" />

      </div>
              
              <div className="text-center">
                  {/* Show any error or success messages */}
              {message && (
                <div id="payment-message" className="text-red-500 text-center">
                  {message}
                </div>
              )}
                <button
                  className="bg-red-500 rounded-lg px-6 py-2 mt-3 w-1/2 text-white  "
                  disabled={isLoading || !stripe || !elements}
                  id="submit"
                >
                  <span id="button-text">
                    {isLoading ? (
                      <div className="spinner" id="spinner">Lodding..........</div>
                    ) : (
                      `Pay Now ${totalCost} BDT`
                    )}
                  </span>
                </button>
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
