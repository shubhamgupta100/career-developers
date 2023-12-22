import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <section className="footer" id="contact">
                <ul className="cards">
                    <li>
                        <a href="https://shubhamgupta100.github.io/shubham_portfolio/" className="card">
                            <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
                            <div className="card__overlay">
                                <div className="card__header">
                                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                        <path />
                                    </svg>
                                    <img className="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                                    <div className="card__header-text">
                                        <h3 className="card__title">Shubham Gupta</h3>
                                        <span className="card__status">Full Stack Developer</span>
                                    </div>
                                </div>
                                <p className="card__description">Shubham is a B.tech graduate  he is a software enginner and
                                    working in this domain since last 2 years.</p>
                            </div>
                        </a>
                    </li>
                </ul>

                <div className="contact">

                    <div className="con">
                        <i className="fas fa-envelope"></i>
                        <p>sg350348@gmail.com</p>
                    </div>

                    <div className="con">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Carrer Developers</p>
                    </div>

                    <div className="con">
                        <i className="fa fa-phone"></i>
                        <p>9559364730</p>
                    </div>

                </div>

                <div className="connect-with-us">
                    <div className="contact-heading">
                        <h3>Connect with us</h3>
                        <p>
                            Consume out of the box data Analytics anwhere, anytime. Contact us to get Started.
                        </p>
                    </div>

                    <div className="icons">
                        <a href="https://www.facebook.com/shubhamgupta9559/"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/shubhgupta100/"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/shubham.gupta100/"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Footer;