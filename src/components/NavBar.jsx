import React from "react";
import myLogo from "../images/my-logo.png";

export default function NavBar() {
    return (
        <div>
            <image src={myLogo}/>
            <ul className="nav-list">
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Suppliers</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">My Cart</a></li>
                <li><a href="#">My Orders</a></li>
                <li><a href="#">Product Comparisons</a></li>
                <li><a href="#">Sample Requests</a></li>
                <li><a href="#">My Transactions</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Help Center</a></li>
            </ul>
        </div>
    );
};