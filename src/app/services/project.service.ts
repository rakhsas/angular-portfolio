import { Injectable } from "@angular/core";
import { Project } from "../shared/models/project.model";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private project!: Project;
    
    setProject(project: Project) {
        this.project = project;
    }
    getProject() {
        return this.project;
    }
}