import { useState } from "react";
import assets from "../assets";

const ContactForm = () => {
    
    const [ formData, setFormData ] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = () => {
        if (formData.name === "" || formData.email === "" || formData.message === "") {
            console.log("input fields are empty!");
        }
        else {
            console.log(formData);
            fetch("https://127.0.0.1:8000/api/v1/contact", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network issue");
                }
                else {
                    formData = {
                        name: "",
                        email: "",
                        message: ""
                    }
                }
            })
            .catch(err => {
                console.log("Error: ", err)
            });
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    return ( 
        <div className="w-full flex items-center justify-center">
            <div className="flex flex-row justify-around md:p-8 p-3 mt-10 md:w-8/12 w-11/12 h-auto form-card rounded-xl">
                <div className="flex flex-col gap-3 md:w-auto w-full">
                    <p className="text-2xl text-slate-50 font-semibold">Contact Us</p>
                    <p className="text-sm text-slate-300 md:max-w-[370px] max-w-[330px]">Need help or have a question? Reach out to us!We're always here to assist you.</p>
                    <div className="flex flex-col pl-3">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-200 mb-1">Name</label>
                        <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} className="mb-3 bg-[#616469] md:w-80 w-72 h-8 rounded-sm px-3 text-slate-300 text-md"/>

                        <label htmlFor="email" className="text-sm font-semibold text-slate-200 mb-1">Email</label>
                        <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} className="mb-3 bg-[#616469] md:w-80 w-72 h-8 rounded-sm px-3 text-slate-300 text-md"/>

                        <label htmlFor="message" className="text-sm font-semibold text-slate-300 mb-1">Message</label>
                        <textarea name="message" id="message" onChange={handleChange} value={formData.message} className="mb-3 bg-[#616469] rounded-sm md:w-80 w-72 h-32 px-3 py-1 text-slate-300 text-md"></textarea>
                        <button type="button" onClick={handleSubmit} className="bg-blue-gradient px-4 rounded-lg text-black w-32 h-10 font-semibold">
                            Submit
                        </button>
                    </div>
                </div>
                <img src={assets.contactImage} alt="contact image" className="hidden md:block w-[410px]"/>
            </div>
        </div>
    );
}

export default ContactForm;