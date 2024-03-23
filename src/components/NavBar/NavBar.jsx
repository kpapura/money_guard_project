import React from "react";
import { NavLink } from "react-router-dom";
import useResize from '../../hooks/useResize';

const NavBar = () => {
    const screenWidth = useResize().windowWidth;



    return (
        <div>
            <NavLink to='home'>Home</NavLink>
            <NavLink to='statistics'>Statistics</NavLink>
            {screenWidth < 768 && <NavLink to='/currency'>Currency</NavLink>}
        </div>
    )
}


export default NavBar;