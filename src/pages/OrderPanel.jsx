import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderPanel() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  // localStorage'dan zakazlarni o'qish
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-[280px] bg-gradient-to-b from-slate-800 via-blue-800 to-indigo-900 text-white flex flex-col px-6 py-10 shadow-2xl">
          <h2 className="text-3xl font-extrabold mb-16 text-center tracking-wide">
            ☕️ Admin Panel
          </h2>

          <nav className="space-y-6">
            <div
              onClick={() => navigate("/admins")}
              className="cursor-pointer p-3 rounded bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              🛒 Products
            </div>

            <div
              onClick={() => navigate("/")}
              className="cursor-pointer p-3 rounded bg-white/10 hover:bg-white/20"
            >
              🏚 Home
            </div>
          </nav>
        </div>

        {/* Main content */}
        <main className="flex-1 p-10">
          <div className="bg-white rounded-2xl shadow-lg px-8 py-6 mb-10">
            <h1 className="text-4xl font-bold text-gray-800">Orders</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
            <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-600">
                    <th className="py-4 font-bold pl-10">ID</th>
                    <th className="py-4 font-bold">F.I.O</th>
                    <th className="py-4 font-bold">Location</th>
                    <th className="py-4 font-bold">Phone</th>
                    <th className="py-4 font-bold">Orders</th>
                  </tr>
                </thead>
                <tbody className="text-lg">
                  {orders.length === 0 && (
                    <tr>
                      <td
                        colSpan="5"
                        className="text-center py-6 text-gray-400"
                      >
                        Hozircha zakaz yo‘q
                      </td>
                    </tr>
                  )}

                  {orders.map((order, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="py-4 pl-10">{index + 1}</td>
                      <td className="py-4">{order.fio}</td>
                      <td className="py-4">{order.location}</td>
                      <td className="py-4">{order.phone}</td>
                      <td className="py-4">
                        {order.orders.map((o, i) => (
                          <div key={i} className="flex justify-between gap-2">
                              <img
                                src={`/images/${order.img}`}
                                alt={order.name}
                                className="w-44 object-contain"
                              />
                          </div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default OrderPanel;
