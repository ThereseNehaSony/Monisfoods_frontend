import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../../components/Admin/Sidebar";
import { baseURL } from "../../common/api";
import axios from "axios";

const EditMenus = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  const [weekRange, setWeekRange] = useState({
    startDate: new Date().toISOString().split("T")[0],
    endDate: new Date(new Date().setDate(new Date().getDate() + 6)).toISOString().split("T")[0],
  });
  const [availableItems, setAvailableItems] = useState([]);
  const [availableMeals, setAvailableMeals] = useState([
    "Pancakes",
    "Omelette",
    "Salad",
    "Pizza",
    "Sandwich",
    "Soup",
  ]);

  useEffect(() => {
    axios.get(`${baseURL}/api/admin/menu-items`)
      .then((response) => {
        console.log(response.data, "items")
        setAvailableItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching available items", error);
        toast.error("Failed to fetch menu items");
      });
  }, []);


  const fetchWeeklyMenus = async (startDate, endDate) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${baseURL}/api/admin/weekly-menu?startDate=${startDate}&endDate=${endDate}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch weekly menus");
      }

      if (data && Object.keys(data).length > 0) {
        const formattedMenus = Object.entries(data)
          .map(([date, meals]) => ({
            date,
            meals: {
              breakfast: meals.breakfast || [],
              lunch: meals.lunch || [],
              snack: meals.snack || [],
            },
          }))
          .sort((a, b) => new Date(a.date) - new Date(b.date));

        setMenus(formattedMenus);
      } else {
        setMenus([]);
      }
    } catch (error) {
      console.error("Weekly menu fetch error:", error);
      toast.error(error.message || "Failed to fetch weekly menus");
      setMenus([]);
    } finally {
      setLoading(false);
    }
  };

  const handleMealChange = (date, mealType, index, value) => {
    setMenus((prevMenus) =>
      prevMenus.map((menu) =>
        menu.date === date
          ? {
              ...menu,
              meals: {
                ...menu.meals,
                [mealType]: menu.meals[mealType].map((item, idx) =>
                  idx === index ? { ...item, name: value } : item
                ),
              },
            }
          : menu
      )
    );
  };

  const handleSaveChanges = async () => {
    try {
      // Make an API call to save changes to the backend
      const response = await fetch(`${baseURL}/api/admin/update-weekly-menu`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(menus),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save changes");
      }

      toast.success("Menu updated successfully!");
    } catch (error) {
      console.error("Save menu error:", error);
      toast.error(error.message || "Failed to save changes");
    }
  };

  useEffect(() => {
    fetchWeeklyMenus(weekRange.startDate, weekRange.endDate);
  }, [weekRange]);

  const renderMealItems = (date, mealType, items) => {
    if (!items || items.length === 0) {
      return <p className="text-gray-500 italic">No items added</p>;
    }

    return items.map((item, index) => (
      <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2">
        <select
          value={item.name}
          onChange={(e) => handleMealChange(date, mealType, index, e.target.value)}
          className="border px-2 py-1 rounded w-full"
        >
           {availableItems.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name} 
              </option>
          ))}
        </select>
      </div>
    ));
  };

  const renderTable = () => (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-2 border text-left">Week</th>
            <th className="px-4 py-2 border text-left">Breakfast</th>
            <th className="px-4 py-2 border text-left">Lunch</th>
            <th className="px-4 py-2 border text-left">Snacks</th>
          </tr>
        </thead>
        <tbody>
          {menus.map((menu, index) => (
            <tr key={index} className="bg-white hover:bg-gray-50">
              <td className="px-4 py-2 border">{new Date(menu.date).toLocaleDateString()}</td>
              <td className="px-4 py-2 border">
                {renderMealItems(menu.date, "breakfast", menu.meals.breakfast)}
              </td>
              <td className="px-4 py-2 border">
                {renderMealItems(menu.date, "lunch", menu.meals.lunch)}
              </td>
              <td className="px-4 py-2 border">
                {renderMealItems(menu.date, "snack", menu.meals.snack)}
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
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Edit Weekly Menus</h1>
          </div>

          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                value={weekRange.startDate}
                onChange={(e) => setWeekRange((prev) => ({ ...prev, startDate: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="date"
                value={weekRange.endDate}
                onChange={(e) => setWeekRange((prev) => ({ ...prev, endDate: e.target.value }))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              {renderTable()}
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleSaveChanges}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditMenus;
