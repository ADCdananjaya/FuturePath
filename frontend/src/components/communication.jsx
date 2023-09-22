import StartButton from "./startButton";
import assets from "../assets";

const Communication = () => {
    return ( 
        <section id="communication" className="flex md:flex-row flex-col md:px-20 px-10 justify-center items-center md:gap-16 gap-10 mt-16">
            <div className="flex flex-col gap-8">
                <p className="text-4xl text-white font-semibold md:w-[450px] w-96 md:leading-[50px] leading-0 px-5">
                    Stay Connected Ease with our Communication Tools.
                </p>
                <p className="text-sm text-slate-300 font-normal md:w-96 max-w-96 px-5 md:ml-0 ml-5">
                    Stay in touch and get the most out of your internship experience with our easy-to-use 
                    communication tools. Schedule interviews, messages, and keep track of your progress all in one place.
                </p>
                <div className="md:ml-0 ml-5 px-5">
                    <StartButton />
                </div>
            </div>
            <div className="relative">
                <img src={assets.communicate} alt="communicate" className="relative z-[5]"/>
                <div className="absolute z-[0] w-2/5 h-2/5 top-0 pink__gradient"></div>
                <div className="absolute z-[2] rounded-full w-3/5 h-3/5 top-20 right-10 blue__gradient"></div>
                <div className="absolute z-[2] rounded-full w-3/5 h-3/5 top-20 right-10 blue__gradient"></div>
                <div className="absolute z-[2] rounded-full w-3/5 h-3/5 top-20 right-10 blue__gradient"></div>
                <div className="absolute z-[1] w-2/5 h-2/5 right-5 top-10 white__gradient"></div>
                <div className="absolute z-[1] w-2/5 h-2/5 right-5 top-10 white__gradient"></div>
            </div>
        </section>
    );
}

export default Communication;