import React, { useState } from "react";
import { navLinks } from "../constants";

    /**
     * Renders the navbar component.
     * 
     * It contains a list of navigation links rendered from the `navLinks` constant.
     * 
     * @returns {JSX.Element} The navbar component.
     */
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    const NavItems = () => {
        return (
            <ul className="nav-ul">
                {navLinks.map(({ id, href, name }) => (
                    <li key={id} className="nav-li">
                        <a 
                            href={href} 
                            className="nav-li_a font-medium"
                            onClick={() => {}}
                        >
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        AkashdeepK
                    </a>

                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu"
                    >
                        <img 
                            src={isOpen ? "assets/close.svg" : "assets/menu.svg"} 
                            className="w-6 h-6"
                            alt="toggle"
                    />
                    </button>

                    <nav className="hidden sm:flex">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen}' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}

export default Navbar;