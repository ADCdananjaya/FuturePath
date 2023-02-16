import { useNavigate } from "react-router";
import assets from "../assets";

const NotFound = () => {
    const navigate = useNavigate();

    return ( 
        <div className="flex w-full h-screen justify-center items-center bg-[#000411]">
            <div className="flex md:flex-row flex-col w-11/12 h-auto justify-center">
                <div className="relative">
                    <img src={assets.notFound} alt="404 image" className="w-[430px]"/>
                    <div className="absolute z-[0] w-14 h-44 top-0 right-1 white__gradient rounded-full"></div>
                    <div className="absolute z-[0] w-14 h-44 top-1 right-5 white__gradient rounded-full"></div>
                    <div className="absolute z-[0] w-14 h-44 top-3 left-1 white__gradient rounded-full"></div>
                    <div className="absolute z-[0] w-14 h-44 top-5 right-5 white__gradient rounded-full"></div>
                    <div className="absolute z-[0] w-14 h-44 top-2 right-1 white__gradient rounded-full"></div>
                    <div className="absolute z-[0] w-14 h-44 bottom-0 right-5 white__gradient rounded-full"></div>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center">
                    <p className="md:text-[150px] text-8xl text-slate-200 font-semibold md:h-36 h-22">SORRY</p>
                    <p className="md:text-5xl text-2xl text-slate-300 font-semibold mb-5">Page Not Found!</p>
                    <button onClick={() => navigate("/")} className="bg-teal-300 hover:bg-teal-400 px-10 py-1 rounded-md font-semibold text-gray-800">Go Back</button>
                </div>
            </div>
        </div>
    );
}

export default NotFound;