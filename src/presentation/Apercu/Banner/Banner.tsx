import { Avatar, Box } from '@mui/material';
import React from 'react';
import { Langs } from './Langs';

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
            padding: '1vh',
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
            <Langs />
        </Box>
    );
}