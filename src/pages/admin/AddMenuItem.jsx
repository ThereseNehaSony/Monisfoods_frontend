import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../../components/Admin/Sidebar';
import { baseURL } from '../../common/api';

function AddItem() {
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    portions: { small: '', medium: '', large: '' },
    image: '',
    category : '',
  });
  const [preview, setPreview] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ov79qmw3'); // Replace with your preset

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/ddgwtndbb/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setNewItem((prev) => ({ ...prev, image: data.secure_url }));
      setImageUploaded(true);
    } catch (error) {
      console.error('Image upload failed:', error);
      setImageUploaded(false);
    }
  };

  const handleNewItemChange = (field, value) => {
    setNewItem((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddItem = async () => {
    if (!newItem.name || !newItem.description || !newItem.category) {
      toast.error('Name , Description and Category are required!');
      return;
    }

    try {
      const response = await axios.post(`${baseURL}/api/admin/menu-item`, newItem); // Update baseURL
      toast.success('Item added successfully');
      setNewItem({ name: '', description: '', portions: { small: '', medium: '', large: '' },category, image: '' });
      setPreview(null);
      setImageUploaded(false);
    } catch (error) {
      console.error('Error saving item:', error);
      toast.error('Failed to add item');
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
       
        <Sidebar className="hidden md:block" />
      <ToastContainer />
      <div className="flex-1 p-4 mt-8  md:p-6">
      <h3 className="text-xl font-semibold text-center mb-4">Add Menu Item</h3>
      <input
        type="text"
        placeholder="Item Name"
        value={newItem.name}
        onChange={(e) => handleNewItemChange('name', e.target.value)}
        className="p-2 border rounded mb-2 w-full"
      />
      <textarea
        placeholder="Description"
        value={newItem.description}
        onChange={(e) => handleNewItemChange('description', e.target.value)}
        className="p-2 border rounded mb-2 w-full"
      />
       <div className="mb-4">
          <label className="block mb-2 font-semibold">Category</label>
          <select
            value={newItem.category}
            onChange={(e) => handleNewItemChange('category', e.target.value)}
            className="p-2 border rounded w-full"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Snack">Snack</option>
          </select>
        </div>
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2">Portion Sizes</h4>
        {['small', 'medium', 'large'].map((size) => (
          <div key={size} className="flex items-center justify-between mb-2">
            <label className="capitalize w-1/3">{size}</label>
            <input
              type="number"
              placeholder={`Price for ${size}`}
              value={newItem.portions[size]}
              onChange={(e) =>
                setNewItem((prev) => ({
                  ...prev,
                  portions: { ...prev.portions, [size]: e.target.value },
                }))
              }
              className="p-2 border rounded w-2/3"
            />
          </div>
        ))}
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {newItem.image && (
          <div className="mt-4">
            <img src={newItem.image} alt="Uploaded menu item" className="w-32 h-32 rounded-lg" />
          </div>
        )}
      </div>
      <button
        onClick={handleAddItem}
        className={`${
          imageUploaded ? 'bg-[#320e0e]' : 'bg-gray-500'
        } text-white py-2 px-4 rounded`}
        disabled={!imageUploaded}
      >
        Add Item
      </button>
    </div>
    </div>
  );
}

export default AddItem;
