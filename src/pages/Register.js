import {useState} from "react";
import { useUserAuth } from "../Context/UseAuthContext";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [registerEmail,SetRegisterEmail] = useState("");
    const [registerPassword,SetRegisterPassword] = useState("");
    const [registerConfirmPassword,SetRegisterConfirmPassword] = useState("");
    const [error,SetError] = useState("");
    const [passwordError,SetPasswordError] = useState("");
    const navigate = useNavigate();
    const {signUp} = useUserAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(registerPassword === registerConfirmPassword) {
            try {
                await signUp(registerEmail,registerPassword);
                navigate("/home")
            } catch(err) {
                SetError(err.message)
                setTimeout(() => {
                    SetError("")
                },2000)
            }
        } else {
            SetPasswordError("Passwords do not Match");
            setTimeout(() => {
                SetPasswordError("")
            },2000)
        }
    }
    return (
        <div className="grid place-items-center">
            <div className="w-full max-w-sm mt-6">
                <form onSubmit={handleSubmit} className="bg-white shadow px-6 py-4 mb-4 mt-6 border border-gray-300">
                    <div className="grid place-items-center mb-4">
                     <h2 className="font-bold text-xl">Firebase Register</h2>
                    </div>
                    <div className="mb-4">
                        <label className="font-bold text-gray-700 block">Email</label>
                        <input type="email" onChange={(e) => SetRegisterEmail(e.target.value)} placeholder="Email" className="w-full appearance-none shadow py-2 rounded-md px-2 mt-2 focus:outline-none border border-gray-300" required/>
                    </div>
                    <div className="mb-6">
                        <label className="font-bold text-gray-700 block">Password</label>
                        <input type="password" onChange={(e) => SetRegisterPassword(e.target.value)} placeholder="Password" className="w-full appearance-none shadow py-2 rounded-md px-2 mt-2 focus:outline-none border border-gray-300"/>
                    </div>
                    <div className="mb-2">
                        <label className="font-bold text-gray-700 block">Confirm Password</label>
                        <input type="password" onChange={(e) => SetRegisterConfirmPassword(e.target.value)} placeholder="ConfirmPassword" className="w-full appearance-none shadow py-2 rounded-md px-2 mt-2 focus:outline-none border border-gray-300"/>
                    </div>
                    {error && <div className="grid place-items-center mb-1">
                        <p className="text-red-600 font-bold text-md">Error : {error}</p>
                    </div>}
                    {passwordError && <div className="grid place-items-center mb-1">
                        <p className="text-red-600 font-bold text-md">{passwordError}</p>
                    </div>}
                    <div className="mb-4 mt-3">
                       <button className="w-full rounded-md py-2 bg-sky-400 hover:bg-sky-500 text-white font-bold text-lg">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Register;