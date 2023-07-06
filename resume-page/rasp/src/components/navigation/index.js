import React from 'react'
import './styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
var scrollToElement = require('scroll-to-element')

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.sections = [
            {
                name: "Home"
            },
            {
                name: "About"
            },
            {
                name: "Services"
            },
            {
                name: "Portfolio"
            },
            {
                name: "Testimonials"
            },
            {
                name: "Contact"
            }
        ]
    }

    navScroll(id, v) {
        
        this.setState({show: false})
        const el = document.getElementById(id)
        scrollToElement(el, {
            offset: 0,
            ease: 'in-out-expo',
            duration: 2000
          }).on('end', () => {
            this.props.change(v)
        });
    }


    render() {
        return(
            <div>
                <div className="opener">
                    <FontAwesomeIcon icon={faBars} className="closeNav" onClick={() => this.setState({show: true})} />
                </div>
                <div className={`navigation ${this.state.show ? "active" : ""}`}>
                    <FontAwesomeIcon icon={faTimes} className="closeNav" onClick={() => this.setState({show: false})} />
                    <div className="logo">
                        <img src="img/favicon.ico" alt="logo"/>
                    </div>
                    <div className="links">
                        <ul>
                            {this.items()}
                        </ul>
                    </div>
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

    items() {
        return this.sections.map((value, index) => {
            return (
                <li key={index}>
                    <button onClick={() => this.navScroll(value.name.toLowerCase(), index)}>{value.name}</button>
                </li>
            )
        })
    }
}
export default Navigation