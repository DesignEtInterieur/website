import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme";
import { TextContent } from "../Langs";
import { FramesNavigator } from "../FramesNavigator";

export const Category: React.FC<{ category: string, target?: string, fontColor?: string }> = (
    { category, target, fontColor = 'white' }) => {
    const preview = [
        `url(content/${category}/images/preview-1.jpg)`,
        `url(content/${category}/images/preview-2.jpg)`,
        `url(content/${category}/images/preview-3.jpg)`,
        `url(content/${category}/images/preview-4.jpg)`
    ];

    console.log(theme.typography.h1);
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
                <Card sx={{
                    backgroundColor: theme.palette.primary.main,
                    height: '60vh',
                    width: '100vw',
                    opacity: .6,
                }} />
                <div className='invisible'>
                    <Typography
                        color={fontColor}
                        sx={{
                            textShadow: '1px 1px 2px black',
                            marginLeft: '8vw',
                            marginRight: '8vw',
                            transform: 'translateY(-74vh)'
                        }}>

                        <TextContent textUrl={`content/${category}`} />
                    </Typography>
                </div>
                <div className='invisible'>
                    <Box sx={{
                        height: '30vh',
                        width: '70vw',
                        marginTop: '2vh',
                        marginLeft: '15vw',
                        marginRight: '15vw',
                        transform: 'translateY(-32vh)',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        {preview.map(link =>
                            <Card sx={{
                                backgroundImage: link,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: 'white',
                                height: '30vh',
                                width: '15vw',
                                boxShadow: 5
                            }} />
                        )}

                    </Box>
                </div>
                <FramesNavigator target={target} />
            </Box>
        </>
    )
}