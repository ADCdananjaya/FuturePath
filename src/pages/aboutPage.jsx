import components from "../components";

const AboutPage = () => {
    return ( 
        <div className="w-full bg-[#000411]">
            <div className="px-6 sm:px-16 w-full">
                <components.Navbar />
            </div>
            <p className="text-9xl text-slate-200">About page</p>
            <components.Footer />
        </div>
    );
}

export default AboutPage;