import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TextContent } from "../../components/Langs";
import { FramesNavigator } from "../FramesNavigator";
import { MEDIA_QUERY } from "../..";
import { Fade } from "react-awesome-reveal";

export const Category: React.FC<{ category: string, target?: string, fontColor?: string }> = (
    { category, target, fontColor = 'white' }) => {
    const preview = [
        `url(content/${category}/images/preview-1.jpg)`,
        `url(content/${category}/images/preview-2.jpg)`,
        `url(content/${category}/images/preview-3.jpg)`,
        `url(content/${category}/images/preview-4.jpg)`
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
                        <Fade triggerOnce duration={2000} direction={`down`}>
                            <TextContent textUrl={`content/${category}`} />
                        </Fade>
                    </Typography>
                </Card>

                <Box sx={{
                    height: '30vh',
                    transform: 'translate(0,-10vh)',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}>

                    {mobile ?
                        <SliderMobile images={preview} />
                        : preview.map((link, i) =>
                            <Fade triggerOnce direction={`left`} delay={500 + i * 200}>
                                <Card sx={{
                                    backgroundImage: link,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundColor: 'white',
                                    height: '30vh',
                                    width: '15vw',
                                    boxShadow: 5,
                                    marginX: '20px'
                                }}
                                    key={`${category}_${i}`} />
                            </Fade>
                        )}
                </Box>
                <FramesNavigator target={target} />
            </Box>
        </>
    )
}

const SliderMobile = ({ images }: { images: Array<string> }) => {
    const [currentLink, setCurrentLink] = useState(images[0]);

    useEffect(() => {
        setTimeout(
            () => {
                const newLinkId = images.findIndex(p => p === currentLink) + 1;
                if (newLinkId < images.length)
                    setCurrentLink(images[newLinkId]);
                else
                    setCurrentLink(images[0]);
            },
            2500
        )
    }, [currentLink, images]);


    return <Cube link={currentLink} />;
}

const Cube = ({ link }: { link: string }) => (
    <Fade>
        <Card sx={{
            backgroundImage: link,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'white',
            height: '30vmax',
            width: '30vmax',
            alignSelf: 'center',
            boxShadow: 5
        }} />
    </Fade>
)