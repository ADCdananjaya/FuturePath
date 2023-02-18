import FormButton from "./formButton";
import constants from "../constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {

    const [ name, setName ] = useState("");
    const [ password, setPassword ] = useState("");
    const navigate = useNavigate();

    const onSubmit = async() => {
        if (name === "" || password === "") {
            console.log("input fields are empty!");
        }
        else {
            try {
                const responce = await axios.post("http://127.0.0.1:8000/api/v1/login",{
                    username:name,
                    password:password
                })
                
                if(responce.data){
                    let {token,sucess,} = responce.data
                    localStorage.setItem('Token', token);

                    props.setAuthenticated(sucess);
                    props.setLoginType(props.status);
                    navigate("/dashboard");
                }
                
            } catch (error) {
                if (error.response) {
                    //Display error msg
                    console.log(error.response.data.non_field_errors);
                }
            }
        }
    }

    return ( 
        <div className="flex flex-col md:px-8 px-3 md:py-10 py-7 form-card rounded-lg gap-3">
            <p className="text-slate-200 text-5xl">Sign in</p>
            <p className="text-slate-300 mb-5">Welcome onboard with us!</p>
            <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold text-slate-300 mb-1">Username</label>
                <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} className="mb-3 bg-[#616469] md:w-80 w-72 h-10 rounded-sm px-3 text-slate-300 text-md"/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-semibold text-slate-300 mb-1">Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} value={password} name="password" id="password" className="mb-3 bg-[#616469] md:w-80 w-72 h-10 rounded-sm px-3 text-slate-300 text-md"/>
            </div>

            <div className="flex flex-row text-slate-300 justify-between">
                <p className="text-sm"><input type="checkbox" className="bg-[#616469]"/> Remember me?</p>
                <button className="text-sm hover:text-slate-100">Forgot Password</button>
            </div>
            <FormButton status={props.status} onSubmit={onSubmit}/>
            <p className="text-center text-slate-300">New to FuturePath? <a className="text-slate-200 cursor-pointer" href={constants.welcomes.find(item => item.status === props.status).navigate}>Register</a> Here</p>
        </div>
    );
}

export default LoginForm;