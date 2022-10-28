import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { FirstDescriptionCard } from './';

const imagesAccueilPath = 'content/accueil/images';

const slideImages = [
    `${imagesAccueilPath}/meuble.jpg`,
    `${imagesAccueilPath}/3d.jpg`,
    `${imagesAccueilPath}/archi.jpg`,
    `${imagesAccueilPath}/cinema.jpg`,
    `${imagesAccueilPath}/domotique.jpg`,
    `${imagesAccueilPath}/plan.jpg`,
    `${imagesAccueilPath}/restaurant.jpg`
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
                height: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <FirstDescriptionCard target="archi" />
            </Box>
        )}
    </Carousel>
);