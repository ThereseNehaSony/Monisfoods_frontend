import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/Admin/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { baseURL } from '../../common/api';

function AddItems() {
  const initialValues = { name: "" };

  const validationSchema = Yup.object({
    name: Yup.string().required("School name is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      await axios.post(`${baseURL}/api/admin/schools`, values);
      toast.success("School added successfully!");
      resetForm();
      fetchSchools();
    } catch (error) {
      toast.error("Failed to add school");
    }
  };

  const [schools, setSchools] = useState([]);

  const fetchSchools = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/admin/schools`);
      setSchools(response.data.schools);
    } catch (error) {
      console.error("Error fetching schools", error);
    }
  };

  useEffect(() => {
    fetchSchools();
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar className="hidden md:block" />
      <ToastContainer />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Manage Schools</h2>

        {/* Add School Form */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Add a New School</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  School Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter school name"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#eb671c] text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-300"
              >
                Add School
              </button>
            </Form>
          </Formik>
        </div>

        {/* Load Schools Button */}
        {/* <button
          onClick={fetchSchools}
          className="w-full mb-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Load Schools
        </button> */}

        {/* Schools List */}
        {schools.length > 0 ? (
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Available Schools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {schools.map((school) => (
                <div
                  key={school._id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <h4 className="text-lg font-medium text-gray-800 mb-2">{school.name}</h4>
                  <div className="flex justify-end">
                    <button className="mr-2 text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-center mt-8">No schools available. Please add some!</p>
        )}
      </div>
    </div>
  );
}

export default AddItems;
