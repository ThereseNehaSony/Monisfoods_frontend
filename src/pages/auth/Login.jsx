
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/reducers/user/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userRole = useSelector((state) => state.auth.role); // Get the role from Redux state
  const authError = useSelector((state) => state.auth.error);

  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  useEffect(() => {
    if (isAuthenticated) {
      if (userRole === 'admin') {
        navigate('/admin'); 
      } else {
        navigate('/home'); 
      }
    }
  }, [isAuthenticated, userRole, navigate]);

  const handlePasswordLogin = async () => {
    try {
      await dispatch(loginUser({ mobileNumber, password }));
      
    } catch (err) {
      setError('Login failed! Please check your credentials.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          {authError && <p className="text-red-500">{authError}</p>}
          <button
            onClick={handlePasswordLogin}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-all"
          >
            Login with Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
