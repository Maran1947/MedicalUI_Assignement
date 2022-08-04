import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
        <div className="navbar_left">
            <div className="navbar_left_logo"></div>
            <div className="navbar_left_text">Medical Darpan</div>
        </div>
        <div className="navbar_center">
            <ul className="navbar_center_list">
                <li className="navbar_center_item">Home</li>
                <li className="navbar_center_item">Products</li>
                <li className="navbar_center_item">Distributors</li>
                <li className="navbar_center_item">Manufacturers</li>
                <li className="navbar_center_item">About us</li>
                <li className="navbar_center_item">Blog</li>
            </ul>
        </div>
        <div className="navbar_right">
            <ul className="navbar_right_list" >
                <li className="navbar_right_item nbr_login">Login</li>
                <li className="navbar_right_item nbr_profile_pic">
                    <i class="fa-solid fa-circle-user fa-lg"></i>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar;