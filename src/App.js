import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import {UserAuthContextProvider} from "./Context/UseAuthContext";
const App = () => {
  return (
    <Router>
      <UserAuthContextProvider>
      <Navigation/>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element= {
      <ProtectedRoute>
        <Home/>
        </ProtectedRoute>}
      />
      </Routes>
      </UserAuthContextProvider>
    </Router>
  )
}
export default App;