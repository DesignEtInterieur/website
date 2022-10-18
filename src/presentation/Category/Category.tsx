import { Box, Typography } from "@mui/material";
import React from "react";
import { useParallax } from "react-scroll-parallax";
import { TextContent } from "../Langs";

export const Category: React.FC<{ category: string, fontColor?: string }> = ({ category, fontColor = 'white' }) => {
    const parallax = useParallax({
        speed: -10,
    });
    return (
        <Box
            ref={parallax.ref}
            sx={{
                backgroundImage: `url(content/${category}/images/${category}.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh'
            }}>
            <Typography

                ref={parallax.ref}
                color={fontColor}
                variant='h6'
                sx={{
                    paddingLeft: '10%',
                    paddingRight: '10%',
                }}>
                <TextContent textUrl={`content/${category}`} />
            </Typography>
        </Box>
    )
}