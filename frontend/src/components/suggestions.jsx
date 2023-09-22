import { useState, useEffect } from "react";

const Suggestions = (props) => {

    const [ data, setData ] = useState([]);

    useEffect(() => {
        const candidateUrl = "http://127.0.0.1:8000/api/v1/job";
        

        fetch(candidateUrl).then(res => res.json()).then(data => setData(data))
        .catch(err => console.log(err));
    }, []);

    return ( 
        <div className="h-sreen w-full flex justify-center items-center py-10">
            <div className="flex flex-wrap gap-5 w-11/12 h-auto">
                {
                    data.map(item => (
                        <div key={item.id}>
                            
                                <p className="text-3xl text-slate-200 font-semibold">{item.title}</p>
                                <p className="text-md text-slate-300">{item.description}</p>
                                <div className="flex flex-row w-full justify-between">
                                    <p className="text-slate-300 text-md">{item.location}</p>
                                    <p className="text-slate-200 text-md">{item.salary}</p>
                                </div>
                                <p className="text-slate-200 text-md">{item.companyname}</p>
                                <p className="text-slate-200 text-md">{item.modality === "R" ? "Remote" : "In Office"}</p>
                           
                           
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Suggestions;
