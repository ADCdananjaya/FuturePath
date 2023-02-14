import components from "../components";

const LoginPage = (props) => {
    return ( 
        <div className="w-full h-screen bg-[#000411] py-10 px-5 flex justify-center items-center">
            <div className="flex flex-row md:w-11/12 w-full justify-center gap-20">
                <div>
                    <components.LoginForm status={props.status}/>
                </div>
                <div className="md:block hidden">
                    <components.WelcomeCard status={props.status} />
                </div>
            </div>
        </div>
    );
}

export default LoginPage;