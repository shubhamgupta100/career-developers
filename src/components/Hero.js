import React from 'react';
import YouTube from 'react-youtube';

const Hero = () => {
    const opts = {
        height: '290',
        width: "100%",
        playerVars: {
            autoplay: 0,
        },
    };
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
                            Welcome to Career Developers, where academic excellence meets personalized guidance.
                            Our coaching institute is dedicated to empowering students to reach their fullest potential.
                            Join us and embark on a transformative educational journey that will shape your future.
                        </p>
                    </div>
                    <div className="button">
                        <a href='https://wa.me/9838756419' target='blank'>
                            <button type="button" className="btn btn-danger btn-lg" style={{ background: "#924cd9" }}>
                                Inquiry</button> </a>
                    </div>
                </div>
                <div className="image">
                    <YouTube videoId={'3ARGKv-yMTQ'} opts={opts} />
                </div>
            </div>
        </section>
    </React.Fragment>
    )
}
export default Hero;