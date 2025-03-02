import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import images from "~/assets/Imgs";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navBarList = [
        { path: "/", label: "Trang chủ" },
        { path: "/Introduction", label: "Giới Thiệu" },
        { path: "/", label: "Nội Thất" },
        { path: "/projects", label: "Dự Án" },
        { path: "/news", label: "Tin Tức" },
        { path: "/contact", label: "Liên Hệ" },
    ];
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full flex justify-between items-center lg:px-8 px-2 py-2 font-primary z-50 
                transition-all duration-300 ease-in-out ${
                    isScrolled ? "bg-secondary/50 backdrop-blur-md md:h-16" : "bg-secondary"
                }`}
        >
            {/* Logo */}
            <div className={`w-[100px] transition-all duration-300 ${isScrolled ? "md:w-[120px]" : "md:w-[200px]"} `}>
                <NavLink to="/">
                    <img src={images.LogoImg} alt="Logo" className="transition-all duration-300 w-full" />
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
                className={`absolute top-full left-0 right-0 w-full p-4 flex flex-col md:bg-transparent bg-secondary/80 items-center space-y-4 
                lg:space-y-0 lg:flex lg:flex-row lg:static lg:w-auto lg:items-center lg:space-x-10 text-primary 
                lg:text-xl text-base transition-all duration-300 ease-in-out transform ${
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0 lg:opacity-100 lg:translate-y-0"
                } z-50`}
            >
                {navBarList.map(({ path, label }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className="relative py-2 transition-all duration-300 ease-in-out
                        after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] 
                        after:bg-primary after:transition-all after:duration-300    
                        after:transform after:-translate-x-1/2"
                        onClick={() => setIsOpen(false)}
                    >
                        {label}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Header;
