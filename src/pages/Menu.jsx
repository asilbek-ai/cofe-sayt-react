import React, { useEffect, useState } from "react";
import rasm from "../../public/Logo.png";
import img from "../../public/imagem.png";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cofes"));
    if (stored) {
      const withCount = stored.map((item) => ({ ...item, count: 0 }));
      setProducts(withCount);
    }
  }, []);

  const increase = (id) => {
    const updated = products.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item,
    );

    setProducts(updated);

    let basket = JSON.parse(localStorage.getItem("car-shop")) || [];

    const existing = basket.find((item) => Number(item.cofeId) === Number(id));

    if (existing) {
      existing.count += 1;
    } else {
      basket.push({ cofeId: id, count: 1 });
    }

    localStorage.setItem("car-shop", JSON.stringify(basket));
  };

  const decrease = (id) => {
    const updated = products.map((item) =>
      item.id === id && item.count > 0
        ? { ...item, count: item.count - 1 }
        : item,
    );

    setProducts(updated);

    let basket = JSON.parse(localStorage.getItem("car-shop")) || [];

    basket = basket
      .map((item) =>
        Number(item.cofeId) === Number(id)
          ? { ...item, count: item.count - 1 }
          : item,
      )
      .filter((item) => item.count > 0);

    localStorage.setItem("car-shop", JSON.stringify(basket));
  };

  function carshop() {
    const basket = JSON.parse(localStorage.getItem("car-shop")) || [];

    if (basket.length > 0) {
      navigate("/orders");
    } else {
      alert("cofe tanlang");
    }
  }

  return (
    <div>
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

      <div className="flex gap-5 items-center max-w-7xl m-auto mt-20">
        <div className="max-w-[60%]">
          <h1 className="text-5xl font-extrabold mb-6">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-2xl mb-10">
            Com o Coffee Delivery você recebe seu café onde estiver
          </p>
        </div>
        <img src={img} alt="" />
      </div>

      <div className="mt-20 max-w-7xl m-auto">
        <h1 className="text-2xl font-medium mb-6">Nossos cafés</h1>

        <div className="flex flex-wrap justify-evenly">
          {products.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] bg-[#f3f2f2] p-6 mt-14 hover:rounded-tr-[190px] rounded-2xl shadow-xl/30 hover:shadow-xl transition-all duration-900 group"
            >
              <div className="flex justify-center -mt-10">
                <img
                  src={`/images/${item.img}`}
                  alt={item.name}
                  className="w-34 animate-spin [animation-duration:5s] object-contain"
                />
              </div>
              <div className=" flex justify-center ">
                <button className="text-[#C47F17] rounded-full mt-2 px-3 bg-[#F1E9C9]">
                  Tradicional
                </button>
              </div>
              <p className="text-center text-xl font-bold mt-4">{item.name}</p>

              <p className="text-[#8D8686] text-center text-sm mt-3">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-8">
                <div className="flex items-end gap-1">
                  <span className="text-sm">R$</span>
                  <span className="text-2xl font-extrabold">{item.price}</span>
                </div>

                <div className="flex items-center bg-[#E6E5E5] rounded-xl px-4 py-2 gap-4 text-lg">
                  <button
                    onClick={() => decrease(item.id)}
                    className=" cursor-pointer text-[#8047F8] font-bold"
                  >
                    −
                  </button>

                  <span className="font-semibold">{item.count}</span>

                  <button
                    onClick={() => increase(item.id)}
                    className=" cursor-pointer text-[#8047F8] font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={carshop}
                  className="p-3 bg-[#4B2995] rounded-xl"
                >
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
