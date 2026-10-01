import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App(){
  return(
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/login" elemet={<Login/>}/>
  <Route path="/register" elemet={<Register/>}/>
  <Route path="/dashboard" elemet={<Dashboard/>}/>
</Routes>
</BrowserRouter>
  );
}
export default App;