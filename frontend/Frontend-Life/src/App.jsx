import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import Signup from "./pages/Signup.jsx"
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes> 
    </BrowserRouter>
  )
}

export default App
