import React from 'react'
import './styles.scss'
import { Row, Col } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import BaffleText from 'components/baffle-text'
import ThemeContext from '../../context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.show = this.show.bind(this)
    }
    static contextType = ThemeContext


    show() {
      this.setState({show : true})
    }

    render() {
        return (
            <section id={`${this.props.id}`} className="contact" style={{height: this.context.height}}>
                <Row>
                    <Col md={2} className="side">
                        <h2>
                            <BaffleText text="Contact" revealDuration={500} revealDelay={500} parentMethod={this.show} callMethodTime={1100} />
                        </h2>
                    </Col>
                    <Col md={5} className="form">
                        {this.form()}
                    </Col>
                    <Col md={5} className="map">
                        {this.map()}
                    </Col>
                </Row>
            </section>
        )
    }

    form() {
        if (this.state.show || this.context.height === "auto") {
            return (
               
                <div className="form-container">
                    <div className="line-text">
                        <h4>Get In Touch</h4>
                        <AnimationContainer delay={0} animation="fadeInUp fast">
                            <h3>Email:</h3>
                            <p>rasperger01@gmail.com</p>
                            <div className="submit">
                                <button 
                                    className="hover-button"
                                >
                                    <span>
                                        <a href="mailto:someone@example.com">Send email</a>
                                    </span>
                                </button>
                                <button className="hover-button"  onClick={() => 
                                        navigator.clipboard.writeText('rasperger01@gmail.com')
                                }>
                                <span>Copy email</span>
                                 </button>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={250} animation="fadeInUp fast">
                            <h3>Phone:</h3>
                            <p>+41 76 576 7068</p>
                            <div className="submit">
                                <button 
                                    className="hover-button" 
                                    onClick={() => 
                                        navigator.clipboard.writeText('+41 76 576 7068')
                                    }>
                                    <span>Copy number</span>
                                </button>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={500} animation="fadeInUp fast">
                        </AnimationContainer>
                        <div className="social social_icons">
                            <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/MihaelR')}/>
                            <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/mihael-rasperger/')} />
                            <FontAwesomeIcon icon={faFacebook} className="social_icon" onClick={() => window.open('https://hr-hr.facebook.com/raspaaa')} />
                            <FontAwesomeIcon icon={faInstagram} className="social_icon" onClick={() => window.open('https://www.instagram.com/rasp.art')} />
                        </div>
                    </div>
                </div>
            )
        }
    }

    map() {
        if (this.state.show || this.context.height === "auto") {
            return (
                <AnimationContainer delay={1000} animation="fadeIn fast" height={this.context.height}>
                    <iframe title="map" width="100%" height="100%" src="https://maps.google.com/maps?q=%20Bahnhoffstrasse%20,Zermatt&t=&z=7&ie=UTF8&iwloc=&output=embed"/>
                </AnimationContainer>
            )
        }
    }

}

export default Contact