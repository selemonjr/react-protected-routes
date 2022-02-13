import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UseAuthContext";
const Login = () => {
    const [email,SetEmail] = useState("");
    const [password,SetPassword] = useState("");
    const [error,SetError] = useState("");
    const navigate = useNavigate();
    const {signIn} = useUserAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signIn(email,password);
            navigate("/home")
        } catch(err) {
            SetError(err.message);
            setTimeout(() => {
                SetError("")
            },2000)
        }
    }
    return (
        <div className="grid place-items-center">
            <div className="w-full max-w-sm mt-10">
                <form onSubmit={handleSubmit} className="bg-white shadow px-6 py-4 mb-4 mt-6 border border-gray-300">
                    <div className="grid place-items-center mb-4">
                     <h2 className="font-bold text-xl">Firebase Login</h2>
                    </div>
                    <div className="mb-4">
                        <label className="font-bold text-gray-700 block">Email</label>
                        <input type="email" onChange={(e) => SetEmail(e.target.value)} placeholder="Email" className="w-full appearance-none shadow py-2 rounded-md px-2 mt-2 focus:outline-none border border-gray-300" required/>
                    </div>
                    <div className="mb-2">
                        <label className="font-bold text-gray-700 block">Password</label>
                        <input type="password" onChange={(e) => SetPassword(e.target.value)} placeholder="Password" className="w-full appearance-none shadow py-2 rounded-md px-2 mt-2 focus:outline-none border border-gray-300"/>
                    </div>
                    {error && <div className="grid place-items-center mb-1">
                        <p className="text-red-600 font-bold text-md">Error : {error}</p>
                    </div>}
                    <div className="grid place-items-center mb-4 mt-3">
                       <button className="w-full rounded-md py-2 bg-sky-400 hover:bg-sky-500 text-white font-bold text-lg">Login</button>
                    </div>
                    <div className="flex justify-center place-items-center mb-4 mt-3">
                      <h4 className="font-bold mr-2">Don't have an account ?</h4>
                      <p className="font-bold text-sky-400 cursor-pointer hover:text-sky-500"><Link to="/register">Register Now</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;