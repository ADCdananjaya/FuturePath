import { useState } from "react";
import assets from "../assets";
import constants from "../constants";

const Navbar = () => {
    const [ toggle, setToggle ] = useState(false);

    return ( 
        <div className="navbar flex flex-row justify-between items-center">
            <a href="#home"><img src={assets.logo} alt="logo" className="w-48"/></a>
            <ul className="flex-row justify-between text-slate-300 gap-5 font-normal text-[16px] sm:flex hidden">
                {constants.navLinks.map(item => (
                    <li key={item.id} className="hover:text-slate-50 ease-in-out">
                        <a href={`#${item.id}`}>{item.title}</a>
                    </li>
                ))}
            </ul>
            <div className="sm:hidden flex flex-col gap-5 justify-center items-center">
                <img 
                    src={toggle ? assets.close: assets.menu} 
                    alt="navbar" 
                    className="w-8 cursor-pointer" 
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div className={`${toggle ? "flex": "hidden"} w-28 h-auto absolute top-16 right-2 bg-black-gradient sidebar rounded-xl px-3 py-1 justify-center`}>
                    <ul className="flex flex-col gap-2 text-slate-300 text-normal text-[14px] mb-2 items-center">
                        {constants.navLinks.map(item => (
                            <li key={item.id} className="hover:text-slate-50 ease-in-out">
                                <a href={`#${item.id}`}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Navbar;