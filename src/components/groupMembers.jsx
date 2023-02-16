import assets from "../assets";
import constants from "../constants";

const GroupMembers = () => {
    return ( 
        <div className="w-full flex justify-center items-center mb-10 md:mt-8 mt-5">
            <div className="md:w-9/12 w-full flex-col justify-center items-center">
                <p className="text-4xl font-semibold text-slate-300 text-center md:mb-10 mb-5">Team Members</p>
                <div className="flex flex-wrap md:gap-x-8 md:gap-y-8 gap-y-5 gap-x-2 justify-center">
                    {constants.members.map(item => (
                        <div key={item.id} className="w-44 h-48 flex flex-col gap-5 feedback-card items-center pt-3 rounded-xl">
                            <img src={assets[item.image]} alt="profile pic" className="w-20"/>
                            <div className="flex flex-col gap-1 text-center">
                                <p className="text-slate-300">{item.name}</p>
                                <p className="text-slate-400">{item.position}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default GroupMembers;