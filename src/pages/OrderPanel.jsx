import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderPanel() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const deleteOrder = (id) => {
    const filtered = orders.filter((order) => order.id !== id);
    setOrders(filtered);
    localStorage.setItem("orders", JSON.stringify(filtered));
  };

  

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <div className="flex min-h-screen">

        <div className="w-[280px] bg-gradient-to-b from-slate-800 via-blue-800 to-indigo-900 text-white flex flex-col px-6 py-10 shadow-2xl">
          <h2 className="text-3xl font-extrabold mb-16 text-center tracking-wide">
            ☕️ Admin Panel
          </h2>

          <nav className="space-y-6">
            <div
              onClick={() => navigate("/admins")}
              className="cursor-pointer p-3 rounded bg-white/10 hover:bg-white/20"
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

        <main className="flex-1 p-10">
          <div className="bg-white rounded-2xl shadow-lg px-8 py-6 mb-10">
            <h1 className="text-4xl font-bold text-gray-800">Orders</h1>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-x-auto p-6">
           

            {orders.map((order, index) => (
              <div
                key={order.id}
                className=" border-gray-700 pb-6 mb-6"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p><span>ID:</span> {index + 1}</p>
                    <p><span>FIO:</span> {order.fio}</p>
                    <p><span>Location:</span> {order.location}</p>
                    <p><span>Phone:</span> {order.phone}</p>
                  </div>

                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>

                <div className="flex flex-wrap gap-6 mt-6">
                  {order.orders.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-100 p-4 rounded-xl shadow w-[180px]"
                    >
                      <img
                        src={`/images/${item.img}`}
                        alt={item.name}
                        className="w-full h-24 object-contain mb-2"
                      />
                      <p className="font-semibold text-center">
                        {item.name}
                      </p>
                      <p className="text-center text-sm">
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default OrderPanel;