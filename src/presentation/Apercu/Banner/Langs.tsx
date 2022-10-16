import { Avatar, Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';

export const Langs = () => {
    let { lang } = useParams<"lang">();
    const availableLangs = [
        'fr',
        'en'
    ];

    if (!availableLangs.includes(lang ?? "no-lang"))
        window.location.assign('/');

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '15vh',
            opacity: .9
        }}>
            {
                availableLangs.filter(t => t !== lang).map(item => (
                    <a href={`/${item}`}><Avatar
                        alt={item}
                        src={`/lang/${item}.svg`}
                        sx={{
                            width: '5vh',
                            height: '5vh',
                            boxShadow: 3,
                            opacity: .9
                        }}
                    /></a>
                ))
            }
        </Box>
    );
}