import components from "../components";

const AboutPage = () => {
    return ( 
        <div className="w-full bg-[#000411]">
            <div className="px-6 sm:px-16 w-full">
                <components.Navbar />
            </div>
            <components.MissonOrFocus id="mission" />
            <components.MissonOrFocus id="history" />
            <components.MissonOrFocus id="focus" />
            <components.MissonOrFocus id="values" />
            <components.GroupMembers />
            <components.Footer />
        </div>
    );
}

export default AboutPage;