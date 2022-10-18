import { Stack } from '@mui/material';
import React from 'react';
import { Apercu } from './Apercu';

export const EcranPrincipal: React.FC = () => {

    return (
        <Stack spacing={2}>
            <Apercu />
        </Stack>
    )
};