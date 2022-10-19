import { Box, Typography } from "@mui/material";
import React from "react";
import { TextContent } from "../Langs";

export const Category: React.FC<{ category: string, fontColor?: string }> = ({ category, fontColor = 'white' }) => {
    return (
        <Box
            sx={{
                backgroundImage: `url(content/${category}/images/bg.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '120vh',
                marginBottom: '7vh',
                transform: 'skew(0deg, -8deg) translate(0, -50vh)'
            }}>
            <Typography
                color={fontColor}
                variant='h6'
                sx={{
                    paddingLeft: '10%',
                    paddingRight: '10%',
                    transform: 'skew(0deg, 8deg) translate(0, 10vh)'
                }}>
                <div id={category} />
                <TextContent textUrl={`content/${category}`} />
            </Typography>
        </Box>
    )
}