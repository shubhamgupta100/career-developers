import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <section class="footer" id="contact">
                <ul class="cards">
                    <li>
                        <a href="" class="card">
                            <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
                            <div class="card__overlay">
                                <div class="card__header">
                                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                                        <path />
                                    </svg>
                                    <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
                                    <div class="card__header-text">
                                        <h3 class="card__title">Shubham Gupta</h3>
                                        <span class="card__status">Full Stack Developer</span>
                                    </div>
                                </div>
                                <p class="card__description">Shubham is a B.tech graduate  he is a software enginner and
                                    working in this domain since last 2 years.</p>
                            </div>
                        </a>
                    </li>
                </ul>

                <div class="contact">

                    <div class="con">
                        <i class="fas fa-envelope"></i>
                        <p>sg350348@gmail.com</p>
                    </div>

                    <div class="con">
                        <i class="fas fa-map-marker-alt"></i>
                        <p>Carrer Developers</p>
                    </div>

                    <div class="con">
                        <i class="fa fa-phone"></i>
                        <p>9559364730</p>
                    </div>

                </div>

                <div class="connect-with-us">
                    <div class="contact-heading">
                        <h3>Connect with us</h3>
                        <p>
                            Consume out of the box data Analytics anwhere, anytime. Contact us to get Started.
                        </p>
                    </div>

                    <div class="icons">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Footer;