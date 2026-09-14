import { Link } from "react-router-dom";
import logo from "../../assets/Logo/NoshlyLogo.png";

function Navbar() {
    const navLink = "text-[#b8bcc5] no-underline text-[15px] font-medium transition-colors duration-200 ease-in hover:text-white";

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Restaurants", path: "/restaurants" },
        { name: "Categories", path: "/categories" },
        { name: "About", path: "/about" },
    ];

    return (
        <nav className="h-[76px] px-[7%] flex items-center justify-between bg-[#0f1115] border-b border-[#242832] sticky top-0 z-[1000] max-[768px]:h-[60px] max-[768px]:px-[5%]">

            {/* LOGO */}
            <Link to="/" className="flex items-center">
                <img src={logo} alt="Noshly" className="w-[200px] h-auto block max-[768px]:w-[110px]" />
            </Link>

            {/* NAVIGATION */}
            <div className="flex items-center gap-[34px] max-[768px]:hidden">
                {navLinks.map((link) => (
                    <Link key={link.path} to={link.path} className={navLink}>
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-[12px]">

                <button className="border-0 bg-transparent text-[#b8bcc5] py-[10px] px-[14px] text-[15px] cursor-pointer flex items-center gap-[7px] transition-colors duration-200 ease-in hover:text-white max-[768px]:p-[8px]">
                    🛒
                    <span className="max-[768px]:hidden">Cart</span>
                </button>

                <button className="border-0 bg-[#ff6b35] text-white py-[11px] px-[20px] rounded-[10px] text-[14px] font-semibold cursor-pointer transition-[transform,background] duration-200 ease-in hover:bg-[#ff7b4b] hover:-translate-y-[1px] max-[768px]:py-[9px] max-[768px]:px-[14px] max-[768px]:text-[13px]">
                    Login
                </button>

            </div>

        </nav>
    );
}

export default Navbar;