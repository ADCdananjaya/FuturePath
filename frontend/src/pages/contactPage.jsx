import components from "../components";

const ContactPage = () => {
    return ( 
        <div className="w-full bg-[#000411]">
            <div className="px-6 sm:px-16 w-full">
                <components.Navbar />
            </div>
            <components.ContactForm />
            <components.FAQ />
            <components.Footer />
        </div>
    );
}

export default ContactPage;