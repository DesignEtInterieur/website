import { Box } from "@mui/system";
import React from "react";
import plan from './plan.jpg';
import logo from './logo.png';
import photo from './photo-olivier.png';
import { Card as MuiCard, Divider, useMediaQuery } from "@mui/material";
import { Email, Facebook, Home, LinkedIn, Phone, Pinterest, Twitter } from "@mui/icons-material";
import { Span } from "./Span";
import { MEDIA_QUERY, theme } from "..";
import { Fade, Slide } from "react-awesome-reveal";

export const Contact: React.FC<{ target?: string }> = ({ target }) => {
    const mobile = useMediaQuery(MEDIA_QUERY)
    return (
        <><div id="contact" />
            <Box sx={{
                backgroundImage: `url(${plan})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundColor: 'white',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: mobile ? 'flex-start' : 'center',
                alignContent: 'flex-end',
                alignItems: 'end'

            }}>
                <Slide direction={`right`} delay={1000} triggerOnce>
                    <MuiCard sx={{
                        backgroundColor: theme.palette.primary.main,
                        width: mobile ? '80vw' : '25vw',
                        opacity: .9,
                        margin: '2vmin',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <Span variant="h5">Discutons de votre projet</Span>
                        <Divider light />
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Span>6, avenue Delcassé, 75008 Paris</Span>
                            <Span><Home /></Span>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Span>32b rue du Plouich, 59113 Seclin</Span>
                            <Span><Home /></Span>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Span>+33 (0)6 14 09 94 27</Span>
                            <Span><Phone /></Span>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Span>info@designetinterieur.fr</Span>
                            <Span><Email /></Span>
                        </Box>
                    </MuiCard>
                </Slide>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    height: '10vh',
                    width: mobile ? '80vw' : '25vw',
                }}>
                    <Fade cascade delay={2000} triggerOnce>
                        <a href="https://www.linkedin.com/in/olivier-arnaud-bour-55746011/" target="_blank" rel="noreferrer">
                            <LinkedIn sx={{ width: '9vh', height: '9vh', color: '#0A66C2' }} />
                        </a>
                        <a href="https://www.facebook.com/olivier.arnaudbour/" target="_blank" rel="noreferrer">
                            <Facebook sx={{ width: '9vh', height: '9vh', color: '#3b5998' }} />
                        </a>
                        <a href="https://www.pinterest.fr/frenchthx/" target="_blank" rel="noreferrer">
                            <Pinterest sx={{ width: '9vh', height: '9vh', color: '#c8232c' }} />
                        </a>
                        <a href="https://twitter.com/frenchthx" target="_blank" rel="noreferrer">
                            <Twitter sx={{ width: '9vh', height: '9vh', color: '#00acee' }} />
                        </a>
                    </Fade>
                </Box>
            </Box>
            <div className='invisible'>
                <Box sx={{
                    backgroundImage: `url(${logo})`,
                    backgroundPosition: 'right',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#aaaeaf',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '20vh',
                    opacity: .9,
                    transform: 'translate(0, -20vh)'
                }} />
            </div>
            <div className='invisible'>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: `${mobile ? 85 : 100}vh`,
                    transform: `translate(0, -${mobile ? 85 : 100}vh)`,
                    width: '50vw'
                }}> 
                    <Slide direction={`left`} triggerOnce>
                        <Box sx={{
                            backgroundImage: `url(${photo})`,
                            backgroundPosition: 'left',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            marginLeft: '5vw',
                            width: '50vw',
                            height: mobile ? '85vh' : '100vh'
                        }} />
                    </Slide>
                </Box>
            </div>
        </>
    );
}