const navLinks = [ 
    {
        id: "home",
        title: "Home"
    },
    {
        id: "about",
        title: "About Us"
    },
    {
        id: "contact",
        title: "Contact Us"
    },
    {
        id: "start",
        title: "Get Started"
    }
]

const features = [
    {
        id: "f1",
        icon: "star",
        title: "Search and matching",
        description: "Find Your Perfect Match with Our Advanced Search and Matching System."
    },
    {
        id: "f2",
        icon: "shield",
        title: "verified profiles",
        description: "Join a Community of Verified Students and Companies."
    },
    {
        id: "f3",
        icon: "send",
        title: "Analytics and Reporting",
        description: "Track Your Progress and Optimize Your Performance with Our Analytics and Reporting Tools."
    }
]

const feedBacks = [
    {
        id: "ld",
        name: "Lucifer Devon",
        message: "I was struggling to find an internship that aligned with my interests and skills, but FuturePath made it so easy!",
        position: "Undergraduate"
    },
    {
        id: "mm",
        name: "Maneesha Maduranga",
        message: "The personalized recommendations were spot-on, and I was able to secure an internship.",
        position: "Undergraduate"
    },
    {
        id: "lp",
        name: "Lahiru Prasanna",
        message: "The communication tools made the process seamless, and I gained so much valuable experience and knowledge.",
        position: "Undergraduate"
    }
]

const faqs = [
    {
        id: "q1",
        question: "How can I contact the company",
        answer: "Contact us via the contact  form at the top of our website. Fill out your details and message, and we'll respond promptly.",
    },
    {
        id: "q2",
        question: "What is the best way to reach customer service?",
        answer: "The best way to reach our customer service is through the contact form located on our website or by emailing us.",
    },
    {
        id: "q3",
        question: "How quickly will I receive a response to my inquiry?",
        answer: "Dedicated to fast customer service. Our team responds to inquiries 24/7, aiming to reply within 24 hours.",
    },
    {
        id: "q4",
        question: "Is there a way to track my inquiry or request?",
        answer: "yes,you can Track your inquiry or request status through our system, but it's not publicly available for privacy reasons.",
    },
    {
        id: "q5",
        question: "Can I attach files or images to my inquiry?",
        answer: "Yes, you can attach files or images to your inquiry. Please use the contact form on our website to send us your request.",
    },
    {
        id: "q6",
        question: "How do I change or update my contact information?",
        answer: "To change or update your contact information, simply log into your account on our website and navigate to the profile section.",
    },
]

const socials = [
    {
        id: "fb",
        image: "fb"
    },
    {
        id: "insta",
        image: "insta"
    },
    {
        id: "ld",
        image: "linkedin"
    },
    {
        id: "tw",
        image: "twitter"
    }
]

const welcomes = [
    {
        status: "canLog",
        title: "Sign In to FuturePath",
        description: "Search for internship opportunities across various industries and locations.",
        image: "candidateLoginImage",
        buttonText: "Login",
        navigate: "/candidate_register"
    },
    {
        status: "comLog",
        title: "Sign In to FuturePath",
        description: "Search for internship opportunities across various industries and locations.",
        image: "companyLoginImage",
        buttonText: "Login",
        navigate: "/company_register"
    },
    {
        status: "canReg",
        title: "Sign Up to FuturePath",
        description: "We helps to students find internships would be a job search platform specifically designed for students seeking work experience in their field of study.",
        image: "candidateSignImage",
        buttonText: "Register",
        navigate: "/candidate_login"
    },
    {
        status: "comReg",
        title: "Sign Up to FuturePath",
        description: "By posting your internship opportunity on our website, you will reach a large pool of qualified candidates and be able to find the perfect intern for your company.",
        image: "companySignImage",
        buttonText: "Register",
        navigate: "/company_login"
    }
]

const aboutCompany = [
    {
        id: "mission",
        title: "Mission",
        description: '"Our mission at FuturePath is to empower university students and local companies to achieve their full potential through meaningful internships. We believe in creating a bridge between education and industry by connecting students with local companies and providing a platform that fosters collaboration and growth."',
        image: "companyMisson"
    },
    {
        id: "history",
        title: "Company History",
        description: 'Combining cutting-edge technology with years of experience in both the education and corporate sectors, they created a unique solution that offers personalized recommendations and efficient communication tools.',
        image: "companyHistory"
    },
    {
        id: "focus",
        title: "Customer Focus",
        description: 'At FuturePath, our customers are at the center of everything we do. We are dedicated to providing an exceptional experience for both university students and local companies by delivering personalized recommendations, efficient communication tools, and a user-friendly platform.',
        image: "customerFocus"
    },
    {
        id: "values",
        title: "Company Values",
        description: [
            {
                index: 0,
                value: "Empowerment: We believe in empowering university students and local companies to achieve their full potential by providing them with the tools and resources they need to succeed."
            },
            {
                index: 1,
                value: "Integrity: We believe in conducting business with honesty, transparency, and a strong commitment to ethical principles."
            },
            {
                index: 2,
                value: "Innovation: We are dedicated to constantly innovating and improving our platform to deliver the best possible experience for our customers."
            }
        ],
        image: "customerValues"
    }
]

const members = [
    {
        id: 0,
        name: "A.D.C. Danajaya",
        position: "Founder & SEO",
        image: "male"
    },
    {
        id: 1,
        name: "P.B.M. Maduranga",
        position: "Head of Engineering",
        image: "male"
    },
    {
        id: 2,
        name: "R.A.D.L. Prasanna",
        position: "Chief Operating office",
        image: "male"
    },
    {
        id: 3,
        name: "T.P. Kitulagoda",
        position: "Head of Sales",
        image: "female"
    },
    {
        id: 4,
        name: "K.M.N.D. Senavirathna",
        position: "Head of Product",
        image: "male"
    },
    {
        id: 5,
        name: "D.G.K.K. Dhanasekara",
        position: "Product Designer",
        image: "male"
    },
    {
        id: 6,
        name: "W.A.G. Nawanjana",
        position: "Engineering Manager",
        image: "female"
    },
    {
        id: 7,
        name: "W.K.H. Udayangani",
        position: "Marketing Manager",
        image: "female"
    },
]

export default { navLinks, features, feedBacks, socials, faqs, welcomes, aboutCompany, members };