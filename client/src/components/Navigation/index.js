import React from "react";

const Navigation = props => (
    <div className="navigation">
        <h2 className="navigation_h2" onClick={() => props.handleClick(props.id)}>Your Brands</h2>
        <h2 className="navigation_h2" onClick={() => props.handleClick(props.id)}>Search for Photos</h2>
        <h2 className="navigation_h2" onClick={() => props.handleClick(props.id)}>Search for Colors</h2>
    </div>
);

export default Navigation;