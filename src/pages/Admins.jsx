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
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 990,
    img: "card_1.svg",
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
      const newItem = {
        ...form,
        id: cofes.length ? cofes[cofes.length - 1].id + 1 : 1,
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
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-[250px] bg-indigo-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-10 text-center">☕ Admin</h2>
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer p-3 rounded bg-white/10 hover:bg-white/20"
        >
          Home
        </div>
      </aside>

      <main className="flex-1 p-10">
        <div className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold">Products</h1>
          <button
            onClick={handleRefresh}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Add Product
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
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
                        className="w-16 h-16 object-cover mx-auto"
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

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">
              {editIndex === -1 ? "Add Product" : "Edit Product"}
            </h2>

            <div className="space-y-3">
              <input
                className="w-full border p-2 rounded"
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
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
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
              />

              <select
                className="w-full border p-2 rounded"
                value={form.img}
                onChange={(e) =>
                  setForm({ ...form, img: e.target.value })
                }
              >
                <option value="">Select image</option>
                {images.map((img, i) => (
                  <option key={i} value={img}>
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
      </main>
    </div>
  );
}

export default Admins;