import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Banner } from './Banner';
import { FirstDescriptionCard } from './FirstDescriptionCard';

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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <Banner />
                <FirstDescriptionCard />
            </Box>
        )}
    </Carousel>
);