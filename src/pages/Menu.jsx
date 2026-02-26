import React from "react";
import rasm from "../../public/Logo.png";
import img from "../../public/imagem.png";
import images from "../../public/Image.png"
import Header from "../components/Header";
function Menu() {
  return (
    <div>
      <header className="sticky top-0 bg-white/20 backdrop-blur shadow-xl/20 z-50 mb-20">
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
            <Header/>

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
      <div className="flex gap-5 items-center max-w-7xl m-auto">
        <div className="max-w-[60%]">
          <div>
            <h1 className="text-5xl font-extrabold mb-6">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-2xl mb-10">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="flex gap-15">
            <div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#C47F17] inline-block rounded-[50%] text-sm">
                  <i className="fa-solid fa-cart-shopping  text-[#fff]"></i>
                </div>
                <p>Compra simples e segura</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="p-2 bg-[#DBAC2C] inline-block rounded-[50%] text-sm">
                  <i className="fa-solid fa-alarm-clock text-[#fff]"></i>
                </div>
                <p>Entrega rápida e rastreada</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#574F4D] inline-block rounded-[50%] text-sm">
                  <i className="fa-solid fa-box-open text-[#fff]"></i>
                </div>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="p-2 bg-[#8047F8] inline-block rounded-[50%] text-sm">
                  <i class="fa-solid fa-mug-hot text-[#fff]"></i>
                </div>
                <p>O café chega fresquinho até você</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={img} />{" "}
        </div>
      </div>
      <div className="mt-20 max-w-7xl m-auto">
        <h1 className="text-2xl font-medium">Nossos cafés</h1>
        <div
          id="cofe-div"
          className="flex justify-between flex-wrap mb-30">
                   <div
  class="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] 
         bg-[#d5d5d5] p-6 mt-14 rounded-tr-4xl hover:rounded-tr-[190px] hover:rounded-bl-4xl shadow-xl/30 
         hover:shadow-xl transition-all duration-900 group">

 
  <div class="flex justify-center -mt-10">
    <img src={images} alt="" />
  </div>

 
  <div class="flex justify-center mt-4 mb-5">
    <span
      class="px-4 py-1 text-sm font-semibold rounded-full 
             bg-[#F1E9C9] text-[#C47F17]">
      Tradicional
    </span>
  </div>

  <p class="text-center text-xl font-bold text-[#403937]">
   Expresso Americano
  </p>

  <p class="text-[#8D8686] text-center text-sm mt-3 leading-relaxed">
    O tradicional café feito com água quente e grãos moídos
  </p>

  <div class="flex items-center justify-between mt-8">
    
    <div class="flex items-end gap-1 item-center">
      <span class="text-sm text-[#574F4D]">R$</span>
      <span class="text-2xl font-extrabold text-[#574F4D]">
        9,90
      </span>
    </div>

    <div
      class="flex items-center bg-[#E6E5E5] rounded-xl px-4 py-2 gap-4 text-lg">
      <button
       
        class="text-[#8047F8] font-bold hover:scale-125 transition">
        −
      </button>

      <span  class="font-semibold text-[#403937]">
        0
      </span>

      <button
        
        class="text-[#8047F8] font-bold hover:scale-125 transition">
        +
      </button>
    </div>

   
    <button
      class="p-3 bg-[#4B2995] rounded-xl hover:bg-[#3a1f7a] transition">
        <i class="fa-solid fa-cart-shopping text-white"></i>
      </button>
  </div>
</div>
          </div>
      </div>
    </div>
  );
}

export default Menu;
