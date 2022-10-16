import { Box } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Banner } from './Banner';

const slideImages = [
    'images/meuble.jpeg',
    'images/3d.jpg',
    'images/archi.jpeg',
    'images/cinema.jpeg',
    'images/domotique.jpg',
    'images/plan.jpeg',
    'images/restaurant.jpeg'
]


export const Apercu = () => (
    <Carousel
        className="carousel"
        stopAutoPlayOnHover={false}
        indicators={false}
        navButtonsAlwaysInvisible={true}>
        {slideImages.map((item, i) =>
            <Box sx={{
                backgroundImage: `url(${item})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100vw',
                height: '100vh',
                flexDirection: 'column'
            }}>
                <Banner />
            </Box>
        )}
    </Carousel>
);