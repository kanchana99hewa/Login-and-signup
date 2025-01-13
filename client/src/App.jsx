import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Login} from "./Components/Login";
import Home from "./Components/Home";
import SignUp from "./Components/Signup";


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
