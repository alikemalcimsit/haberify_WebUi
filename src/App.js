import { Route, Routes } from "react-router-dom";
import Navbar from "./layouts/navbar/Navbar";

import ProfilePages from "./pages/ProfilePage/ProfilePages";
import DiscoveryPages from "./pages/DiscoveryPage/DiscoveryPages";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import HomePages from "./pages/HomePage/HomePages";


function App() {
  return (
    <div >
 
  
<Routes>
  <Route exact  path="/" element={<LoadingPage/>}></Route>
  <Route   path="/home" element={<HomePages/>}></Route>
  <Route path="/discovery" element={<DiscoveryPages/>}></Route>
  <Route path="/profile" element={<ProfilePages/>}></Route>

</Routes>


 
 
   


    </div>
  );
}

export default App;
