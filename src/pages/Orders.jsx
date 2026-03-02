import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Orders() {
  const navigate = useNavigate();

  const [basket, setBasket] = useState([]);
  const [cofes, setCofes] = useState([]);
  const [form, setForm] = useState({
    fio: "",
    location: "",
    phone: "",
  });

 
  useEffect(() => {
    const storedCofes =
      JSON.parse(localStorage.getItem("cofes")) || [];

    const storedBasket =
      JSON.parse(localStorage.getItem("car-shop")) || [];

    setCofes(storedCofes);
    setBasket(storedBasket);
  }, []);

 
  const saveBasket = (data) => {
    localStorage.setItem("car-shop", JSON.stringify(data));
    setBasket(data);
  };

  
  const getProduct = (id) => {
    return cofes.find(
      (c) => Number(c.id) === Number(id)
    );
  };

  
  const addCofe = (id) => {
    const updated = [...basket];
    const existing = updated.find(
      (item) => Number(item.cofeId) === Number(id)
    );

    if (existing) {
      existing.count += 1;
    } else {
      updated.push({ cofeId: id, count: 1 });
    }

    saveBasket(updated);
  };

 
  const removeCofe = (id) => {
    const updated = basket
      .map((item) =>
        Number(item.cofeId) === Number(id)
          ? { ...item, count: item.count - 1 }
          : item
      )
      .filter((item) => item.count > 0);

    saveBasket(updated);
  };

  
  const removeItem = (id) => {
    const updated = basket.filter(
      (item) => Number(item.cofeId) !== Number(id)
    );

    saveBasket(updated);
  };

  const sum = basket.reduce((total, item) => {
    const product = getProduct(item.cofeId);
    if (!product) return total;

    return total + product.price * item.count;
  }, 0);

  const entrega = basket.length > 0 ? 350 : 0;
  const total = sum + entrega;

  const confirmOrder = () => {
    if (
      form.fio.length < 3 ||
      form.location.length < 3 ||
      form.phone.length < 7
    ) {
      alert("Ma'lumotlarni to‘g‘ri kiriting");
      return;
    }

    if (basket.length === 0) {
      alert("Savatcha bo‘sh");
      return;
    }

    const newOrder = {
      ...form,
      orders: basket,
      date: new Date().toISOString(),
    };

    const allOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([...allOrders, newOrder])
    );

    localStorage.removeItem("car-shop");
    setBasket([]);

    navigate("/Deliver");
  };
  

  return (
    <div>
         <Header/>
    <div className="max-w-7xl mx-auto flex gap-20 mt-10">
      
          <div className="w-1/2">
        <h1 className="text-xl font-bold">
          Complete seu pedido
        </h1>

        <div className="bg-[#F3F2F2] p-10 rounded-2xl mt-4">
          <input
            className="w-full p-3 bg-[#EDEDED] mb-4"
            placeholder="FIO"
            value={form.fio}
            onChange={(e) =>
              setForm({ ...form, fio: e.target.value })
            }
          />

          <input
            className="w-full p-3 bg-[#EDEDED] mb-4"
            placeholder="MANZIL"
            value={form.location}
            onChange={(e) =>
              setForm({ ...form, location: e.target.value })
            }
          />

          <input
            className="w-full p-3 bg-[#EDEDED]"
            placeholder="TELEFON"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <button
            onClick={confirmOrder}
            className="mt-6 w-full bg-[#DBAC2C] text-white py-3 rounded-xl"
          >
            Tasdiqlash
          </button>
        </div>
      </div>

      <div className="w-1/2">
        <h1 className="text-xl font-bold">
          Tanlangan Cofelar
        </h1>

        <div className="bg-[#F3F2F2] rounded-2xl mt-4 p-6">
          {basket.length === 0 && (
            <p>Savatcha bo‘sh</p>
          )}

          {basket.map((item) => {
            const product = getProduct(item.cofeId);
            if (!product) return null;

            return (
              <div
                key={item.cofeId}
                className="flex justify-between items-center mb-6"
              >
                <div className="flex gap-4">
                  <img
                    className="w-16"
                    src={`/images/${product.img}`}
                    alt=""
                  />

                  <div>
                    <h1>{product.name}</h1>

                    <div className="flex gap-3 mt-2">
                      <div className="flex bg-[#E6E5E5] px-4 rounded-lg gap-3">
                        <button
                          onClick={() =>
                            removeCofe(product.id)
                          }
                        >
                          −
                        </button>

                        <span>{item.count}</span>

                        <button
                          onClick={() =>
                            addCofe(product.id)
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          removeItem(product.id)
                        }
                        className="bg-red-200 px-4 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                <h1 className="font-bold">
                  {product.price * item.count} $$$
                </h1>
              </div>
            );
          })}
        </div>

        <div className="bg-[#F3F2F2] rounded-2xl mt-10 p-6">
          <div className="flex justify-between">
            <span>Cofelar narxi</span>
            <span>{sum} $</span>
          </div>

          <div className="flex justify-between">
            <span>Yetkazib berish</span>
            <span>{entrega} $</span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{total} $</span>
          </div>

          <button
            onClick={() => navigate("/")}
            className="mt-6 w-full bg-[#DBAC2C] text-white py-3 rounded-xl"
          >
            Orqaga
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Orders;