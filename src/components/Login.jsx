// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// function Login() {
//     const [code, setCode] = useState('')
//     const navigate = useNavigate()
//     const checkCode = () => {
//         if (code === "123456") {
//             navigate('/Admins')
//         }else{
//             alert('Kod xato')
//         }
//     }
//     return (
//         <div className="min-h-screen flex items-center justify-center px-4">
  
//   <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
    
//     <h2 className="text-2xl md:text-3xl font-bold  text-center mb-6">
//       Enter Password
//     </h2>

//     <div className="flex flex-col  gap-4">
      
//       <input
//         onChange={(e) => setCode(e.target.value)}
//         type="password"
//         placeholder="Enter your password"
//         className="w-full  px-4 py-3 rounded-xl bg-white/20  placeholder-gray-300 
//         border border-white/30 
//         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
//         transition-all duration-300"
//       />

//       <button
//         onClick={checkCode}
//         className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 
//         text-white font-semibold tracking-wide
//         hover:scale-105 active:scale-95
//         transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
//       >
//         Enter
//       </button>

//     </div>
//   </div>

// </div>
//     )
// }

// export default Login



import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
    const API = "http://213.230.108.224:49304"
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        phone: "",
        password: ""
    })

    function handleLogin(e) {
        e.preventDefault()
        setLoading(true)

        const loginObj = {  
            phone: form.phone,
            password: form.password,
            rememberMe: false
        }

        axios.post(API + "/api/v1/auth/login", loginObj)
            .then((res) => {
                localStorage.setItem("token", res.data.access_token)
                console.log(res);
                navigate("/admins")
            })
            .catch((err) => {
                console.log(err)
                alert("Login yoki parol xato ")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    function changeInputPhone(e) {  setForm({ ...form, "phone": e.target.value })}
    
    function changeInputPassword(e) {  setForm({ ...form, "password": e.target.value })}
   return (
    <div className="min-h-screen font-mono flex items-center justify-center bg-slate-100">
        <div className="w-full max-w-md p-10 bg-white rounded-3xl shadow-xl border border-slate-200">

            <h2 className="text-3xl font-bold text-center text-slate-700 mb-8">
                Admin Panel
            </h2>

            <form onSubmit={handleLogin} className="space-y-6">

                <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-2">
                     Login
                    </label>
                    <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={changeInputPhone}
                        placeholder="admin"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"/>
                </div>

                <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={changeInputPassword}
                        placeholder="xxxxxxxx"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300 disabled:opacity-50 shadow-md">
                    {loading ? "Kirish..." : "Login"}
                </button>

            </form>
        </div>
    </div>
)

}

export default Login
