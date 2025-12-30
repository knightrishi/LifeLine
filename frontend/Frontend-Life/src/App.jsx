import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing.jsx"
import LoginPage from "./pages/LoginPage.jsx"
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes> 
    </BrowserRouter>
  )
}

export default App
