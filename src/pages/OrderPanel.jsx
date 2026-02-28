import React from 'react'
import { useNavigate } from "react-router-dom";


function OrderPanel() {
    const navigate = useNavigate()




  function orderPanelga(){
    navigate("/orders")
  }
  return (
<div class="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
  <div class="flex min-h-screen">

    <div
      class="w-[280px] bg-gradient-to-b from-slate-800 via-blue-800 to-indigo-900 text-white flex flex-col px-6 py-10 shadow-2xl">
      <h2 class="text-3xl font-extrabold mb-16 text-center tracking-wide">
        ☕️ Admin Panel
      </h2>

      <nav class="space-y-6">
        {/* <div  onClick={() => navigate("/orderpanel")} 
          class="flex items-center gap-4 px-6 py-4 rounded-xl text-xl font-semibold bg-white text-blue-800 shadow-lg">
          <i class="fa-solid fa-clipboard-list text-2xl"></i>
          Orders
        </div> */}

        <div  onClick={() => navigate("/admins")}
          class="cursor-pointer p-3 rounded bg-white/10 hover:bg-white/20 transition-all duration-300">
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

    <main class="flex-1 p-10">

      <div class="bg-white rounded-2xl shadow-lg px-8 py-6 mb-10">
        <h1 class="text-4xl font-bold text-gray-800">Orders</h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <div class="lg:col-span-4 bg-white rounded-2xl shadow-lg  ">
          <table class="w-full text-left">
            <thead className=''>
              <tr class=" text-gray-600">
                <th class="py-4 font-bold pl-10">ID.</th>
                <th class="py-4 font-bold">F.I.O</th>
                <th class="py-4 font-bold">Location..</th>
                <th class="py-4 font-bold">Phone</th>
              </tr>
            </thead>
            <tbody  class="text-lg">   
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>

</div>
  )
}

export default OrderPanel