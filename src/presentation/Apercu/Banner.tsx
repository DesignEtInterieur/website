import { Box, Button, useMediaQuery } from '@mui/material';
import React from 'react';
import { Langs } from '../';
import * as Scroll from 'react-scroll';

export const Banner: React.FC = () => {
    const mobile = useMediaQuery('only screen and (orientation: portrait) and (max-width : 320px)')
    return (
        <Box sx={{
            backgroundImage: 'url(logo.png)',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#aaaeaf',
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            height: '15vh',
            boxShadow: 3,
            opacity: .9,
            transform: 'translate(0, -100vh)'
        }}>
        <Langs />
            {!mobile &&
                <Button sx={{
                    backgroundImage: 'url(olivier.png)',
                    backgroundPosition: 'left',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    height: '15vh',
                    width: '15vh',
                    marginLeft: '1vmin'
                }}
                    onClick={() => {
                        Scroll.scroller.scrollTo('contact', {
                            duration: 1500,
                            delay: 100,
                            smooth: true
                        });
                    }} />
            }
        </Box>
    );
}