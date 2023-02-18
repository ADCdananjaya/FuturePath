import { useState } from "react";
import constants from "../constants";
import FormButton from "./formButton";
import { useNavigate } from "react-router-dom";

const RegForm = (props) => {

    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        email: "",
        name: "",
        number: "",
        password: "",
    })

    const handleSubmit = async () => {
        if (
          formData.email === "" ||
          formData.name === "" ||
          formData.number === "" ||
          formData.password === ""
        ) {
          console.log("Input field are empty!");
        } else {
          const companyUrl = "http://127.0.0.1:8000/api/v1/signup/company";
          const studentUrl = "http://127.0.0.1:8000/api/v1/signup/student";
    
          try {
            const responce = await axios.post(
              `${props.status === "comReg" ? companyUrl : studentUrl}`,
              {
                username: formData.name,
                email: formData.email,
                password: formData.password,
                password2: formData.password,
              }
            );
            if (responce.data.sucess) {
              //Store Token
              //Navigate User To DashBoard
              console.log(responce.data.sucess);
              navigate(
                `${
                  props.status === "comReg" ? "/company_login" : "/candidate_login"
                }`
              );
            }
          } catch (error) {
            if (error.response) {
              //Display error msg
              console.log(error.response.data.email);
              console.log(error.response.data.username);
              console.log(error.response.data.password);
            }
          }
        }
      };

    const handleChange = (e) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    return ( 
        <div className="flex flex-col md:px-8 px-3 md:py-10 py-7 form-card rounded-lg gap-2">
            <div className="flex flex-row justify-between">
                <p className="text-slate-200">Welcome to FuturePath</p>
                <p className="text-slate-300 text-sm w-32">Have an Account? <a className="text-cyan-400 opacity-80 hover:opacity-100" href={constants.welcomes.find(item => item.status === props.status).navigate}>sign in</a></p>
            </div>
            <p className="text-slate-200 text-5xl mb-4">Sign up</p>
            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-normal text-slate-300 mb-1">Email</label>
                <input type="email" name="email" onChange={handleChange} value={formData.email} id="email" className="mb-3 bg-[#616469] md:w-80 w-72 h-9 rounded-md px-3 text-slate-300 text-md"/>
            </div>
            <div className="flex flex-row gap-5">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-normal text-slate-300 mb-1">Name</label>
                    <input type="name" name="name" onChange={handleChange} value={formData.name} id="name" className="mb-3 bg-[#616469] md:w-[150px] w-32 h-9 rounded-md px-3 text-slate-300 text-md"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="Contact Number" className="text-sm font-normal text-slate-300 mb-1">Number</label>
                    <input type="tel" name="number" onChange={handleChange} value={formData.number} id="number" className="mb-3 bg-[#616469] md:w-[150px] w-32 h-9 rounded-md px-3 text-slate-300 text-md"/>
                </div>
            </div>

            <div className="flex flex-col mb-2">
                <label htmlFor="password" className="text-sm font-semibold text-slate-300 mb-1">Password</label>
                <input type="password" name="password" onChange={handleChange} value={formData.password} id="password" className="mb-3 bg-[#616469] md:w-80 w-72 h-9 rounded-md px-3 text-slate-300 text-md"/>
            </div>

            <FormButton status={props.status} onSubmit={handleSubmit}/>
        </div>
    );
}

export default RegForm;