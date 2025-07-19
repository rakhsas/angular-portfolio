import { projectTypes } from "../enums/project.enum";

export interface Project {
    id: string;
    name: string;
    type: projectTypes[];
    img: {
        img1: { value: string, class?: string };
        img2?: { value: string, class?: string };
        img3?: { value: string, class?: string };
        img4?: { value: string, class?: string };
        img5?: { value: string, class?: string };
        img6?: { value: string, class?: string };
    },
    video?: string;
    description: {
        definition: string;
        details: string;
    }
    technologies: string[];
    year: number;
}