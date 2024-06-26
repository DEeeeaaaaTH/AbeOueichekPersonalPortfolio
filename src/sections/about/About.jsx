import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import { FaDownload } from "react-icons/fa6";
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container"> 
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" /> 
          </div>
      </div>
      <div className="about__right">
        <h2>About Me</h2>
        <div className="about__cards">
          {
            data.map(item => (
              <Card key={item.id} className="about__card">
                <span className='about__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))
          }
        </div>
        <p>
          paragaph 1
        </p>
        <p>
        Greetings! I'm Abe Oueichek, based in Fullerton, CA. With a robust background as a senior payroll associate and armed with extensive tax knowledge, my Bachelor's degree in computer science serves as a unique asset, enhancing my proficiency in both accounting and technology. Let's collaborate and leverage this blend of skills to elevate your projects!
        </p>
        <a href={CV} download className='btn primary'>Download CV <FaDownload /> </a>
      </div>
    </div>
  </section>
  )
}

export default About


