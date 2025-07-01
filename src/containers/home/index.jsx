import { Typewriter } from 'react-simple-typewriter';
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"
import "./styles.scss"

const Home = () => {
  const navigate = useNavigate()

  const navigateToContact =()=>{
    navigate("/contact")
  }

  return (
    <section id="home" className="home">
      <div className="home-text-wrapper">
        <h1>
          <Typewriter
            words={[
              "Hello, I'm Olalekan Full-Stack Developer"
            ]}
            loop={1} // 0 = infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={0}
            delaySpeed={30}
          />
        </h1>
        <motion.button className='hire-button' initial={{ opacity: 0, y: 30 }}  animate={{ opacity: 1, y: 0 }} transition={{ delay: 4, duration: 1 }} onClick={navigateToContact}>Hire Me</motion.button>
      </div>
  
        
    
     
        
      
     
    </section>
  );
};
export default Home