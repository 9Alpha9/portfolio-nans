import React from "react";
import "./navbarStyles.css";

function navbar() {
    return (
        <>
            <div className="navigation__header">
                <nav className="navbar">
                    <a className="brand" href="#">
                        <figure className="brand__logo">
                            <img
                                src="/component/assets/bagian-logo.png"
                                alt=""
                            />
                        </figure>
                        <div className="brand__header--text">Logo</div>
                    </a>
                    <input type="checkbox" id="nav" className="hidden" />
                    <label for="nav" class="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <div className="wrapper">
                        <ul className="menu">
                            <li className="menu-item active">
                                <a href="#">Home</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Menu Item</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Menu Item</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Menu Item</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Menu Item</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default navbar;
