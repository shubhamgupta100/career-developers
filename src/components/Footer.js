import React from 'react';
import ShubhamProfile from "../assets/image/shubham.jpg"
const Footer = () => {
    return (
        <React.Fragment>
            <section className="footer" id="contact">
                <div className="contact">

                    <div className="con">
                        <i className="fas fa-envelope"></i>
                        <p>careerdevelopers739@gmail.com</p>
                    </div>

                    <div className="con">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Career Developers (DAV PG COLLAGE , NORTH BANDHA RUDRA LIBRARY , AZAMGARH)</p>
                    </div>

                    <div className="con">
                        <i className="fa fa-phone"></i>
                        <p>6386291289</p>
                    </div>

                </div>

                <div className="connect-with-us">
                    <div className="contact-heading">
                        <h3>Connect with us</h3>
                        <p>
                            24/7 available . Contact with us to get Started. We are available at instagram , facebook , whatsapp and twitter.
                        </p>
                    </div>

                    <div className="icons">
                        <a href="https://www.facebook.com/people/Satendra-Yadav/pfbid026AjKgipNcEQ75gMuTiuHZUUePyENNj4hm4hNZhmKTQT5Bqv1RMXwCe6QUW4rALQ6l/?mibextid=kFxxJD" target='blank'><i className="fab fa-facebook"></i></a>
                        <a href="https://x.com/Cdevelopers7398?t=vUa3_DIuUWYGAOYouh2tlg&s=08" target='blank'><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/careerdevelopers6/?igsh=MXBjYjg0MzJoZnNxMg%3D%3D" target='blank'><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <ul className="cards shubham-card">
                    <li>
                        <span className="card">
                            <img src={ShubhamProfile} className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                        <path />
                                    </svg>
                                    <img className="card__thumb" src={ShubhamProfile} alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">Shubham Gupta</h3>
                                        <span className="card__status">Software Enginner</span>
                                        <div className="icons">
                                            <a href="https://www.facebook.com/shubhamgupta9559/" target='blank'><i className="fab fa-facebook"></i></a>
                                            <a href="https://twitter.com/shubhgupta100/" target='blank'><i className="fab fa-twitter"></i></a>
                                            <a href="https://www.instagram.com/shubham.gupta100/" target='blank'><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <p className="card__description">Shubham is a B.tech graduate  he is a software enginner and
                                    working in this domain since last 2 years.</p>
                            </div>
                        </span>
                    </li>
                </ul>
            </section>
        </React.Fragment>
    )
}
export default Footer;