import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Admin/Sidebar';
 // Adjust the path to your Sidebar component

 const AdminBookingsCategorized = () => {
    const [categorizedBookings, setCategorizedBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
      const fetchBookings = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/admin/bookings');
          setCategorizedBookings(response.data.categorizedBookings);
        } catch (error) {
          setError('Failed to load bookings');
        } finally {
          setLoading(false);
        }
      };
  
      fetchBookings();
    }, []);
  
    if (loading) {
      return <p className="text-center mt-4">Loading bookings...</p>;
    }
  
    if (error) {
      return <p className="text-center text-red-500 mt-4">{error}</p>;
    }
  
    return (
      <div className="flex flex-col md:flex-row">
        <Sidebar className="w-full md:w-1/4 bg-gray-800 text-white" />
  
        <div className="flex-1 p-4">
          <h2 className="text-xl font-bold mb-4  mt-4 text-center md:text-left">
            Bookings by Meal Type and Date
          </h2>
          {categorizedBookings.length === 0 ? (
            <p className="text-center">No bookings found</p>
          ) : (
            categorizedBookings.map((category) => (
              <div key={`${category._id.mealType}-${category._id.date}`} className="mb-8">
                <h3 className="text-lg font-semibold">
                  {category._id.mealType} - {category._id.date}
                </h3>
                {category.bookings.map((booking) => (
                  <div
                    key={booking._id}
                    className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md"
                  >
                    {/* <div>
                      <strong>Booking ID:</strong> {booking._id}
                    </div> */}
                    {/* <div>
                      <strong>User:</strong> {booking.userId || 'N/A'}
                    </div> */}
                    <div>
                      <strong>Item:</strong> {booking.itemDetails.name || 'N/A'}
                    </div>
                    {/* <div>
                      <strong>Price:</strong> ₹{booking.itemDetails.details.price || 0}
                    </div> */}
                    <div>
                      <strong>Quantity:</strong> {booking.itemDetails.details.quantity || 0}
                      </div>
                    <div>
                      
                      <strong>Portion:</strong> {booking.itemDetails.details?.size || 0}
                    </div>
                    {/* <div>
                      <strong>Total Amount:</strong> ₹{booking.totalAmount}
                    </div> */}
                    <div>
                      <strong>Booked At:</strong>{' '}
                      {new Date(booking.createdAt).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            ))
          )}
          
        </div>
      </div>
    );
  };
  
  export default AdminBookingsCategorized;