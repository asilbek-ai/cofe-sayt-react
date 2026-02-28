import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admins() {
  const navigate = useNavigate();

  const defaultCofes = [
    {
      id: 1,
      name: "Expresso Americano",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 800,
      img: "card_2.svg",
    },
    {
      id: 2,
      name: "Expresso Cremoso",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 490,
      img: "card_3.svg",
    },
    {
      id: 3,
      name: "Expresso Gelado",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 905,
      img: "card_4.svg",
    },
    {
      id: 4,
      name: "Café com Leite",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 450,
      img: "card_5.svg",
    },
    {
      id: 5,
      name: "Latte",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 400,
      img: "card_6.svg",
    },
    {
      id: 6,
      name: "Capuccino",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 690,
      img: "card_7.svg",
    },
    {
      id: 7,
      name: "Macchiato",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 980,
      img: "card_8.svg",
    },
    {
      id: 8,
      name: "Expresso Tradicional",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 990,
      img: "card_1.svg",
    },
    {
      id: 9,
      name: "Expresso Americano",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 980,
      img: "caed_9.svg",
    },
    {
      id: 10,
      name: "Expresso Cremoso",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 980,
      img: "card_10.svg",
    },
    {
      id: 11,
      name: "Expresso Gelado",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 980,
      img: "card_11.svg",
    },
    {
      id: 12,
      name: "Café com Leite",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 980,
      img: "card_12.svg",
    },
    {
      id: 13,
      name: "Latte",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 980,
      img: "cofe_13.svg",
    },
    {
      id: 14,
      name: "Capuccino",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 980,
      img: "card_14.svg",
    },
    {
      id: 15,
      name: "Macchiato Mocaccino",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 980,
      img: "card_15.svg",
    },
    {
      id: 16,
      name: "Chocolate Quente",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 980,
      img: "card_16.svg",
    },
    {
      id: 17,
      name: "Cubano",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 980,
      img: "card_17.svg",
    },
    {
      id: 18,
      name: "Havaiano",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 980,
      img: "card_18.svg",
    },
    {
      id: 19,
      name: "Irlandês",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 198,
      img: "card_19.svg",
    },
  ];

  const images = [
    "card_1.svg",
    "card_2.svg",
    "card_3.svg",
    "card_4.svg",
    "card_5.svg",
    "card_6.svg",
    "card_7.svg",
    "card_8.svg",
    "caed_9.svg",
    "card_10.svg",
    "card_11.svg",
    "card_12.svg",
    "cofe_13.svg",
    "card_14.svg",
    "card_15.svg",
    "card_16.svg",
    "card_17.svg",
    "card_18.svg",
    "card_19.svg",
    "card_20.svg",
  ];

  const [cofes, setCofes] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    img: "",
  });
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cofes"));
    if (stored) {
      setCofes(stored);
    } else {
      localStorage.setItem("cofes", JSON.stringify(defaultCofes));
      setCofes(defaultCofes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cofes", JSON.stringify(cofes));
  }, [cofes]);

  function handleSave() {
    if (!form.name || !form.price || !form.img) return;

    if (editIndex === -1) {
      const newItem = { ...form, id: cofes.length ? cofes[cofes.length - 1].id + 1 : 1,
      };
      setCofes([...cofes, newItem]);
    } else {
      const updated = [...cofes];
      updated[editIndex] = { ...form, id: updated[editIndex].id };
      setCofes(updated);
    }

    setForm({ name: "", description: "", price: "", img: "" });
    setEditIndex(-1);
  }

  function handleDelete(index) {
    const updated = cofes.filter((_, i) => i !== index);
    setCofes(updated);
  }

   function handleEdit(index) {
    setForm(cofes[index]);
    setEditIndex(index); 
  }

  function handleRefresh() {
    setForm({ name: "", description: "", price: "", img: "" });
    setEditIndex(-1);
  }

  return (
    <div className="flex  min-h-screen bg-gray-100">
      <div className=" fixed min-h-screen w-[290px] bg-indigo-900 text-white p-6 ">
        <h2 className="text-5xl font-bold mb-10 text-center mt-9">☕ Admin</h2>
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer p-3 rounded bg-white/10 hover:bg-white/20"
        >
          🏚 Home
        </div>
        <div
          onClick={() => navigate("/orderpanel")}
          className="cursor-pointer mt-6 p-3 rounded bg-white/10 hover:bg-white/20"
        >
          <h1>🛒 Order Panel</h1>
        </div>
      </div>
      <div className="text-[#f3f4f6]">
        djijhojigdgjfdiohjfdoijhdfhdgjiorejytoiljoi
      </div>
      <div className="flex-1  min-h-screen   p-10">
        <div className="flex gap-20 mb-8">
          <h1 className="text-3xl font-bold">Products</h1>
          <button
            onClick={handleRefresh}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Add Product
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 justify-center ">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
            <table className="w-full text-center">
              <thead>
                <tr className="border-b">
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {cofes.map((item, index) => (
                  <tr key={item.id} className="border-b">
                    <td>{item.id}</td>

                    <td>
                      <img
                        src={`/images/${item.img}`}
                        alt={item.name}
                        className="w-16 h-16   object-cover mx-auto"
                      />
                    </td>

                    <td>{item.name}</td>
                    <td>${item.price}</td>

                    <td className="space-x-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="px-3 py-1 bg-gray-200 rounded"
                      >
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>

                      <button
                        onClick={() => handleDelete(index)}
                        className="px-3 py-1 bg-red-500 text-white rounded"
                      >
                        <i class="fa-regular fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className=" fixed top-0 left-285 right-0 min-h-screen bg-white p-6 rounded- shadow">
            <h2 className="text-xl font-bold mb-4">
              {editIndex === -1 ? "Add Product" : "Edit Product"}
            </h2>

            <div className="space-y-3">
              <input
                className="w-full border p-2 rounded"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                className="w-full border p-2 rounded"
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />

              <input
                type="number"
                className="w-full border p-2 rounded"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />

              <select
                className="w-full border p-2 rounded"
                value={form.img}
                onChange={(e) => setForm({ ...form, img: e.target.value })}
              >
                <option value="">Select image</option>
                {images.map((img) => (
                  <option>
                    {img}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSave}
              className="w-full mt-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              💾 Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admins;
