import { Avatar, Box } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

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
                <Box sx={{
                    backgroundImage: 'url(logo.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#aaaeaf',
                    flexDirection: 'row',
                    height: '15vh',
                    boxShadow: 3,
                    opacity: .9
                }}>
                    <Avatar
                        alt="Olivier ARNAUD-BOUR"
                        src="/olivier.jpg"
                        sx={{ 
                            width: '15vh', 
                            height: '15vh',
                            boxShadow: 3,
                            opacity: .9
                         }}
                    />
                </Box>
            </Box>
        )}
    </Carousel>
);