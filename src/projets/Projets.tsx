import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProjects, getText, ProjectsList } from ".";
import { TextContent } from "../components/Langs";

export const Projects: React.FC = () => {
    let { lang } = useParams<"lang">();
    const [projects, setProjects] = useState<ProjectsList | undefined>();

    useEffect(() => {
        getProjects().then(result => setProjects(result));
    })

    return (
        <Typography
            color="white"
            sx={{
                textShadow: '1px 1px 2px black',
                marginLeft: '8vw',
                marginRight: '8vw',
                marginBottom: '20vh'
            }}>
            <p>
                {projects ? getText(projects.title, lang) : ""} / {projects?.projects.length ?? 0} projets
            </p>
            <p>
                Premier Projet (tags { projects?.projects[0].tags.join(" ") ?? "Aucun" }) : &nbsp;
                {projects?.projects[0] ? getText(projects.projects[0].title, lang) : ""}
            </p>
            <TextContent textUrl={`projets/${ projects?.projects[0].path}`} />
        </Typography>);
}