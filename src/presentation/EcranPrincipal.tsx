import { Stack } from '@mui/material';
import React from 'react';
import { Apercu, Banner } from './Apercu';
import { Category } from './Category';
import { Contact } from './Contact';

export const EcranPrincipal: React.FC = () => {
    return (
        <Stack spacing={0}>
            <Apercu />
            <div className='invisible'>
                <Banner />
            </div>
            <Category category="archi" target="meuble" />
            <Category category="meuble" target="cinema" />
            <Category category="cinema" target="pro" />
            <Category category="pro" target="contact" />
            <Contact />
        </Stack>
    )
};