import { Box } from '@mui/material';
import React from 'react';
import { Langs } from '../../Langs';

export const Banner = () => {

    return (
        <Box sx={{
            backgroundImage: 'url(logo.png)',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#aaaeaf',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '15vh',
            boxShadow: 3,
            opacity: .9
        }}>
            <Box sx={{
                backgroundImage: 'url(olivier.png)',
                backgroundPosition: 'left',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: '15vh',
                width: '15vh'
            }} />
            <Langs />
        </Box>
    );
}