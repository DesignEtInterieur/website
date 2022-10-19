import { Box, Typography } from "@mui/material";
import React from "react";
import { TextContent } from "../Langs";
import { FramesNavigator } from "../Navigator";

export const Category: React.FC<{ category: string, target?: string, fontColor?: string }> = (
    { category, target, fontColor = 'white' }) => {
    return (
        <><div id={category} />
            <Box
                sx={{
                    backgroundImage: `url(content/${category}/images/bg.jpg)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'baseline'
                }}>
                <Typography
                    color={fontColor}
                    variant='h6'
                    sx={{
                        paddingLeft: '10%',
                        paddingRight: '10%',
                        textShadow: '1px 1px 2px black'
                    }}>

                    <TextContent textUrl={`content/${category}`} />
                </Typography>
                <FramesNavigator target={target} />
            </Box>
        </>
    )
}