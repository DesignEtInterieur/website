import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const imagesAccueilPath = 'content/accueil/images';

const slideImages = [
    `${imagesAccueilPath}/meuble.jpeg`,
    `${imagesAccueilPath}/3d.jpg`,
    `${imagesAccueilPath}/archi.jpeg`,
    `${imagesAccueilPath}/cinema.jpeg`,
    `${imagesAccueilPath}/domotique.jpg`,
    `${imagesAccueilPath}/plan.jpeg`,
    `${imagesAccueilPath}/restaurant.jpeg`
]


export const Apercu: React.FC = () => (
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
                height: '120vh',
                transform: 'skew(0deg, -8deg) translate(0, -10vh)'
            }}>
            </Box>
        )}
    </Carousel>
);