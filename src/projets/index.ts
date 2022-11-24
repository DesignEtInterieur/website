export { Projects } from "./Projets";

export type ProjectsList = {
    title: Title;
    tags: Array<{ tag: String, title: Title }>;
    projects: Array<Project>;
}

export type Project = {
    title: Title;
    path: String;
    tags: Array<String>;
    assets: Array<{ tags: Array<String>, path: String }>;
}

export type Title = {
    en: String;
    fr: String;
}

export const getText = function<T extends Title>(title: T, lang: String | undefined): String {
    return (lang?.toLowerCase() === "fr") ? title.fr : title.en;
}

export const getProjects = async () => {
    const projectsListResponse = await fetch("/projets/list.json");
    return await projectsListResponse.json() as ProjectsList
}