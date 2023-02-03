import constants from "../constants";
import StartButton from "./startButton";
import assets from "../assets";

const Empower = () => {
    return ( 
        <section id="empower" className="flex md:flex-row flex-col md:px-20 px-10 justify-center items-center gap-16 mt-12">
            <div className="flex flex-col gap-8">
                <p className="text-4xl text-white font-semibold w-96 md:leading-[50px] leading-0 px-5">
                    Empower Your Internship Journey.
                </p>
                <p className="text-sm text-slate-300 font-normal md:w-96 max-w-96 ml-5 px-5">
                    Discover the ultimate platform for university students and local companies. 
                    Find your perfect match with our advanced search and matching system and 
                    enhance your career with our career resources and analytics.
                </p>
                <div className="ml-5 px-5">
                    <StartButton />
                </div>
            </div>
            <div className="flex flex-col gap-7">
                {constants.features.map(feature => (
                    <div className="flex flex-row gap-5 px-8 py-2 rounded-xl feature-card" key={feature.id}>
                        <img src={assets[feature.icon]} alt="icon" className="rounded-full bg-dimBlue"/>
                        <div className="flex flex-col w-72 ">
                            <p className="text-slate-100 font-semibold">{feature.title}</p>
                            <p className="text-slate-400 text-sm">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Empower; <div>Empower</div>