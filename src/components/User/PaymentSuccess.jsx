import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccessPage = () => {
  const navigate = useNavigate();


  const handleContinue = () => {
    navigate('/bookings'); 
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your booking has been successfully processed. Thank you for using our service!
        </p>
        <button
          onClick={handleContinue}
          className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
        >
          Go to Bookings
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
