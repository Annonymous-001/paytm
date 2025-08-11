import{
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import RedirectBasedOnAuth from "./components/RedirectBasedOnAuth";
import {Signup} from "./pages/Signup"
import {Signin} from "./pages/Signin"
import {Dashboard} from "./pages/Dashboard"
import {SendMoney} from "./pages/SendMoney"
// import './App.css';
function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<RedirectBasedOnAuth />} />
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/send" element={<SendMoney/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
  </Routes>
  </BrowserRouter>
  
    </>
  )
}
export default App