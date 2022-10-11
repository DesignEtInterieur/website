import React from 'react';
import { useParams } from 'react-router-dom';

export const EcranPrincipal = () => {
    let { lang } = useParams<"lang">();

    return <span>Langue choisie : {lang}</span>;
};