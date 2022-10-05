import React from "react"
import './App.css';
import { NavLink } from "react-router-dom"
const MyHome=()=>{


return(
    <>
   <div className="App">
   <label>Home Page</label><br /><br />
   <NavLink  to='/setTimeoutDebounce'>Debounce  with SetTimeout</NavLink><br /><br /><br />
    <NavLink to='/DebounceWithInput'>Debounce with Input Key</NavLink><br /><br /><br />
    <NavLink to='/DebounceLodash'>LodAsh Debounce</NavLink>

   </div>
    </>
)


}
export default MyHome;