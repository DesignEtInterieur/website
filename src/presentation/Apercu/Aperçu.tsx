import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { FirstDescriptionCard } from './FirstDescriptionCard';

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
                height: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <FirstDescriptionCard target="archi" />
            </Box>
        )}
    </Carousel>
);