import FormButton from "./formButton";
import constants from "../constants";

const LoginForm = (props) => {
    return ( 
        <div className="flex flex-col md:px-8 px-3 md:py-10 py-7 form-card rounded-lg gap-3">
            <p className="text-slate-200 text-5xl">Sign in</p>
            <p className="text-slate-300 mb-5">Welcome onboard with us!</p>
            <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold text-slate-300 mb-1">Username</label>
                <input type="text" name="name" id="name" className="mb-3 bg-[#616469] md:w-80 w-72 h-10 rounded-sm px-3 text-slate-300 text-md"/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-semibold text-slate-300 mb-1">Password</label>
                <input type="password" name="password" id="password" className="mb-3 bg-[#616469] md:w-80 w-72 h-10 rounded-sm px-3 text-slate-300 text-md"/>
            </div>

            <div className="flex flex-row text-slate-300 justify-between">
                <p className="text-sm"><input type="checkbox" className="bg-[#616469]"/> Remember me?</p>
                <button className="text-sm hover:text-slate-100">Forgot Password</button>
            </div>
            <FormButton status={props.status}/>
            <p className="text-center text-slate-300">New to FuturePath? <a className="text-slate-200 cursor-pointer" href={constants.welcomes.find(item => item.status === props.status).navigate}>Register</a> Here</p>
        </div>
    );
}

export default LoginForm;