import { Typography } from "@mui/material";
import React from "react";

export const Span: React.FC<{
    children?: JSX.Element | JSX.Element[] | string | string[], 
    variant?: "h6" | "h1" | "h2" | "h3" | "h4" | "h5" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "inherit" | undefined 
}> = ({ 
    children,
    variant = "h6" 
}) => (
    <Typography
        color="white"
        variant={variant}
        sx={{
            textShadow: '1px 1px 2px black',
            margin: '1vmin'
        }}>
        {children}
    </Typography>
)