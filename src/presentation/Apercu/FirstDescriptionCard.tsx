import { ExpandMore } from "@mui/icons-material";
import { Card, IconButton, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import { TextContent } from "../Langs";


export const FirstDescriptionCard = () => (
    <Card sx={{
        alignSelf: 'center',
        width: '80vw',
        minHeight: '30vh',
        marginBottom: '2vh',
        backgroundColor: theme.palette.primary.main,
        opacity: .9,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }}>
        <Typography
            color={'white'}
            variant='h6'
            sx={{
                paddingLeft: '2%',
                paddingRight: '2%'
            }}>
            <TextContent textUrl='intro' />
        </Typography>
        <IconButton
            sx={{
                alignSelf: 'center',
                margin: '2%',
            }}>
            <ExpandMore sx={{color: 'white'}} />
        </IconButton>
    </Card>
)