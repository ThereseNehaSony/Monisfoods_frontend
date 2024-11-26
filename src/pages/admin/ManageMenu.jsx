// ManageMenu.js

import React, { useState } from 'react';

const ManageMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', type: '', description: '', price: '' });

  const handleAddItem = () => {
    setMenuItems([...menuItems, { ...newItem, id: Date.now() }]);
    setNewItem({ name: '', type: '', description: '', price: '' });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Menu Items</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Item name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="p-2 border rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Type (e.g., breakfast, lunch, snack)"
          value={newItem.type}
          onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
          className="p-2 border rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
          className="p-2 border rounded w-full mb-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          className="p-2 border rounded w-full mb-2"
        />
        <button onClick={handleAddItem} className="bg-blue-500 text-white py-2 px-4 rounded">
          Add Menu Item
        </button>
      </div>

      {/* Display added items */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Current Menu Items</h3>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="border-b py-2">
              {item.name} - {item.type} - {item.description} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageMenu;
