// // import React, { useEffect } from "react";
// // import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// // // import { useSelector, useDispatch } from "react-redux";
// // import { Toaster } from "react-hot-toast";

// // //General
// // import Home from "./pages/public/Home";
// // import Navbar from "./components/Navbar";
// // import Register from "./pages/auth/Register";
// // import Login from './pages/auth/Login'
// // import MealMenu from "./components/User/Product";
// // import CartPage from "./components/User/Cart";
// // import Profile from "./components/User/Profile";
// // import OrderHistoryPage from "./components/User/Bookings";
// // import WalletPage from "./components/User/Wallet";
// // import AdminDashboard from "./pages/admin/Dashboard";
// // import DashboardPage from "./pages/admin/Dash";
// // import UsersPage from "./pages/admin/Users";
// // import AddMenu from "./pages/admin/Menu";
// // import ParentDashboard from "./components/User/Product";
// // import ParentHomePage from "./components/User/Home";
// // import Checkout from "./components/User/Checkout";
// // import AddItems from "./pages/admin/AddItems";
// // import MobileFooter from "./pages/public/Footer";
// // import Footer from "./pages/public/Footer";
// // import CouponManagement from "./pages/admin/Coupon";
// // import AboutUs from "./pages/public/AboutUs";
// // import PrivacyPolicy from "./pages/public/Privacy";
// // import TermsAndConditions from "./pages/public/Terms";
// // import RefundPolicy from "./pages/public/RefundPolicy";
// // import PaymentSuccessPage from "./components/User/PaymentSuccess";


// // // import Register from "./page/auth/Register";
// // function App() {

// //   // const { user } = useSelector((state) => state.user);
// //   // const dispatch = useDispatch();

// //   // useEffect(() => {
// //   //   if (!user) {
// //   //     dispatch(getUserDataFirst());
// //   //   }
// //   // }, [dispatch, user]);

// //   // const ProtectedRoute = ({ element }) => {
// //   //   const { user } = useSelector((state) => state.user);

// //   //   return user ? element : <Navigate to="/login" />;
// //   // };

// //   return (
// //     <>
// //      <Toaster position="top-center" />
// //      <BrowserRouter>
// //      <Navbar/>
// //      <Routes>
// //       <Route path="/" element={<Home/>} />



// //       <Route path="register" element={<Register />} />
// //       <Route path="login" element={<Login />} />


// //       <Route path="/menu" element={<MealMenu />} />
// //       <Route path="/cart" element={<CartPage />} />
// //       <Route path="/profile" element={<Profile />} />
// //       <Route path="/bookings" element={<OrderHistoryPage />} />
// //       <Route path="/wallet" element={<WalletPage />} />
// //       <Route path="/checkout" element={<Checkout />} />


// //       <Route path="/admin" element={<AdminDashboard />} />

// //       <Route path="/dashboard" element={<DashboardPage />} />
// //       <Route path="/users" element={<UsersPage />} />
// //       <Route path="/menus" element={<AddMenu />} />
// //       <Route path='/home' element={<ParentHomePage />}/>
// //       <Route path='/items' element={<AddItems />}/>
// //       <Route path='/coupons' element={<CouponManagement />}/>
// //       <Route path='/payment-success' element={<PaymentSuccessPage />}/>

// //       <Route path='/about-us' element={<AboutUs />}/>
// //       <Route path='/privacy' element={<PrivacyPolicy />}/>
// //       <Route path='/terms' element={<TermsAndConditions />}/>
// //       <Route path='/refund' element={<RefundPolicy />}/>

// //      </Routes>
// //      <Footer/>
// //      </BrowserRouter>
     
// //     </>
// //   )
// // }

// // export default App

// import React from "react";
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// // General
// import Home from "./pages/public/Home";
// import Navbar from "./components/Navbar";
// import Register from "./pages/auth/Register";
// import Login from './pages/auth/Login';
// import MealMenu from "./components/User/Product";
// import CartPage from "./components/User/Cart";
// import Profile from "./components/User/Profile";
// import ParentHomePage from "./components/User/Home";
// import OrderHistoryPage from "./components/User/Bookings";
// import WalletPage from "./components/User/Wallet";
// import AdminDashboard from "./pages/admin/Dashboard";
// import DashboardPage from "./pages/admin/Dash";
// import UsersPage from "./pages/admin/Users";
// import AddMenu from "./pages/admin/Menu";
// import Checkout from "./components/User/Checkout";
// import AddItems from "./pages/admin/AddItems";
// import Footer from "./pages/public/Footer";
// import CouponManagement from "./pages/admin/Coupon";
// import AboutUs from "./pages/public/AboutUs";
// import PrivacyPolicy from "./pages/public/Privacy";
// import TermsAndConditions from "./pages/public/Terms";
// import RefundPolicy from "./pages/public/RefundPolicy";
// import PaymentSuccessPage from "./components/User/PaymentSuccess";
// import { Toaster } from "react-hot-toast";
// import AdminBookings from "./pages/admin/Bookings";

// function App() {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }

// function AppContent() {
//   const location = useLocation(); 

 
//   const isAdminRoute = location.pathname.startsWith("/admin");

//   return (
//     <>
//       <Toaster position="top-center" />
      
//       {!isAdminRoute && <Navbar />} 
      
//       <Routes>
//         <Route path="/" element={<Home />} />

//         {/* Public Routes */}
//         <Route path="register" element={<Register />} />
//         <Route path="login" element={<Login />} />

//         {/* User Routes */}
//         <Route path="/menu" element={<MealMenu />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/checkout" element={<Checkout />} />

//         {/* User Pages */}
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/bookings" element={<OrderHistoryPage />} />
//         <Route path="/wallet" element={<WalletPage />} />
//         <Route path='/home' element={<ParentHomePage />}/>
//         {/* Admin Routes */}
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/admin/dashboard" element={<DashboardPage />} />
//         <Route path="/admin/users" element={<UsersPage />} />
//         <Route path="/admin/menus" element={<AddMenu />} />
//         <Route path="/admin/items" element={<AddItems />} />
//         <Route path="/admin/coupons" element={<CouponManagement />} />
//         <Route path="/admin/bookings" element={<AdminBookings />} />
//         <Route path="/payment-success" element={<PaymentSuccessPage />} />

//         {/* Public Pages */}
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/privacy" element={<PrivacyPolicy />} />
//         <Route path="/terms" element={<TermsAndConditions />} />
//         <Route path="/refund" element={<RefundPolicy />} />
//       </Routes>

      
//       {!isAdminRoute && <Footer />} 
//     </>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";

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
import { useSelector } from "react-redux";
import ViewMenus from "./pages/admin/ViewMenus";


const ProtectedRoute = ({ element: Element, allowedRoles, ...props }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: props.location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return <Element {...props} />;
};

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
  const isTeacherRoute = location.pathname.startsWith("/teacher");

  return (
    <>
      <Toaster position="top-center" />

      {!isAdminRoute && !isTeacherRoute && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/refund" element={<RefundPolicy />} />

        {/* Protected Parent Routes */}
        <Route
          path="/menu"
          element={
            <ProtectedRoute
              element={MealMenu}
              allowedRoles={['parent', 'teacher', 'admin']}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute
              element={CartPage}
              allowedRoles={['parent']}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute
              element={Checkout}
              allowedRoles={['parent']}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              element={Profile}
              allowedRoles={['parent', 'teacher', 'admin']}
            />
          }
        />
        <Route
          path="/bookings"
          element={
            <ProtectedRoute
              element={OrderHistoryPage}
              allowedRoles={['parent']}
            />
          }
        />
        <Route
          path="/wallet"
          element={
            <ProtectedRoute
              element={WalletPage}
              allowedRoles={['parent']}
            />
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute
              element={ParentHomePage}
              allowedRoles={['parent']}
            />
          }
        />
        <Route
          path="/payment-success"
          element={
            <ProtectedRoute
              element={PaymentSuccessPage}
              allowedRoles={['parent']}
            />
          }
        />

        {/* Protected Teacher Routes */}
        <Route
          path="/teacher"
          element={
            <ProtectedRoute
              element={AdminDashboard}
              allowedRoles={['teacher']}
            />
          }
        />
        <Route
          path="/teacher/dashboard"
          element={
            <ProtectedRoute
              element={DashboardPage}
              allowedRoles={['teacher']}
            />
          }
        />
        <Route
          path="/teacher/users"
          element={
            <ProtectedRoute
              element={UsersPage}
              allowedRoles={['teacher']}
            />
          }
        />
        <Route
          path="/teacher/menus"
          element={
            <ProtectedRoute
              element={AddMenu}
              allowedRoles={['teacher']}
            />
          }
        />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute
              element={AdminDashboard}
              allowedRoles={['admin']}
            />
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute
              element={DashboardPage}
              allowedRoles={['admin']}
            />
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute
              element={UsersPage}
              allowedRoles={['admin']}
            />
          }
        />
        <Route
          path="/admin/menus"
          element={
            <ProtectedRoute
              element={AddMenu}
              allowedRoles={['admin']}
            />
          }
        />
        <Route
          path="/admin/items"
          element={
            <ProtectedRoute
              element={AddItems}
              allowedRoles={['admin']}
            />
          }
        />
        <Route
          path="/admin/coupons"
          element={
            <ProtectedRoute
              element={CouponManagement}
              allowedRoles={['admin']}
            />
          }
        />
        <Route
          path="/admin/view-menus"
          element={
            <ProtectedRoute
              element={ViewMenus}
              allowedRoles={['admin']}
            />
          }
        />
      </Routes>

      {!isAdminRoute && !isTeacherRoute && <Footer />}
    </>
  );
}

export default App;

