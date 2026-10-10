import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const NAV_LINKS = ["Skills", "Experience", "Projects", "Education", "Contact"];

// Site navigation and light/dark theme toggle.
function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState("");

    const toggleMenu = () => {
        setMenuOpen((isOpen) => !isOpen);
    };

    const toggleTheme = () => {
        const rootElement = document.documentElement.classList;

        if (rootElement.contains("dark")) {
            rootElement.remove("dark");
            setTheme("");
        } else {
            rootElement.add("dark");
            setTheme("dark");
        }
    };

    const renderLinks = (onClick) =>
                NAV_LINKS.map((link) => (
                        <a href={`#${link.toLowerCase()}`} key={link} onClick={onClick}>
                                {link}
                        </a>
                ));
    return (
        <>
          <nav>
            <div className="navContainer">
                <div className="logo">GK</div>
                <div className="navMenu">
                    <div className={`navItems ${menuOpen ? "open" : "close"}`}>
                        {renderLinks()}
                    </div>
                </div>
                <div className="navActions">
                    <button onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === "" ? <IoMoonOutline /> : <IoSunnyOutline />}
                    </button>
                    <button onClick={toggleMenu} className="block md:hidden" aria-label="Toggle menu">
                        {menuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                    </button>
                </div>
            </div>
          </nav>

            <div
                className={`OuterNavModal md:hidden ${menuOpen ? "block" : "hidden"}`}
                onClick={toggleMenu}
            >
                <div className="navModal" onClick={(event) => event.stopPropagation()}>
                    <div className="logo">GK</div>
                    <div className="navActions">
                        <div onClick={toggleTheme} role="button" tabIndex={0}>
                            {theme === "" ? <IoMoonOutline /> : <IoSunnyOutline />}
                        </div>
                        <div onClick={toggleMenu} role="button" tabIndex={0}>
                            <IoMdClose />
                        </div>
                    </div>
                    <div className="navItems">
                        {renderLinks(toggleMenu)}
                    </div>
                </div>
            </div>
        </>
    );
}
export default NavBar;



