import React from "react";
import "./navbarStyles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function navbar() {
    return (
        <>
            <div className="navigation__header">
                <nav className="navbar">
                    <a className="brand" href="#">
                        <div className="brand__header--text">{"<?Nanu>"}</div>
                    </a>
                    <input type="checkbox" id="nav" className="hidden" />
                    <label className="nav-toggle">
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
