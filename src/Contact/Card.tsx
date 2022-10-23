import React from "react";
import { Box, Card as MuiCard } from "@mui/material";
import { theme } from "../theme";
import { Span } from "./Span";

export const Card: React.FC<{ title: string, label: string, icon: JSX.Element }> = ({ title, label, icon }) => (
    <MuiCard sx={{
        backgroundColor: theme.palette.primary.main,
        height: '10vh',
        width: '25vw',
        opacity: .9,
        margin: '2vmin',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }}>
        <Span variant="h5">{title}</Span>
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center'
        }}>
            <Span>{label}</Span>
            <Span>{icon}</Span>
        </Box>
    </MuiCard>
)