import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <>
        <nav className="flex w-full justify-between place-items-center bg-gray-200 h-14 p-1">
            <div><h2 className="font-bold text-lg">Firebase Auth</h2></div>
            <div>
                <ul className="flex justify-center place-items-center cursor-pointer">
                <Link to="/home"><li className="mr-2 font-bold">Home</li></Link>
                <Link to="/"><li className="ml-2 font-bold">Login</li></Link>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Navigation;