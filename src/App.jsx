
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
import { useDispatch, useSelector } from "react-redux";
import ViewMenus from "./pages/admin/ViewMenus";
import { useEffect } from "react";
import { verifyToken } from "./redux/reducers/user/authSlice";
import AdminBookings from "./pages/admin/Bookings";
import RevenueTracking from "./pages/admin/Revenue";
import EditMenu from "./pages/admin/EditMenu";
import AddMenuItem from "./pages/admin/AddMenu";
import AdminFooter from "./pages/admin/Footer";
import Schools from "./pages/admin/Schools";
import ViewSchools from "./pages/admin/ViewSchools";
import AddSchool from "./pages/admin/AddSchool";
import EditSchool from "./pages/admin/EditSchool";
import AddItem from "./pages/admin/AddMenuItem";
import ViewItems from "./pages/admin/ViewMenuItem";
import EditItem from "./pages/admin/EditMenuItem";


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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

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
    <div className="min-h-screen flex flex-col">
    
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
              allowedRoles={['parent', 'teacher']}
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
              allowedRoles={['parent', 'teacher']}
            />
          }
        />
        <Route
          path="/wallet"
          element={
            <ProtectedRoute
              element={WalletPage}
              allowedRoles={['parent', 'teacher']}
            />
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute
              element={ParentHomePage}
              allowedRoles={['parent', 'teacher']}
            />
          }
        />
        <Route
          path="/payment-success"
          element={
            <ProtectedRoute
              element={PaymentSuccessPage}
              allowedRoles={['parent', 'teacher']}
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
          path="/admin/bookings"
          element={
            <ProtectedRoute
              element={AdminBookings}
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
          path="/admin/menus/add"
          element={
            <ProtectedRoute
              element={AddMenuItem}
              allowedRoles={['admin']}
            />
          }
        />
         <Route
          path="/admin/menus/edit"
          element={
            <ProtectedRoute
              element={EditMenu}
              allowedRoles={['admin']}
            />
          }
        />
         <Route
          path="/admin/menus/view"
          element={
            <ProtectedRoute
              element={ViewMenus}
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
          path="/admin/menuitems/add"
          element={
            <ProtectedRoute
              element={AddItem}
              allowedRoles={['admin']}
            />
          }
        />
         <Route
          path="/admin/menuitems/view"
          element={
            <ProtectedRoute
              element={ViewItems}
              allowedRoles={['admin']}
            />
          }
        />
         <Route
          path="/admin/menuitems/edit"
          element={
            <ProtectedRoute
              element={EditItem}
              allowedRoles={['admin']}
            />
          }
        />
         <Route
          path="/admin/schools"
          element={
            <ProtectedRoute
              element={Schools}
              allowedRoles={['admin']}
            />
          }
        />
           <Route
          path="/admin/schools/view"
          element={
            <ProtectedRoute
              element={ViewSchools}
              allowedRoles={['admin']}
            />
          }
        />
           <Route
          path="/admin/schools/add"
          element={
            <ProtectedRoute
              element={AddSchool}
              allowedRoles={['admin']}
            />
          }
        />
           <Route
          path="/admin/schools/edit"
          element={
            <ProtectedRoute
              element={EditSchool}
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
          <Route
          path="/admin/revenue"
          element={
            <ProtectedRoute
              element={RevenueTracking}
              allowedRoles={['admin']}
            />
          }
        />
        
      </Routes>

      {!isAdminRoute && !isTeacherRoute && <Footer />}
     
      {isAdminRoute&& <AdminFooter  />}
    </div>
  );
}

export default App;