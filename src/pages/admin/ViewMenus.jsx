import { useState, useEffect } from 'react';
import { FaCalendarWeek } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import Sidebar from '../../components/Admin/Sidebar';
import { baseURL } from '../../common/api';

const ViewMenus = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [weekRange, setWeekRange] = useState({
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(new Date().setDate(new Date().getDate() + 6)).toISOString().split('T')[0]
  });

  const fetchWeeklyMenus = async (startDate, endDate) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${baseURL}/api/admin/weekly-menu?startDate=${startDate}&endDate=${endDate}`,
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
    fetchWeeklyMenus(weekRange.startDate, weekRange.endDate);
  }, [weekRange]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
    });
  };

  const renderMealItems = (items) => {
    if (!items || items.length === 0) {
      return <p className="text-gray-500 italic">No items added</p>;
    }

    return items.map((item, index) => (
      <div key={index} className="bg-gray-50 p-2 rounded-lg border border-gray-200 mb-1 text-xs">
        <h4 className="font-semibold text-gray-900">{item.name}</h4>
      </div>
    ));
  };

  const renderTable = () => (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-[#eb671c]">
            <th className="px-2 py-2 border text-left text-xs sm:text-sm">Week</th>
            <th className="px-2 py-2 border text-left text-xs sm:text-sm">Breakfast</th>
            <th className="px-2 py-2 border text-left text-xs sm:text-sm">Lunch</th>
            <th className="px-2 py-2 border text-left text-xs sm:text-sm">Snacks</th>
          </tr>
        </thead>
        <tbody>
          {menus.map((menu, index) => (
            <tr key={index} className="bg-white hover:bg-gray-50">
              <td className="px-2 py-2 border text-xs sm:text-sm">{formatDate(menu.date)}</td>
              <td className="px-2 py-2 border text-xs sm:text-sm max-w-[150px]">
                <div className="overflow-y-auto max-h-32 scrollbar-thin scrollbar-thumb-gray-300">
                  {renderMealItems(menu.meals.breakfast)}
                </div>
              </td>
              <td className="px-2 py-2 border text-xs sm:text-sm max-w-[150px]">
                <div className="overflow-y-auto max-h-32 scrollbar-thin scrollbar-thumb-gray-300">
                  {renderMealItems(menu.meals.lunch)}
                </div>
              </td>
              <td className="px-2 py-2 border text-xs sm:text-sm max-w-[150px]">
                <div className="overflow-y-auto max-h-32 scrollbar-thin scrollbar-thumb-gray-300">
                  {renderMealItems(menu.meals.snack)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <ToastContainer position="top-right" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col w-full p-6">
            <h1 className="text-2xl font-bold text-center text-gray-900">View Menu</h1>
          </div>

          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="date"
                value={weekRange.startDate}
                onChange={(e) => setWeekRange(prev => ({ ...prev, startDate: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
              />
              <input
                type="date"
                value={weekRange.endDate}
                onChange={(e) => setWeekRange(prev => ({ ...prev, endDate: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-sm"
              />
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            renderTable()
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewMenus;