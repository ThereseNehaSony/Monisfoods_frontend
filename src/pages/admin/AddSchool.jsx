import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../../common/api";
import Sidebar from "../../components/Admin/Sidebar";

function AddSchool() {
  const initialValues = { name: "" };

  const validationSchema = Yup.object({
    name: Yup.string().required("School name is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      await axios.post(`${baseURL}/api/admin/schools`, values);
      toast.success("School added successfully!");
      resetForm();
    } catch (error) {
      toast.error("Failed to add school");
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar className="hidden md:block" />
      <ToastContainer />
      <div className="flex-1 p-4 mt-8 md:p-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Add School</h2>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
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
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 transition duration-300"
            >
              Add School
            </button>
          </Form>
        </Formik>
      </div>
    </div>
    </div>
  );
}

export default AddSchool;
