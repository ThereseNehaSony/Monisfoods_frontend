
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://monis-foods-backend.vercel.app/api/user/get/bookings');
        setOrders(response.data); 
      } catch (err) {
        setError('Failed to fetch orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Your Order History</h2>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">Order #{order._id}</h3>
              <p className="text-sm text-gray-600 mt-1">Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>

          
              <div className="mt-4">
                {Object.keys(order.selectedItems).map((mealType) => (
                  <div key={mealType}>
                    <h4 className="text-xl font-semibold text-gray-700">{mealType.charAt(0).toUpperCase() + mealType.slice(1)}</h4>
                    {order.selectedItems[mealType].map((item, index) => (
                      <div key={index} className="flex justify-between mt-2">
                        <p>{item.name} ({item.details.size})</p>
                        <p>{item.details.quantity} x ₹{item.details.price}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

          
              {/* <p className="text-lg font-bold text-gray-900 mt-4">Total: ₹ {order.totalAmount}</p> */}

           
              {order.discount > 0 && (
                <p className="text-sm text-gray-600 mt-2">Discount: ₹{order.discount}</p>
              )}
              {/* {order.walletBalanceUsed > 0 && (
                <p className="text-sm text-gray-600 mt-2">Wallet Balance Used: ₹{order.walletBalanceUsed}</p>
              )} */}

{/*              
              <div
                className={`mt-4 inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  order.paymentStatus === 'Pending'
                    ? 'bg-yellow-100 text-yellow-600'
                    : order.paymentStatus === 'Completed'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {order.paymentStatus}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistoryPage;
