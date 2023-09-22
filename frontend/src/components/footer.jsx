import assets from "../assets";
import constants from "../constants";

const Footer = () => {
    return ( 
        <section id="footer" className="w-full bg-[#00030d]">
            <div className="flex flex-col items-center gap-5">
                <div className="w-11/12 flex md:flex-row flex-col md:justify-between md:items-center items-start">
                    <a href="#home"><img src={assets.logo} alt="logo" className="w-48"/></a>
                    <p className="text-sm text-slate-400 md:w-auto max-w-20">Discover the ultimate platform for university students and local companies.</p>
                </div>
                <hr className="opacity-60 w-11/12"/>
                <div className="flex md:flex-row flex-col md:justify-between w-11/12 mb-3 items-center md:gap-0 gap-3">
                    <p className="text-sm text-slate-400">Copyright &copy; 2023 FuturePath. All Rights Reserved.</p>
                    <div className="flex flex-row gap-5">
                        { constants.socials.map(item => (
                            <img src={assets[item.image]} key={item.id} className="cursor-pointer opacity-50 hover:opacity-100" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;