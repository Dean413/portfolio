import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader";
import { skillsData } from "./utils";
import { motion } from "framer-motion";
import {Line} from "rc-progress"
import "./styles.scss"

const Skills = () => {
    
    return ( 
        <section id="skills" className="skills">
            <PageHeader 
            headerText = "Skills"
            icon={<BsInfoCircleFill size={40} />} />

            <div className="skills-content">
                {
                    skillsData.map((index, key)=>(
                       <div className="main-content" key={key}>
                            <motion.div
                            initial={{ x: -200, opacity: 0 }} // Slide in from left (use x: 100 for right)
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.5, ease: 'easeIn', delay: 0.3 }}>
                                <h3 className="skills-label">{index.label}</h3>
                                <div className="progress-bar-container">
                                    {
                                        index.data.map((skillItem, k)=>(
                                            <motion.div initial={{ opacity: 0 }} // Slide in from left (use x: 100 for right)
                                            animate={{ opacity: 1 }} transition={{duration: 1, ease: "easeOut"}}>
                                                <div className="progress-bar" key={k}>
                                                    <p>{skillItem.skillName}</p>
                                                    <Line percent={skillItem.percentage} strokeWidth="2" strokeColor="var(--yellow-theme-main-color)" trailWidth="2" strokeLinecap="sqare"/>
                                                    
                                                </div>

                                            </motion.div>
                                        ))
                                    }
                                </div>
                                
                            </motion.div>

                       </div>
                    ))
                }
            </div>
        </section>
     );
}
 
export default Skills;