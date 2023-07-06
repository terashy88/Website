import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I'm a fulltime Software developer</h3>
                            <div className="separator" />
                            <p>
                                With a Master degree in Mathematics and Physics, and hands-on experience using frontend technologies and languages to create and implement software applications, I am confident I will be a valuable asset to any software development process.
                                <br/>
                                <br/>
                                I worked in Cinnamon Agency, Worcon doo and WND AG company last 3.5 years as Software developer.
                                <br/>
                                <br/>
                                Born and raised in Croatia, currently living in Zermatt, Valais, Switzerland.
                                <br/>
                                <br/>
I                               I am being challenged and thrilled working with other people like a "team player". Continuing to learn new stuff and development techniques are important to me and the success of your organization.
                                <br/>
                                <br/>
                            </p>
                            <div className="social social_icons">
                            <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/MihaelR')}/>
                            <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/mihael-rasperger/')} />
                            <FontAwesomeIcon icon={faFacebook} className="social_icon" onClick={() => window.open('https://hr-hr.facebook.com/raspaaa')} />
                            <FontAwesomeIcon icon={faInstagram} className="social_icon" onClick={() => window.open('https://www.instagram.com/rasp.art')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="React.js" value={90} delay={1100} />
                                <Progress name="Vue.js" value={70} delay={1100} />
                                <Progress name="Redux/Vuex" value={70} delay={1100} />
                                <Progress name="Typescript" value={80} delay={80} />
                                <Progress name="Html" value={90} delay={90} />
                                <Progress name="Css" value={80} delay={90} />
                                <Progress name="Bootstrap/MUI/Tailwind" value={70} delay={70} />
                                <Progress name="Git" value={90} delay={90} />
                                <Progress name="Scrum" value={70} delay={80} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero