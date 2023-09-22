import { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets";
import constants from "../constants";

const Navbar = () => {
    const [ toggle, setToggle ] = useState(false);
    const [ loginView, setLoginView ] = useState(false);
    const navigate = useNavigate();

    return ( 
        <div className="navbar flex flex-row justify-between items-center">
            <button onClick={() => navigate("/")}><img src={assets.logo} alt="logo" className="w-48"/></button>
            <ul className="flex-row justify-between text-slate-300 gap-5 font-normal text-[16px] sm:flex hidden">
                {constants.navLinks.map(item => (
                    <li key={item.id} className="hover:text-slate-50 ease-in-out">
                        <button onClick={() => item.id == "start" ?setLoginView(true): navigate(`/${item.id}`)}>{item.title}</button>
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
                <div className={`${toggle ? "flex": "hidden"} w-28 h-auto absolute top-16 right-2 bg-black-gradient sidebar rounded-xl px-3 py-1 justify-center z-[10]`}>
                    <ul className="flex flex-col gap-2 text-slate-300 text-normal text-[14px] mb-2 items-center">
                        {constants.navLinks.map(item => (
                            <li key={item.id} className="hover:text-slate-50 ease-in-out">
                                <button onClick={() => item.id == "start" ?setLoginView(true): navigate(`/${item.id}`)}>{item.title}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={`${loginView ? "block": "hidden"} absolute top-0 left-0 right-0 bottom-0 m-auto flex justify-center items-center z-[10] bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm`}>
                <div className={`flex flex-col md:w-6/12 w-11/12 md:h-6/12 h-11/12 bg-black-gradient sidebar rounded-xl px-3 py-1 justify-center`}>
                    <div className="w-full flex justify-end">
                        <img 
                            src={assets.close} 
                            alt="navbar" 
                            className="w-10 h-10 cursor-pointer" 
                            onClick={() => setLoginView(false)}
                        />
                    </div>
                    <div className="flex md:flex-row flex-col justify-center gap-5">
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-slate-200 text-3xl mb-3">As a Candidate</p>
                            <img src={assets.candidate} alt="candidate" className="w-[830px] md:block hidden"/>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-slate-200 text-3xl md:block hidden">As a Company</p>
                            <img src={assets.company} alt="company" className="w-[1200px] md:block hidden"/>
                        </div>
                    </div>
                    <div className="w-full flex md:flex-row flex-col justify-around gap-5 mb-5">
                        <div className="flex flex-col items-center gap-3">
                            <button onClick={() => navigate("/candidate_register")} className="px-12 rounded-lg py-1 bg-teal-300 hover:bg-teal-200 text-gray-800 font-semibold">Register</button>
                            <button onClick={() => navigate("/candidate_login")} className="px-12 rounded-lg py-1 bg-teal-300 hover:bg-teal-200 text-gray-800 font-semibold">Login</button>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-slate-200 text-3xl md:hidden block mb-3">As a Company</p>
                            <button onClick={() => navigate("/company_register")} className="px-12 rounded-lg py-1 bg-teal-300 hover:bg-teal-200 text-gray-800 font-semibold">Register</button>
                            <button onClick={() => navigate("/company_login")} className="px-12 rounded-lg py-1 bg-teal-300 hover:bg-teal-200 text-gray-800 font-semibold">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;