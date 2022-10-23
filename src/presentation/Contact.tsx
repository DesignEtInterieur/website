import { ExpandMore, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import * as Scroll from 'react-scroll';
import { theme } from "../theme";

export const Contact: React.FC<{ target?: string }> = ({ target }) => (
    <><div id="contact" />
        <Box sx={{
            backgroundImage: `url(content/contact/images/bg.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'white',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'flex-end',
            alignItems: 'end'
        }}>
            <LinkedIn sx={{
                color: 'blue',
                alignSelf: 'end',
                width: '7.5vmin',
                height: '7.5vmin'
            }} />
            <IconButton
                size="large"
                onClick={() => {
                    Scroll.animateScroll.scrollToTop();
                }}
                sx={{
                    alignSelf: 'end',
                    marginRight: '5px',
                    backgroundColor: theme.palette.primary.main
                }}>
                <ExpandMore sx={{ color: 'white', transform: 'rotate(180deg)' }} />
            </IconButton>
        </Box>
    </>
)