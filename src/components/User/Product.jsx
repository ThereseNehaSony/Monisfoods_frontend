import React, { useState, useEffect } from "react";
import { setSelectedItems, setTotalAmount, selectSelectedItems, selectTotalAmount } from "../../redux/reducers/user/selectedItemsSlice";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { baseURL } from '../../common/api';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-1/3">
        <h2 className="text-xl font-semibold mb-4">{message}</h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const FoodMenu = () => {
  const [menuData, setMenuData] = useState({ breakfast: [], lunch: [], dinner: [] });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedItems = useSelector(selectSelectedItems);
  const totalAmount = useSelector(selectTotalAmount);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];

    axios
      .get(`${baseURL}api/user/menu/${formattedDate}`)
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  const handlePortionSelect = (mealType, itemName, size, price) => {
    const updatedItems = {
      ...selectedItems,
      [mealType]: {
        ...selectedItems[mealType],
        [itemName]: { size, price, quantity: 1 },
      },
    };
    dispatch(setSelectedItems(updatedItems));
  };

  const handleQuantityChange = (mealType, itemName, change) => {
    const currentItem = selectedItems[mealType]?.[itemName];
    if (!currentItem) return;

    const newQuantity = Math.max(0, currentItem.quantity + change);
    let updatedItems;
    if (newQuantity === 0) {
      const { [itemName]: _, ...remainingItems } = selectedItems[mealType];
      updatedItems = { ...selectedItems, [mealType]: remainingItems };
    } else {
      updatedItems = {
        ...selectedItems,
        [mealType]: {
          ...selectedItems[mealType],
          [itemName]: { ...currentItem, quantity: newQuantity },
        },
      };
    }
    dispatch(setSelectedItems(updatedItems));
  };

  const calculateTotalAmount = () => {
    let total = 0;
    Object.keys(selectedItems).forEach((mealType) => {
      Object.values(selectedItems[mealType] || {}).forEach(({ price, quantity }) => {
        total += price * quantity;
      });
    });
    dispatch(setTotalAmount(total));
  };

  useEffect(() => {
    calculateTotalAmount();
  }, [selectedItems]);

  const handleBooking = () => {
    navigate('/checkout');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Book Your Meals</h1>

      <div>
        {Object.keys(menuData).map((mealType) => (
          <div key={mealType} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuData[mealType]?.map((item) => (
                <div key={item.name} className="p-4 bg-white shadow rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    {Object.entries(item.portions || {}).map(([size, price]) => (
                      <div key={size} className="flex flex-col space-y-2">
                        <label className="flex items-center text-gray-700">
                          <input
                            type="radio"
                            name={`${mealType}-${item.name}`}
                            onChange={() =>
                              handlePortionSelect(mealType, item.name, size, price)
                            }
                            className="mr-2"
                          />
                          <span>{`${size.charAt(0).toUpperCase() + size.slice(1)} - ₹${price}`}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleQuantityChange(mealType, item.name, -1)}
                      className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="px-4">
                      {selectedItems[mealType]?.[item.name]?.quantity || 0}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(mealType, item.name, 1)}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-right">
        <p className="font-semibold text-xl">Total Amount: ₹{totalAmount}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleBooking}
        message="Are you sure you want to confirm the booking?"
      />
    </div>
  );
};

export default FoodMenu;
