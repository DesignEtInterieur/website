import React from "react";
import * as Scroll from 'react-scroll';
import { ExpandMore } from "@mui/icons-material";
import { theme } from "../theme";
import { IconButton, SxProps, Theme } from "@mui/material";


export const FramesNavigator: React.FC<{ target?: string, align?: string }> = ({ target = null, align = 'center' }) => {
    const sx: SxProps<Theme> = {
        alignSelf: align,
        marginBottom: '10px',
        backgroundColor: theme.palette.primary.main
    };
    if (target)
        return <IconButton
            size="large"
            onClick={() => {
                Scroll.scroller.scrollTo(target, {
                    duration: 1500,
                    delay: 100,
                    smooth: true
                });
            }}
            sx={sx}>
            <ExpandMore sx={{ color: 'white' }} />
        </IconButton>
    else return <IconButton
        size="large"
        onClick={() => {
            Scroll.animateScroll.scrollToTop();
        }}
        sx={sx}>
        <ExpandMore sx={{ color: 'white', transform: 'rotate(180deg)' }} />
    </IconButton>
}