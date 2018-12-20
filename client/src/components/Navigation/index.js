import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => (
    <div className="navigation">
        <h2 className="navigation_h2"><Link to="/">Dash Home</Link></h2>
        <h2 className="navigation_h2"><Link to="/brands">Your Brands</Link></h2>
        <h2 className="navigation_h2"><Link to="/photo-search">Search for Photos</Link></h2>
        <h2 className="navigation_h2"><Link to="/color-search">Search for Colors</Link></h2>
    </div>
);
//onClick={() => props.handleClick(props.id)}

export default Navigation;