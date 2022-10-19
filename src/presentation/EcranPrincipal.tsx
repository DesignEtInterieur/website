import { Stack } from '@mui/material';
import React from 'react';
import { Apercu } from './Apercu';
import { Banner } from './Apercu/Banner';
import { Category } from './Category';

export const EcranPrincipal: React.FC = () => {
    return (
        <Stack spacing={0}>
            <Apercu />
            <div className='invisible'>
                <Banner />
            </div>
            <Category category="archi" target="meuble" />
            <Category category="meuble" target="cinema" />
            <Category category="cinema" />
        </Stack>
    )
};