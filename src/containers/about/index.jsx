import PageHeader from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs"
import { motion } from "framer-motion";
import {SiJavascript, SiTailwindcss} from "react-icons/si"
import {FaDev, FaDatabase} from "react-icons/fa"
import "./styles.scss"

const personalDetails = [
    {
    label: "Name",
    value: "Olalekan"
    },
    {
        label: "Location",
        value: "Nigeria"
    },
    {
        label: "Email Address",
        value: "bamigboyeolalekan6@gmail.com"
    },
    {
        label: "LinkedIn",
        value: <a style={{textDecoration: "none", color: "var(--yellow-theme-sub-text-color)"}} href= "https://linkedin.com/in/olalekanbamigboye">www.linkedin.com/in/olalekanbamigboye</a>
    },
    {
        label: "Contact",
        value: "+2347039752831"
    }
]

const professionalSummary = "Full Stack Developer with 3 years of hands-on experience building robust, scalable, and user-focused web applications. I specialize in modern JavaScript and TypeScript development, with a strong command of React, Node.js, Express, and Tailwind CSS on the frontend and backend. I have worked extensively with both MongoDB and MySQL, and have a deep understanding of RESTful API design and integration. My development approach is centered on clean code, performance optimization, and responsive design. I enjoy turning complex problems into simple, elegant solutions and thrive in fast-paced, collaborative environments. Whether building front-end, back-end or full-stack applications from scratch or improving existing systems, I bring a strong attention to detail, a growth mindset, and a passion for delivering seamless digital experiences."



const About = () => {
    
    return ( 
        <section id="about" className="about">
            <PageHeader 
            headerText = "About me"
            icon={<BsInfoCircleFill size={40} />} />

            <div className="about-content">
                <div className="personal-details">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2.5, ease: 'easeOut' }}>
                        
                        <div>
                            <h2>Full-Stack Developer</h2>
                            <p>{professionalSummary}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 300, opacity: 0 }} // Slide in from left (use x: 100 for right)
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2.5, ease: 'easeOut' }}>
                        <h3 className="personal-info">Personal Information</h3>
                        <ul>
                            {personalDetails.map((index, key) =>(
                                <li key={key}>
                                    <span className="title">{index.label}:</span>
                                    <span className="value">{index.value}</span> 
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <div className="services">
                    <motion.div
                        initial={{ x: 300, opacity: 0 }} // Slide in from left (use x: 100 for right)
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2.5, ease: 'easeOut' }}>
                        <motion.div  animate={{rotate: 360}} transition={{repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear"}} >
                            <div className="inner-content">
                                <div><FaDev size={60} color="var(--yellow-theme-main-color)" /></div>
                                <div><FaDatabase size={60} color="var(--yellow-theme-main-color)" /></div>
                                <div><SiJavascript size={60} color="var(--yellow-theme-main-color)" /></div>
                                <div><SiTailwindcss size={60} color="var(--yellow-theme-main-color)" /></div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>     
            </div>    
        </section>
     );
}
 
export default About;