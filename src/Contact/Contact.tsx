import { Box } from "@mui/system";
import React from "react";
import plan from './plan.jpg';
import logo from './logo.jpg';
import photo from './photo-olivier.png';
import { Typography } from "@mui/material";
import { Card } from "./Card";
import { Email, Home, Phone } from "@mui/icons-material";

export const Contact: React.FC<{ target?: string }> = ({ target }) => (
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
            justifyContent: 'center',
            alignContent: 'flex-end',
            alignItems: 'end'

        }}>
            <Card
                title="Paris et interniational"
                label="6, avenue Delcassé, 75008 Paris"
                icon={<Home />}
            />
            <Card
                title="Région Nord / Belgique"
                label="32b rue du Plouich, 59113 Seclin"
                icon={<Home />}
            />
            <Card
                title="Téléphone"
                label="+33 6 14 09 94 27"
                icon={<Phone />}
            />
            <Card
                title="Email"
                label="info@designetinterieur.fr"
                icon={<Email />}
            />
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
                height: '100vh',
                transform: 'translate(0, -100vh)'
            }}>
                <Typography
                    color={'black'}
                    sx={{
                        paddingLeft: '2vw',
                        paddingTop: '5vh',
                        fontFamily: 'Wrath Styles',
                        fontSize: '4rem',
                        textShadow: 'grey 1px 1px'
                    }}>
                    Olivier ARNAUD-BOUR
                </Typography>
                <Box sx={{
                    backgroundImage: `url(${photo})`,
                    backgroundPosition: 'left',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    marginLeft: '5vw',
                    width: '50vw',
                    height: '85vh'
                }} />
            </Box>
        </div>
    </>
)