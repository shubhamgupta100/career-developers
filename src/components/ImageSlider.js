import * as React from 'react';
import { useMediaQuery, ImageListItem, ImageList } from '@mui/material'
import FirstImage from "../assets/image/3.jpeg"
import SecondImage from "../assets/image/1.jpeg"
import ThirdImage from "../assets/image/2.jpeg"
import FifthImage from "../assets/image/4.jpeg"
import SixthImage from "../assets/image/5.jpeg"
import SeventImage from "../assets/image/6.jpeg"
import EightImage from "../assets/image/7.jpeg"
import NineImage from "../assets/image/8.jpeg"
import TenImage from "../assets/image/9.jpeg"
import ElevenImage from "../assets/image/10.jpeg"
import TweleveImage from "../assets/image/11.jpeg"
import ThirteenImage from "../assets/image/12.jpeg"
import FourteenImage from "../assets/image/13.jpeg"
import FifteenImage from "../assets/image/14.jpeg"
import SixteenImage from "../assets/image/15.jpeg"
import SeventeenImage from "../assets/image/20.jpeg"
import EighteenImage from "../assets/image/21.jpeg"
import NinteenImage from "../assets/image/22.jpeg"
export default function ImageSlider() {
    const isMobile = useMediaQuery('(max-width:800px)')
    return (<div className='image-slider' id='galleries'>
        <div className="gallery-heading">
            <h1>
                Galleries
            </h1>
        </div>
        <ImageList cols={isMobile ? 2 : 6} rowHeight={164}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        loading="lazy"
                        alt=''
                    />
                </ImageListItem>
            ))}
        </ImageList>
    </div>
    );
}

const itemData = [
    {
        img: FirstImage,
        title: 'Breakfast',
    },
    {
        img: SecondImage,
        title: 'Burger',
    },
    {
        img: ThirdImage,
        title: 'Camera',
    },
    {
        img: FifthImage,
        title: 'Coffee',
    },
    {
        img: SixthImage,
        title: 'Hats',
    },
    {
        img: SeventImage,
        title: 'Honey',
    },
    {
        img: EightImage,
        title: 'Basketball',
    },
    {
        img: NineImage,
        title: 'Fern',
    },
    {
        img: TenImage,
        title: 'Mushrooms',
    },
    {
        img: ElevenImage,
        title: 'Tomato basil',
    },
    {
        img: TweleveImage,
        title: 'Sea star',
    },
    {
        img: ThirteenImage,
        title: 'Bike',
    },
    {
        img: FourteenImage,
        title: 'Bike',
    },
    {
        img: FifteenImage,
        title: 'Bike',
    },
    {
        img: SixteenImage,
        title: 'Bike',
    },
    {
        img: SeventeenImage,
        title: 'Bike',
    }, {
        img: EightImage,
        title: 'Bike',
    },
    {
        img: NinteenImage,
        title: 'Bike',
    },
];
