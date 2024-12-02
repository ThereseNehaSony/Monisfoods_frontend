import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../../common/api";
import Sidebar from "../../components/Admin/Sidebar";

function ViewSchools() {
  const [schools, setSchools] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility
  const [editableSchool, setEditableSchool] = useState(null); // Track the school being edited
  const [updatedSchool, setUpdatedSchool] = useState({}); // Store updated school details

  const fetchSchools = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/admin/schools`);
      setSchools(response.data.schools);
    } catch (error) {
      console.error("Error fetching schools", error);
    }
  };

  const handleDelete = async (id) => {

      try {
        await axios.delete(`${baseURL}/api/admin/schools/${id}`);
        toast.success("School deleted successfully!");
        fetchSchools();
      } catch (error) {
        toast.error("Failed to delete school");
      
    }
  };

  const handleEditClick = (school) => {
    setEditableSchool(school);
    setUpdatedSchool(school); // Pre-fill the form with current details
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setEditableSchool(null);
    setUpdatedSchool({});
  };

  const handleChange = (e) => {
    setUpdatedSchool({
      ...updatedSchool,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      await axios.put(`${baseURL}/api/admin/schools/${editableSchool._id}`, updatedSchool);
      toast.success("School updated successfully!");
      fetchSchools(); // Refresh the school list
      handleCloseModal(); // Close the modal
    } catch (error) {
      toast.error("Failed to update school");
    }
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar className="hidden md:block" />
      <ToastContainer />
      <div className="flex-1 p-4 mt-8 md:p-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">View/Edit Schools</h2>
        {schools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school) => (
              <div
                key={school._id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h4 className="text-lg font-medium text-gray-800 mb-2">{school.name}</h4>
                <div className="flex justify-end">
                  <button
                    className="mr-2 text-blue-500 hover:text-blue-700"
                    onClick={() => handleEditClick(school)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(school._id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center mt-8">No schools available.</p>
        )}
      </div>

      {/* Modal for Editing School */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Edit School</h3>
            <input
              type="text"
              name="name"
              value={updatedSchool.name || ""}
              onChange={handleChange}
              className="border p-2 rounded w-full mb-4"
              placeholder="School Name"
            />
           
            <div className="flex justify-between">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white py-2 px-4 rounded flex items-center"
              >
                Save
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white py-2 px-4 rounded flex items-center"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewSchools;
