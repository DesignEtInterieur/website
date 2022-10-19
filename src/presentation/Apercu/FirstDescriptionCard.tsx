import { ExpandMore } from "@mui/icons-material";
import { Card, IconButton, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import { TextContent } from "../Langs";
import * as Scroll from 'react-scroll';


export const FirstDescriptionCard: React.FC<{target: string}> = ({target}) => (
    <Card sx={{
        alignSelf: 'center',
        width: '80vw',
        height: '30vh',
        marginBottom: '2vh',
        backgroundColor: theme.palette.primary.main,
        opacity: .9,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transform: 'translate(0, -67vh)',
        zIndex: '1000'
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
        <IconButton
            onClick={() => {
                Scroll.scroller.scrollTo(target, {
                    duration: 1500,
                    delay: 100,
                    smooth: true
                });
            }}
            sx={{
                alignSelf: 'center',
                margin: '2%',
            }}>
            <ExpandMore sx={{ color: 'white' }} />
        </IconButton>
    </Card>
)