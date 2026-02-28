import React, { use, useEffect, useState } from "react";
import rasm from "../../public/Logo.png";
import img from "../../public/imagem.png";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cofes"));
    if (stored) {
      const withCount = stored.map((item) => ({ ...item, count: 0 }));
      setProducts(withCount);
    }
  }, []);

  
  const increase = (id) => {
    setProducts(
      products.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setProducts(
      products.map((item) =>
        item.id === id && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      )
    );


  };
  function carshop(){
    navigate("/orders")
  }

  return (
    <div className="">
    
     <header className="sticky top-0 bg-white/80 backdrop-blur shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4">
    <img src={rasm} alt="" />                
     <Header/>
            <div className="flex gap-3 ">
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

      <div className="flex gap-5 items-center max-w-7xl m-auto mt-20">
        <div class="max-w-[60%]">
            <div>
                <h1 class="text-5xl font-extrabold mb-6">
                    Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p class="text-2xl mb-10">
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </p>
            </div>
            <div class="flex gap-15">
                <div>
                    <div class="flex items-center gap-2">
                        <div class="p-2 bg-[#C47F17] inline-block rounded-[50%] text-sm">
                            <i class="  fa-solid fa-cart-shopping  text-[#fff]"></i>
                        </div>
                        <p>
                            Compra simples e segura
                        </p>
                    </div>
                    <div class="flex items-center gap-2 mt-4">
                        <div class="p-2 bg-[#DBAC2C] inline-block rounded-[50%] text-sm">
                            <i class="  fa-solid fa-alarm-clock text-[#fff]"></i>
                        </div>
                        <p>
                            Entrega rápida e rastreada
                        </p>
                    </div>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <div class="p-2 bg-[#574F4D] inline-block rounded-[50%] text-sm">
                            <i class="  fa-solid fa-box-open text-[#fff]"></i>
                        </div>
                        <p>
                            Embalagem mantém o café intacto
                        </p>
                    </div>
                    <div class="flex items-center gap-2 mt-4">
                        <div class="p-2 bg-[#8047F8] inline-block rounded-[50%] text-sm">
                            <i class="  fa-solid fa-mug-saucer text-[#fff]"></i>
{/* animate-spin [animation-duration:2s] */}
                        </div>
                        <p>
                            O café chega fresquinho até você
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <img className="" src={img} alt="" />
      </div>

      <div className="mt-20 max-w-7xl m-auto">
        <h1 className="text-2xl font-medium mb-6">Nossos cafés</h1>

        <div className="flex flex-wrap justify-evenly">
          {products.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] 
         bg-[#f3f2f2] p-6 mt-14 hover:rounded-tr-[190px] rounded-2xl shadow-xl/30 
         hover:shadow-xl transition-all duration-900 group"
            >
              <div className="flex justify-center -mt-10">
                <img
                  src={`/images/${item.img}`}
                  alt={item.name}
                  className="w-44 h-34  object-contain"
                />
              </div>

              <div className="flex justify-center mt-4 mb-5">
                <span
                  className="px-4 py-1 text-sm cursor-pointer font-semibold rounded-full 
                  bg-[#F1E9C9] text-[#C47F17]"
                >
                  Tradicional
                </span>
              </div>

              <p className="text-center text-xl font-bold text-[#403937]">
                {item.name}
              </p>

             
              <p className="text-[#8D8686] text-center text-sm mt-3 leading-relaxed">
                {item.description}
              </p>

              
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-end gap-1">
                  <span className="text-sm text-[#574F4D]">R$</span>
                  <span className="text-2xl font-extrabold text-[#574F4D]">
                    {item.price}
                  </span>
                </div>

                <div className="flex items-center bg-[#E6E5E5] rounded-xl px-4 py-2 gap-4 text-lg">
                  <button
                    onClick={() => decrease(item.id)}
                    className="text-[#8047F8] font-bold hover:scale-125 transition"
                  >
                    −
                  </button>

                  <span className="font-semibold text-[#403937]">
                    {item.count}
                  </span>

                  <button
                    onClick={() => increase(item.id)}
                    className="text-[#8047F8] font-bold hover:scale-125 transition"
                  >
                    +
                  </button>
                </div>

                <button onClick={carshop} className="p-3 bg-[#4B2995] rounded-xl hover:bg-[#3a1f7a] transition">
                  <i className="fa-solid fa-cart-shopping text-white"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      
    </div>
  );
}

export default Menu;