import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import images from "~/assets/Imgs";
import Icons from "~/assets/Icons/index";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full flex justify-between items-center lg:px-8 px-2 py-2 bg-secondary font-primary z-50">
            {/* Logo */}
            <div className="md:w-3xs w-[100px]">
                <NavLink to="/">
                    <img src={images.LogoImg} alt="Logo" />
                </NavLink>
            </div>

            {/* Menu Icon cho mobile */}
            <div className="lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faBars} className="text-primary text-3xl" />
                </button>
            </div>

            {/* Menu chính */}
            <div
                className={`absolute top-full left-0 right-0 w-full bg-secondary p-4 flex flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:static lg:w-auto lg:items-center lg:space-x-10 text-primary lg:text-xl text-base transition-all duration-300 ease-in-out ${
                    isOpen ? "flex" : "hidden lg:flex"
                } z-50`}
            >
                <NavLink to="/Introduction" onClick={() => setIsOpen(false)}>
                    Giới Thiệu
                </NavLink>
                <NavLink to="/">Nội Thất</NavLink>
                <NavLink to="/projects" onClick={() => setIsOpen(false)}>
                    Dự Án
                </NavLink>
                <NavLink to="/news" onClick={() => setIsOpen(false)}>
                    Tin Tức
                </NavLink>
                <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                    Liên Hệ
                </NavLink>

                <div className="w-6 cursor-pointer">
                    <img src={Icons.searchIcon} alt="Search" />
                </div>
            </div>
        </div>
    );
}

export default Header;
