import React from 'react'
import Header from "../components/Header";
import rasm from "../../public/Logo.png";


function Orders() {
  return (
    <body className="m-auto mb-20">
  <header className="sticky top-0 bg-white/80 backdrop-blur shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4">
    <img src={rasm} alt="" />                
     <Header/>
            <div className="flex gap-3">
                <div
                    className="flex items-center gap-2 text-[#4B2995] bg-[#EBE5F9] px-4 py-2 rounded-xl text-sm font-medium">
                    <i className="fa-solid fa-location-dot"></i>
                    Porto Alegre, RS
                </div>

                <div 
                    className="relative text-[#C47F17] bg-[#F1E9C9] p-3 rounded-xl hover:scale-105 transition">
                    <i className="fa-solid fa-cart-shopping text-lg"></i>
                </div>
            </div>
        </div>
    </header>


  <div className="flex max-w-7xl mx-auto gap-25 ">
    <div className="mt-10">
      <h1 className="text-xl font-bold">
        Complete seu pedido
      </h1>
      <div className="bg-[#F3F2F2] p-10  rounded-2xl mt-4">
        <div className="flex mb-10">
          <div>
            <i className="fa-solid fa-location-dot text-[#C47F17] "></i>
          </div>
          <div>
            <p className="text-xl text-[#403937]">
              Endereço de Entrega
            </p>
            <p className="text-[#574F4D]">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>
        <div>
          <input id="fio" className="bg-[#EDEDED] p-3 rounded-sm border-1 border-[#E6E5E5] w-full" type="text"
            placeholder="FIO"/>
        </div>
        <div>
          <input id="location" className="bg-[#EDEDED] p-3 rounded-sm mt-4 mb-4 w-full border-1 border-[#E6E5E5]"
            type="text" placeholder="MANZIL"/>
        </div>
        <div className="flex gap-4 mb-4">
          <input id="phone" className="bg-[#EDEDED] w-full p-3 rounded-sm border-1 border-[#E6E5E5]" type="number"
            placeholder="TELEFON RAQAM"/>
        </div>
        
            <div className="flex gap-2">
          <button 
            class="text-2xl cursor-pointer font-semibold text-[#fff] bg-[#DBAC2C] py-3 w-full rounded-xl">
            
            Tasdiqlash
          </button>
          </div>
          
        
      </div>
      <div className="mt-20 bg-[#F3F2F2] p-10  rounded-2xl">
        <div>
          <div className="flex mb-10 gap-2">
            <div>
              <i className="fa-solid fa-dollar-sign text-[#8047F8] text-xl"></i>
            </div>
            <div>
              <p className="text-xl text-[#403937]">
                Pagamento
              </p>
              <p className="text-[#574F4D]">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 py-5">
          <div className="bg-[#EDEDED] p-4 rounded-sm border-1 border-[#E6E5E5] hover:bg-[#EBE5F9] hover:border-[#8047F8]">
            <i className="fa-solid fa-money-check-dollar text-[#8047F8]"></i> Cartão de crédito
          </div>
          <div className="bg-[#EDEDED] p-4 rounded-sm border-1 border-[#E6E5E5] hover:bg-[#EBE5F9] hover:border-[#8047F8]">
            <i className="fa-solid fa-building-columns text-[#8047F8]"></i> cartão de débito
          </div>
          <div
            className="bg-[#EDEDED] p-4 rounded-sm border-1 border-[#E6E5E5] w-40 text-center  hover:bg-[#EBE5F9] hover:border-[#8047F8] ">
            <i className="fa-solid fa-window-maximize text-[#8047F8]"></i> dinheiro
          </div>
        </div>
      </div>

    </div>

    <div className="w-[45%]">
      <h1 className="text-xl font-bold mt-10">
        Cafés selecionados
      </h1>
      <div id="basket" className="bg-[#F3F2F2]  rounded-2xl mt-4 px-10">

      </div>
      <div className="bg-[#F3F2F2]  rounded-2xl mt-20 px-10">
       <div className="flex flex-col gap-4 pt-6">
            <div className="flex justify-between">
              <h1>Cofelar narxi</h1>
              <p>R$ <span  id="cofe-price"></span></p>
            </div>
            <div class="flex justify-between">
              <h1>Entrega</h1>
              <p>R$ <span  id="entrega-price">0</span></p>
            </div>
            <div class="flex justify-between font-bold">
              <h1>Total</h1>
              <p>R$ <span  id="total-price"></span></p>
            </div>
          </div>
        <div className="pt-10 pb-5">
            <button className="text-2xl cursor-pointer font-semibold text-[#fff] bg-[#DBAC2C] py-3 w-full rounded-xl">
            Orqaga
          </button>
          
        </div>
      </div>
    </div>
  </div>
</body>
  )
}

export default Orders