import { Stack } from '@mui/material';
import React from 'react';
import { Apercu } from './Apercu';
import { Banner } from './Apercu/Banner';
import { FirstDescriptionCard } from './Apercu/FirstDescriptionCard';
import { Category } from './Category';

export const EcranPrincipal: React.FC = () => {

    return (
        <Stack spacing={0}>
            <Apercu />
            <Banner />
            <FirstDescriptionCard target="archi" />
            <Category category="archi"  />
            <Category category="meuble"  />
        </Stack>
    )
};