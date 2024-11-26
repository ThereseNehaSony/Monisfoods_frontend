// import React, { useEffect } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// // import { useSelector, useDispatch } from "react-redux";
// import { Toaster } from "react-hot-toast";

// //General
// import Home from "./pages/public/Home";
// import Navbar from "./components/Navbar";
// import Register from "./pages/auth/Register";
// import Login from './pages/auth/Login'
// import MealMenu from "./components/User/Product";
// import CartPage from "./components/User/Cart";
// import Profile from "./components/User/Profile";
// import OrderHistoryPage from "./components/User/Bookings";
// import WalletPage from "./components/User/Wallet";
// import AdminDashboard from "./pages/admin/Dashboard";
// import DashboardPage from "./pages/admin/Dash";
// import UsersPage from "./pages/admin/Users";
// import AddMenu from "./pages/admin/Menu";
// import ParentDashboard from "./components/User/Product";
// import ParentHomePage from "./components/User/Home";
// import Checkout from "./components/User/Checkout";
// import AddItems from "./pages/admin/AddItems";
// import MobileFooter from "./pages/public/Footer";
// import Footer from "./pages/public/Footer";
// import CouponManagement from "./pages/admin/Coupon";
// import AboutUs from "./pages/public/AboutUs";
// import PrivacyPolicy from "./pages/public/Privacy";
// import TermsAndConditions from "./pages/public/Terms";
// import RefundPolicy from "./pages/public/RefundPolicy";
// import PaymentSuccessPage from "./components/User/PaymentSuccess";


// // import Register from "./page/auth/Register";
// function App() {

//   // const { user } = useSelector((state) => state.user);
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   if (!user) {
//   //     dispatch(getUserDataFirst());
//   //   }
//   // }, [dispatch, user]);

//   // const ProtectedRoute = ({ element }) => {
//   //   const { user } = useSelector((state) => state.user);

//   //   return user ? element : <Navigate to="/login" />;
//   // };

//   return (
//     <>
//      <Toaster position="top-center" />
//      <BrowserRouter>
//      <Navbar/>
//      <Routes>
//       <Route path="/" element={<Home/>} />



//       <Route path="register" element={<Register />} />
//       <Route path="login" element={<Login />} />


//       <Route path="/menu" element={<MealMenu />} />
//       <Route path="/cart" element={<CartPage />} />
//       <Route path="/profile" element={<Profile />} />
//       <Route path="/bookings" element={<OrderHistoryPage />} />
//       <Route path="/wallet" element={<WalletPage />} />
//       <Route path="/checkout" element={<Checkout />} />


//       <Route path="/admin" element={<AdminDashboard />} />

//       <Route path="/dashboard" element={<DashboardPage />} />
//       <Route path="/users" element={<UsersPage />} />
//       <Route path="/menus" element={<AddMenu />} />
//       <Route path='/home' element={<ParentHomePage />}/>
//       <Route path='/items' element={<AddItems />}/>
//       <Route path='/coupons' element={<CouponManagement />}/>
//       <Route path='/payment-success' element={<PaymentSuccessPage />}/>

//       <Route path='/about-us' element={<AboutUs />}/>
//       <Route path='/privacy' element={<PrivacyPolicy />}/>
//       <Route path='/terms' element={<TermsAndConditions />}/>
//       <Route path='/refund' element={<RefundPolicy />}/>

//      </Routes>
//      <Footer/>
//      </BrowserRouter>
     
//     </>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// General
import Home from "./pages/public/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/auth/Register";
import Login from './pages/auth/Login';
import MealMenu from "./components/User/Product";
import CartPage from "./components/User/Cart";
import Profile from "./components/User/Profile";
import ParentHomePage from "./components/User/Home";
import OrderHistoryPage from "./components/User/Bookings";
import WalletPage from "./components/User/Wallet";
import AdminDashboard from "./pages/admin/Dashboard";
import DashboardPage from "./pages/admin/Dash";
import UsersPage from "./pages/admin/Users";
import AddMenu from "./pages/admin/Menu";
import Checkout from "./components/User/Checkout";
import AddItems from "./pages/admin/AddItems";
import Footer from "./pages/public/Footer";
import CouponManagement from "./pages/admin/Coupon";
import AboutUs from "./pages/public/AboutUs";
import PrivacyPolicy from "./pages/public/Privacy";
import TermsAndConditions from "./pages/public/Terms";
import RefundPolicy from "./pages/public/RefundPolicy";
import PaymentSuccessPage from "./components/User/PaymentSuccess";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation(); 

 
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <Toaster position="top-center" />
      
      {!isAdminRoute && <Navbar />} 
      
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Public Routes */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* User Routes */}
        <Route path="/menu" element={<MealMenu />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* User Pages */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/bookings" element={<OrderHistoryPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path='/home' element={<ParentHomePage />}/>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/menus" element={<AddMenu />} />
        <Route path="/admin/items" element={<AddItems />} />
        <Route path="/admin/coupons" element={<CouponManagement />} />
        
        <Route path="/payment-success" element={<PaymentSuccessPage />} />

        {/* Public Pages */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/refund" element={<RefundPolicy />} />
      </Routes>

      
      {!isAdminRoute && <Footer />} 
    </>
  );
}

export default App;
