'use client';

import { Carousel } from 'flowbite-react';
import logo from 'logo.svg';
import "components/carousel.css";
export default function DefaultCarousel() {
    return (
        <div className="h-128">
            <Carousel slideInterval={10000}>

                <img
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                />

                <img
                    alt="..."
                    src={logo}
                />
                <img
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                />
                <img
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                />
                <img
                    alt="..."
                    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                />
            </Carousel>
        </div >

    )
}


