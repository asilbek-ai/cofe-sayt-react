import React from "react";
import rasm from "../../public/Logo.png";
import img from "../../public/imagem.png";
import images from "../../public/Image.png";
import Header from "../components/Header";

function Deliver() {
  return (
    <div>
      <header className="sticky top-0 bg-white/30 backdrop-blur shadow z-50 mb-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4">
          <img src={rasm} alt="" />

          {/* <ul className="flex gap-10 text-sm font-semibold">
                <li>
                    <a className="text-[#574F4D] hover:text-[#C47F17] transition" href="./index.html">HOME</a>
                </li>
                <li>
                    <a className="text-[#574F4D] hover:text-[#C47F17] transition" href="./index2.html">CHECKOUT</a>
                </li>
                <li>
                    <a className="text-[#574F4D] hover:text-[#C47F17] transition" href="./index3.html">SUCCESS</a>
                </li>
                <li>
                    <a className="text-[#574F4D] hover:text-[#C47F17] transition" href="./adminProducts.html">Admin Product</a>
                </li>
                <li>
                    <a className="text-[#574F4D] hover:text-[#C47F17] transition" href="./order.html">Order Product</a>
                </li>
            </ul> */}
          <Header />

          <div className="flex gap-3">
            <div className="flex items-center gap-2 text-[#4B2995] bg-[#EBE5F9] px-4 py-2 rounded-xl text-sm font-medium">
              <i className="fa-solid fa-location-dot"></i>
              Porto Alegre, RS
            </div>

            <div className="relative text-[#C47F17] bg-[#F1E9C9] p-3 rounded-xl hover:scale-105 transition">
              <i className="fa-solid fa-cart-shopping text-lg"></i>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto mt-10">
    <h1 className="text-xl text-[#C47F17] font-extrabold">
      Uhu! Pedido confirmado
    </h1>
    <p className="text-xl font-normal">
      Agora é só aguardar que logo o café chegará até você
    </p>
  </div>
    </div>
  );
}

export default Deliver;
