import { Avatar, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const availableLangs = [
    'fr',
    'en'
];

export const TextContent: React.FC<{ textUrl: string }> = ({ textUrl }) => {
    let { lang } = useParams<"lang">();
    const [textContent, setTextContent] = useState('');

    useEffect(() => {
        fetch(`/texts/${textUrl}/${lang}.md`).then(res => res.text()).then(text => setTextContent(text))
    });

    return <ReactMarkdown children={textContent} />;
};

export const Langs: React.FC = () => {
    let { lang } = useParams<"lang">();

    if (!availableLangs.includes(lang ?? "no-lang"))
        window.location.assign('/');

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '15vh',
            opacity: .9,
            padding: '1vh'
        }}>
            {
                availableLangs.filter(t => t !== lang).map(item => (
                    <Link to={`/${item}`}>
                        <Avatar
                            alt={item}
                            src={`/lang/${item}.svg`}
                            sx={{
                                width: '5vh',
                                height: '5vh',
                                boxShadow: 3,
                                opacity: .9
                            }}
                        />
                    </Link>
                ))
            }
        </Box>
    );
}