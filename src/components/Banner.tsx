import { Box, Button, useMediaQuery } from '@mui/material';
import React from 'react';
import { Langs } from '../presentation';
import { MEDIA_QUERY } from '..';

export const Banner: React.FC<{ onClick? : () => void}> = ({ onClick = () => {}}) => {
    const mobile = useMediaQuery(MEDIA_QUERY)
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
                    onClick={() => onClick()} />
            }
        </Box>
    );
}