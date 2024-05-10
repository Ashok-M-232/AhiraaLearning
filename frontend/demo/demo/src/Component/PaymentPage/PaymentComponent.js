// Payment.jsx
import React, { useEffect } from 'react';
// import ramanaSoft from '../components/Images/ramanaSoft.jpg';

const PaymentComponent = () => {
  useEffect(() => {
    // Load Razorpay script dynamically
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = initializeRazorpay;

    document.head.appendChild(script);

    // Clean up script tag on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initializeRazorpay = () => {
    const options = {
      key: 'rzp_test_Su4WV4zdBIGTmZ',
      amount: 100000,
      name: 'Ahira Learning Private Limited',
      description: 'Product/Service Description',
    //   image: ramanaSoft,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        // After clicking OK, navigate to http://localhost:3000/
        window.location.href = "http://localhost:3000/";        
      },
      prefill: {
        name: 'Your Name',
        email: 'your_email@example.com',
        contact: 'Your Contact Number',
      },
      notes: {
        address: 'Your Address',
      },
      theme: {
        color: '#F37254',
      },
    };

    const pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div>
      <button onClick={initializeRazorpay}>Pay with Razorpay</button>
    </div>
  );
};

export default PaymentComponent;
