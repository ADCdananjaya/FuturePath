import assets from "../assets";

const Hero = () => {
    return ( 
        <section id="home" className="flex md:flex-row flex-col md:px-20 px-10 justify-center items-center gap-10 mt-10">
            <div className="flex flex-col gap-6">
                <p className="text-white md:text-6xl text-5xl font-semibold md:p-0 px-5 md:leading-[75px]">
                    Find your path to <br className="md:block hidden"/>
                    <span className="text-gradient">Success</span> <br className="md:block hidden"/> 
                    with FuturePath.
                </p>
                <p className="text-slate-300 text-md font-normal w-96 md:pl-5 px-6">
                    Are you a university student looking for gaining valuable 
                    experience in your field of study? Or a local company seeking 
                    talented and motivated interns? FuturePath is here to help! 
                    With our platform, you can connect with each other and find 
                    the perfect match.
                </p>
            </div>
            <div className="relative">
                <img src={assets.hero} alt="Hero image" className="relative z-[5]"/>
                <div className="absolute z-[0] w-2/5 h-2/5 top-0 pink__gradient"></div>
                <div className="absolute z-[0] w-2/5 h-2/5 top-0 pink__gradient"></div>
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

export default Hero;