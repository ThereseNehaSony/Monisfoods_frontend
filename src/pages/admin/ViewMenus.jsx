import { useState, useEffect } from 'react';
import { FaCalendar, FaCalendarWeek } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import Sidebar from '../../components/Admin/Sidebar';

const ViewMenus = () => {
  const [viewType, setViewType] = useState('daily');
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [weekRange, setWeekRange] = useState({
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(new Date().setDate(new Date().getDate() + 6)).toISOString().split('T')[0]
  });

  const API_BASE_URL = 'http://monis-foods-backend.vercel.app/api/admin';

  const fetchDailyMenu = async (date) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/daily-menu/${date}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch daily menu');
      }

      if (data && (data.meals || data)) {
        const menuData = data.meals ? data : { date: date, meals: data };
        setMenus([menuData]);
      } else {
        setMenus([]);
      }
    } catch (error) {
      console.error('Daily menu fetch error:', error);
      toast.error(error.message || "Failed to fetch daily menu");
      setMenus([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeeklyMenus = async (startDate, endDate) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_BASE_URL}/weekly-menu?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch weekly menus');
      }

      if (data && Object.keys(data).length > 0) {
        const formattedMenus = Object.entries(data).map(([date, meals]) => ({
          date,
          meals: {
            breakfast: meals.breakfast || [],
            lunch: meals.lunch || [],
            snack: meals.snack || []
          }
        })).sort((a, b) => new Date(a.date) - new Date(b.date)); 

        setMenus(formattedMenus);
      } else {
        setMenus([]);
      }
    } catch (error) {
      console.error('Weekly menu fetch error:', error);
      toast.error(error.message || "Failed to fetch weekly menus");
      setMenus([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('Current menus state:', menus);
  }, [menus]);

  useEffect(() => {
    if (viewType === 'daily') {
      fetchDailyMenu(selectedDate);
    } else {
      fetchWeeklyMenus(weekRange.startDate, weekRange.endDate);
    }
  }, [viewType, selectedDate, weekRange]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const renderMealItems = (items) => {
    if (!items || items.length === 0) {
      return <p className="text-gray-500 italic">No items added</p>;
    }

    return items.map((item, index) => (
      <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-semibold text-gray-900">{item.name}</h4>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          </div>
          {item.image && (
            <img 
              src={item.image} 
              alt={item.name}
              className="w-16 h-16 rounded-md object-cover"
            />
          )}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.portions && Object.entries(item.portions).map(([size, price]) => (
            price && (
              <span key={size} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {size}: {formatPrice(price)}
              </span>
            )
          ))}
        </div>
      </div>
    ));
  };

  const renderMealSection = (title, items, colorClass) => (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h4 className={`text-lg font-semibold ${colorClass} mb-4`}>{title}</h4>
      <div className="space-y-4">
        {renderMealItems(items)}
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <ToastContainer position="top-right" />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">View Menus</h1>
            
            <div className="flex gap-3">
              <button
                onClick={() => setViewType('daily')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  viewType === 'daily'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FaCalendar className="text-lg" />
                <span>Daily</span>
              </button>
              <button
                onClick={() => setViewType('weekly')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  viewType === 'weekly'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FaCalendarWeek className="text-lg" />
                <span>Weekly</span>
              </button>
            </div>
          </div>

          <div className="mb-6">
            {viewType === 'daily' ? (
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="date"
                  value={weekRange.startDate}
                  onChange={(e) => setWeekRange(prev => ({ ...prev, startDate: e.target.value }))}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="date"
                  value={weekRange.endDate}
                  onChange={(e) => setWeekRange(prev => ({ ...prev, endDate: e.target.value }))}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="space-y-8">
              {menus.map((menu, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {formatDate(menu.date)}
                    </h3>
                  </div>
                  <div className="p-6 space-y-6">
                    {renderMealSection("Breakfast", menu.meals?.breakfast, "text-blue-600")}
                    {renderMealSection("Lunch", menu.meals?.lunch, "text-green-600")}
                    {renderMealSection("Snacks", menu.meals?.snack, "text-orange-600")}
                  </div>
                </div>
              ))}

              {menus.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    No menus found for the selected {viewType} period
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewMenus;   