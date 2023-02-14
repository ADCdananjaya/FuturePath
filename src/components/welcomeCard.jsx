import constants from "../constants";
import assets from "../assets";

const WelcomeCard = (props) => {
    console.log(constants.welcomes[0].title);
    return ( 
        <div className="flex flex-col gap-5">
            <p className="text-slate-200 text-5xl">
                {constants.welcomes.find(item => item.status === props.status).title}
            </p>
            <p className="text-slate-300 text-md w-96">
                {constants.welcomes.find(item => item.status === props.status).description}
            </p>
            <img src={assets[constants.welcomes.find(item => item.status === props.status).image]} alt="welcome image" className="w-[400px]"/>
        </div>
    );
}

export default WelcomeCard;