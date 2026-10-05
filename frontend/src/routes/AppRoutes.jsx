import {Routes, Route} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/user/Home";
import Player from "../pages/user/Player";
import Profile from "../pages/user/Profile";

function AppRoutes(){
     return (
          <Routes>
               <Route path="/login" element= {<Login/>} />
               <Route path= "/register" element = {<Register />} />
               <Route path= "/home" element= {<Home/>}/>
               <Route path= "/player" element= {<Player />} />
               <Route path= "/profile" element= {<Profile/>}/>
          </Routes>
     )
}

export default AppRoutes