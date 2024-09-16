export interface Project {
    id: string;
    name: string;
    type: string;
    img: {
        img1: string;
        img2?: string;
    },
    description: {
        definition: string;
        details: string;
    }
    technologies: string[];
    year: number;
}