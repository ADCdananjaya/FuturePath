import assets from "../assets";
import StartButton from "./startButton";

const Intern = () => {
    return ( 
        <section id="intern" className="flex md:flex-row flex-col-reverse md:px-20 px-10 justify-center items-center md:gap-16 gap-10 mt-16">
            <div className="relative">
                <img src={assets.intern} alt="inter" className="relative z-[5]"/>
                <div className="absolute z-[0] w-2/5 h-2/5 top-0 pink__gradient"></div>
                <div className="absolute z-[2] rounded-full w-3/5 h-3/5 top-20 right-10 blue__gradient"></div>
                <div className="absolute z-[2] rounded-full w-3/5 h-3/5 top-20 right-10 blue__gradient"></div>
                <div className="absolute z-[2] rounded-full w-3/5 h-3/5 top-20 right-10 blue__gradient"></div>
                <div className="absolute z-[1] w-2/5 h-2/5 right-5 top-10 white__gradient"></div>
                <div className="absolute z-[1] w-2/5 h-2/5 right-5 top-10 white__gradient"></div>
            </div>
            <div className="flex flex-col gap-8">
                <p className="text-4xl text-white font-semibold w-96 md:leading-[50px] leading-0 px-5">
                    Find Your Ideal Internship.
                </p>
                <p className="text-sm text-slate-300 font-normal md:w-96 max-w-96 px-5 md:ml-0 ml-5">
                    Get a tailored experience with our personalized recommendation system. 
                    Based on your interests, skills, and experience, our algorithms will 
                    suggest the most relevant internship opportunities.
                </p>
            </div>
        </section>
    );
}

export default Intern;