import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import rasm from "../../public/Logo.png";
import { useNavigate } from "react-router-dom";



function Deliver() {
  const navigate = useNavigate();
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // agar object bo‘lib qolgan bo‘lsa arrayga o‘tkazamiz
    if (
      !Array.isArray(orders) &&
      orders &&
      Object.keys(orders).length > 0
    ) {
      orders = [orders];
    }

    setAllOrders(orders);
  }, []);

    function carshop() {

      navigate("/");
    
    
  }

  return (
    <div className="">
    <header className="sticky top-0 bg-white/80 backdrop-blur shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4">
          <img src={rasm} alt="" />
          <Header />
          <div className="flex gap-3">
            <div className="flex items-center gap-2 text-[#4B2995] bg-[#EBE5F9] px-4 py-2 rounded-xl text-sm font-medium">
              <i className="fa-solid fa-location-dot"></i>
              Porto Alegre, RS
            </div>

            <div
              onClick={carshop}
              className="relative cursor-pointer text-[#C47F17] bg-[#F1E9C9] p-3 rounded-xl hover:scale-105 transition"
            >
              <i className="fa-solid fa-cart-shopping text-lg"></i>
            </div>
          </div>
        </div>
      </header>
      {allOrders.length > 0 ? (

        <div className="flex flex-wrap gap-6 max-w-7xl mx-auto mt-10">

          {allOrders.map((order, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-10 shadow hover:shadow-lg w-96"
            >

              <div className="flex gap-3 items-center">
                <i className="fa-solid fa-location-dot text-[#8047f8] text-xl"></i>

                <div className="flex items-center gap-10">
                  <p className="text-xs text-gray-400 uppercase font-semibold">
                    Location
                  </p>

                  <p className="text-base font-medium text-gray-500">
                    {order.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center my-7">
                <i className="fa-solid fa-user-secret text-[#DBAC2C] text-xl"></i>

                <div className="flex items-center gap-10">
                  <p className="text-xs text-gray-400 uppercase font-semibold">
                    F.I.O
                  </p>

                  <p className="text-base font-medium text-gray-500">
                    {order.fio}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <i className="fa-solid fa-phone text-green-600 text-xl"></i>

                <div className="flex items-center gap-10">
                  <p className="text-xs text-gray-400 uppercase font-semibold">
                    Tel raqam
                  </p>

                  <p className="text-base font-semibold text-blue-600">
                    {order.phone}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      ) : (

        <div className="text-center text-gray-500 text-lg">
        </div>

      )}

    </div>
  );
}

export default Deliver;