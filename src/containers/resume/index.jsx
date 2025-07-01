import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader";
import { data } from "./utils.jsx";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import {MdWork} from "react-icons/md"
import "./styles.scss"


const Resume = () => {
    
    return ( 
        <section id="resume" className="resume">
            <PageHeader 
            headerText = "Resume"
            icon={<BsInfoCircleFill size={40} />} />

            <div className="timeline">
                <div className="experience">
                    <h3 className="experience-header">Experience</h3>
                    <VerticalTimeline layout={"1-column"} lineColor="var(--yellow-theme-main-color)">
                      {
                        data.experience.map((index, key)=>(
                            <VerticalTimelineElement key={key} className="vertical-timeline" contentStyle={{background: "none", color: "white", border: "1.5px solid var(--yellow-theme-main-color)"}}  icon ={<MdWork/>} iconStyle={{background: "#181818", color: "var(--yellow-theme-main-color)"}}>
                                <div className="timeline-container">
                                   <h3 className="timeline-headerone">{index.title}</h3>
                                   <h4 className="timeline-headertwo">{index.location}</h4>
                                   
                                </div>
                                <p className="timeline-description">{index.description}</p>
                               

                            </VerticalTimelineElement>
                        ))
                      }

                    </VerticalTimeline>
                </div>
              
            </div>

           
        </section>
     );
}
 
export default Resume;