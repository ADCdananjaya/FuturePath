import constants from "../constants";

const Testimonials = () => {
    return ( 
        <div id="clients" className="flex flex-col mt-12 justify-center items-center gap-5 relative">
            <div className="flex md:flex-row flex-col md:gap-20 gap-8 md:items-center md:justify-center">
                <p className="text-4xl text-white font-semibold w-96 md:leading-[50px] leading-0 px-5">
                    What people are saying about us
                </p>
                <p className="text-sm text-slate-300 font-normal md:w-96 max-w-96 ml-5 px-5">
                    Our tools are designed to make your journey stress-free and seamless.
                </p>
            </div>
            <div className="flex md:flex-row flex-col gap-5 w-full md:justify-between items-center md:w-4/5">
                {constants.feedBacks.map(feedBack => (
                    <div key={feedBack.id} className="flex justify-between flex-col px-10 py-12 rounded-xl max-w-[370px] md:mr-10 ms:mr-5 mr-0 my-5 feedback-card gap-5 z-[1]">
                        <p className="text-slate-200">{feedBack.message}</p>
                        <div className="flex flex-col">
                            <p className="text-slate-300">{feedBack.name}</p>
                            <p className="text-slate-400 text-sm">{feedBack.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;