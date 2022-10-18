import { Stack } from '@mui/material';
import React from 'react';
import { Apercu } from './Apercu';
import { Interieur } from './Interieur';

export const EcranPrincipal: React.FC = () => {

    return (
        <Stack spacing={0}>
            <Apercu />
            <div id="secondpage" />
            <Interieur />
        </Stack>
    )
};