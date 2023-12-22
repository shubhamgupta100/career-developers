import React from 'react';
import Student from "../assets/image/students.jpg"
const Hero = () => {
    return (<React.Fragment>
        <section className="intro" id="instroSection">
            <div className="main-container container">
                <div className="left-container">
                    <div className="heading">
                        <h1>
                            Why Should you join us
                        </h1>
                    </div>
                    <div className="content">
                        <p>
                            Welcome to Carrer Developers, where academic excellence meets personalized guidance.
                            Our coaching institute is dedicated to empowering students to reach their fullest potential.
                            Join us and embark on a transformative educational journey that will shape your future.
                        </p>
                    </div>
                    <div className="button">
                        <button type="button" className="btn btn-danger btn-lg" style={{ background: "#924cd9" }}>Inquiry</button>
                    </div>
                </div>
                <div className="image">
                    <img src={Student} alt="" />
                </div>
            </div>
        </section>
    </React.Fragment>
    )
}
export default Hero;