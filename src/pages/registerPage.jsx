import components from "../components";

const RegisterPage = (props) => {
    return ( 
        <div className="w-full h-screen bg-[#000411] py-10 px-5 flex justify-center items-center">
            <div className="flex flex-row md:w-11/12 w-full justify-center items-center gap-20">
                <div>
                    <components.WelcomeCard status={props.status} />
                </div>
                <div>
                    <components.RegForm status={props.status}/>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;