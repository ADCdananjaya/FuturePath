import { useState } from "react";
import assets from "../assets";
import constants from "../constants";

const Navbar = () => {
    const [ toggle, setToggle ] = useState(false);
    const [ loginView, setLoginView ] = useState(false);

    return ( 
        <div className="navbar flex flex-row justify-between items-center">
            <a href="/"><img src={assets.logo} alt="logo" className="w-48"/></a>
            <ul className="flex-row justify-between text-slate-300 gap-5 font-normal text-[16px] sm:flex hidden">
                {constants.navLinks.map(item => (
                    <li key={item.id} className="hover:text-slate-50 ease-in-out">
                        <a href={`/${item.id}`}>{item.title}</a>
                    </li>
                ))}
                <li className="hover:text-slate-50 ease-in-out">
                    <button onClick={() => setLoginView(true)}>Get Started</button>
                </li>
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
                                <a href={`/${item.id}`}>{item.title}</a>
                            </li>
                        ))}
                        <li className="hover:text-slate-50 ease-in-out">
                            <button onClick={() => setLoginView(true)}>Get Started</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`${loginView ? "flex": "hidden"} flex-col w-6/12 h-6/12 absolute top-16 right-auto bg-black-gradient sidebar rounded-xl px-3 py-1 justify-center`}>
                <div className="w-full flex justify-end">
                    <img 
                        src={assets.close} 
                        alt="navbar" 
                        className="w-10 h-10 cursor-pointer" 
                        onClick={() => setLoginView(false)}
                    />
                </div>
                <a href="/candidate_login" className="text-3xl text-slate-100">candidate login</a>
                <a href="/company_login" className="text-3xl text-slate-100">company login</a>
                <a href="/candidate_register" className="text-3xl text-slate-100">candidate register</a>
                <a href="/company_register" className="text-3xl text-slate-100">company register</a>
            </div>
        </div>
    );
}
export default Navbar;