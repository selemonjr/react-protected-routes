import { useUserAuth } from "../Context/UseAuthContext";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const {user,logOut} = useUserAuth();
    const navigate = useNavigate();
    const emailEl = user.email.split("@")[0];
    const handleSubmit = async () => {
        try {
            await logOut();
            navigate("/")
        } catch(error) {
            console.log(error)
        }
    }
    return (
        <>
        <div className="grid place-items-center mt-4">
            <p className="font-bold text-lg mb-3">Welcome {user && emailEl}</p>
            <button className="py-2 px-3 rounded-md font-bold bg-red-600 text-white" onClick={handleSubmit}>Log Out</button>
        </div>
        </>
    )
}
export default Home;