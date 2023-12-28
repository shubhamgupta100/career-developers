import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import C1 from "../assets/image/c1.jpeg"
import C2 from "../assets/image/c2.jpeg"
import C3 from "../assets/image/c3.jpeg"
const Courousel = () => {
    return (
        <div className='courousel'>
            <Carousel autoPlay interval={1000}>
                <div>
                    <img src={C1} alt='' />
                </div>
                <div>
                    <img src={C2} alt='' />
                </div>
                <div>
                    <img src={C3} alt='' />
                </div>
            </Carousel>
        </div>
    )
}
export default Courousel;