import assets from "../assets";
import constants from "../constants";

const FAQ = () => {
    return ( 
        <div id="clients" className="flex flex-col mt-24 justify-center items-center gap-5 relative">
            <div className="flex md:flex-row flex-col md:gap-20 gap-8 md:items-center md:justify-center relative z-[5]">
                <p className="text-4xl text-white font-semibold w-96 md:leading-[50px] leading-0 px-5">
                    Frequently Asked Questions
                </p>
                <p className="text-sm text-slate-300 font-normal md:w-[420px] md:max-w-[450px] max-w-96 ml-5 px-5 ">
                    Check out the answers to your most pressing questions here.
                </p>
            </div>
            <div className="flex md:flex-wrap flex-nowrap md:flex-row flex-col md:gap-5 gap-0 w-full justify-center items-center md:w-full mb-5 relative z-[5]">
                {constants.faqs.map(faq => (
                    <div key={faq.id} className="flex justify-between flex-col px-10 md:py-12 py-6 rounded-xl max-w-[370px] md:mr-8 ms:mr-5 mr-0 my-1 feedback-card gap-5 z-[5]">
                        <img src={assets.question} alt="question" className="w-10 opacity-75"/>
                        <p className="text-slate-200">{faq.question}</p>
                        <p className="text-slate-400 text-sm">{faq.answer}</p>
                    </div>
                ))}
            </div>
            <div className="absolute z-[1] w-2/5 h-2/5 left-5 top-0 white__gradient"></div>
        </div>
    );
}

export default FAQ;