import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../../common/api";

function EditSchool() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [school, setSchool] = useState(null);

  const fetchSchool = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/admin/schools/${id}`);
      setSchool(response.data.school);
    } catch (error) {
      toast.error("Failed to load school details");
    }
  };

  useEffect(() => {
    fetchSchool();
  }, [id]);

  const validationSchema = Yup.object({
    name: Yup.string().required("School name is required"),
  });

  const onSubmit = async (values) => {
    try {
      await axios.put(`${baseURL}/api/admin/schools/${id}`, values);
      toast.success("School updated successfully!");
      navigate("/view-schools");
    } catch (error) {
      toast.error("Failed to update school");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ToastContainer />
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Edit School</h2>
      {school ? (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
          <Formik
            initialValues={{ name: school.name }}
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
                Save Changes
              </button>
            </Form>
          </Formik>
        </div>
      ) : (
        <p className="text-gray-600 text-center">Loading school details...</p>
      )}
    </div>
  );
}

export default EditSchool;
