import React, { useState, useEffect } from "react";
import "./navbarStyles.css";
import { Link } from "react-scroll";

function navbar() {
    const [stickyClass, setStickyClass] = useState("");
    const stickNavbar = () => {
        if (window.scrollY !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight >= 0
                ? setStickyClass("sticky-nav")
                : setStickyClass("");
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
        return () => {
            window.removeEventListener("scroll", stickNavbar);
        };
    }, []);

    const [active, setActive] = useState("nav-menu");
    const [icon, setIcon] = useState("nav-toggler");
    const navToggle = () => {
        if (active === "nav-menu") {
            setActive("nav-menu nav-active");
        } else setActive("nav-menu");
        // Icon Toggler
        if (icon === "nav-toggler") {
            setIcon("nav-toggler toggle");
        } else setIcon("nav-toggler");
    };
    return (
        <nav
            className={`nav active ${
                stickyClass && "sticky-nav"
            } =>gaEventTracker('call')`}
        >
            <div className="nav__item__list flex justify-between w-full container m-auto">
                <a href="/" className="nav-brand">
                    {"<? Nanu>"}
                </a>
                <ul className={active}>
                    <li className="nav-item">
                        <Link
                            to="home"
                            className="nav-link cursor-pointer"
                            smooth={true}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="skills"
                            className="nav-link cursor-pointer"
                            smooth={true}
                        >
                            Skills
                        </Link>
                    </li>
                </ul>
            </div>
            <div
                aria-hidden="true"
                onClick={navToggle}
                onKeyPress={navToggle}
                className={icon}
            >
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default navbar;

{
    /* <div className="nav__item__list flex justify-between w-full container m-auto">
<a href="/" className="nav-brand">
    {"<? Nanu>"}
</a>
<ul className={active}>
    <li className="nav-item">
        <a href="/" className="nav-link">
            Home
        </a>
    </li>
    <li className="nav-item">
        <a href="/artikel-sekolah" className="nav-link">
            Artikel Sekolah
        </a>
    </li>
</ul>
<div
    aria-hidden="true"
    onClick={navToggle}
    onKeyPress={navToggle}
    className={icon}
>
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="line3"></div>
</div>
</div> */
}
