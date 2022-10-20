import { Card, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import { TextContent } from "../";
import { FramesNavigator } from "../";


export const FirstDescriptionCard: React.FC<{ target?: string }> = ({ target }) => (
    <Card sx={{
        alignSelf: 'center',
        verticalAlign: 'bottom',
        width: '80vw',
        minHeight: '30vh',
        marginLeft: '10vw',
        marginRight: '10vw',
        backgroundColor: theme.palette.primary.main,
        opacity: .9,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: '2vh'
    }}>
        <Typography
            color={'white'}
            variant='h6'
            sx={{
                paddingLeft: '2%',
                paddingRight: '2%'
            }}>
            <TextContent textUrl='content/accueil' />
        </Typography>
        <FramesNavigator target={target} />
    </Card>
)