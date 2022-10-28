import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { TextContent } from "../Langs";
import { FramesNavigator } from "../FramesNavigator";
import { MEDIA_QUERY } from "../..";

export const Category: React.FC<{ category: string, target?: string, fontColor?: string }> = (
    { category, target, fontColor = 'white' }) => {
    const preview = [
        `url(content/${category}/images/preview-1.jpg)`,
        `url(content/${category}/images/preview-2.jpg)`,
        `url(content/${category}/images/preview-3.jpg)`,
        `url(content/${category}/images/preview-4.jpg)`
    ];
    const previewMobile = [
        `url(content/${category}/images/preview-1.jpg)`,
        `url(content/${category}/images/preview-2.jpg)`
    ];
    const mobile = useMediaQuery(MEDIA_QUERY)
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
                    backgroundColor: 'rgba(125, 103, 65, 0.6)',
                    minHeight: '60vh',
                    width: '100vw',
                }}>
                    <Typography
                        color={fontColor}
                        sx={{
                            textShadow: '1px 1px 2px black',
                            marginLeft: '8vw',
                            marginRight: '8vw',
                            marginBottom: '20vh'
                        }}>

                        <TextContent textUrl={`content/${category}`} />
                    </Typography>
                </Card>
                    <Box sx={{
                        height: '30vh',
                        width: '70vw',
                        transform: 'translateY(-10vh)',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignSelf: 'center'
                    }}>
                        {mobile ?
                            previewMobile.map(link =>
                                <Card sx={{
                                    backgroundImage: link,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundColor: 'white',
                                    height: '30vh',
                                    width: '30vw',
                                    boxShadow: 5
                                }} />
                            )

                            : preview.map(link =>
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
                <FramesNavigator target={target} />
            </Box>
        </>
    )
}