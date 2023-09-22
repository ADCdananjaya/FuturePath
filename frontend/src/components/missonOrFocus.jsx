import assets from "../assets";
import constants from "../constants";

const MissonOrFocus = (props) => {
    return ( 
        <div className="flex justify-center">
            <div className={`md:w-11/12 w-full md:p-0 px-2 h-auto flex ${(props.id === "mission" || props.id === "focus")? "md:flex-row-reverse": "md:flex-row"} flex-col justify-center items-center gap-10 mb-10 ${props.id === "mission"? "mt-10": null}`}>
            <div className="relative">
                <p className={`${props.id === "mission"? "block": "hidden"} md:text-5xl text-5xl md:hidden block text-slate-200 font-semibold mb-5`}>About Us</p>
                <img src={assets[constants.aboutCompany.find(item => item.id === props.id).image]} alt="cover image" className="md:w-96 w-72 relative z-[5]" />
                <div className="absolute z-[0] w-2/5 h-2/5 top-0 pink__gradient"></div>
                <div className="md:block hidden absolute z-[2] rounded-full w-3/5 h-3/5 top-20 right-10 blue__gradient"></div>
                <div className="absolute z-[2] rounded-full w-3/5 h-3/5 top-20 right-10 blue__gradient"></div>
                <div className="md:block hidden absolute z-[1] w-2/5 h-2/5 right-5 top-10 white__gradient"></div>
            </div>
                <div className="flex flex-col gap-3">
                    <p className={`${props.id === "mission"? "md:block": "hidden"} md:text-5xl text-3xl text-slate-200 font-semibold mb-5 hidden`}>About Us</p>
                    <p className="text-3xl text-slate-300 font-semibold">{constants.aboutCompany.find(item => item.id === props.id).title}</p>
                    <p className={`${props.id === "values"? "hidden": "block"} text-lg text-slate-400 md:w-[450px] w-80 pl-3`}>{props.id !== "values"? constants.aboutCompany.find(item => item.id === props.id).description: null}</p>
                    <ul className={`${props.id === "values"? "block": "hidden"} text-lg text-slate-400 md:w-[450px] w-80 pl-3 flex-col gap-2`}>
                        { constants.aboutCompany.find(item => item.id === "values").description.map(text => <li key={text.index} className="list-disc mb-2">{text.value}</li>) }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MissonOrFocus;