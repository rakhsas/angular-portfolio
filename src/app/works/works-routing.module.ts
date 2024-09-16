import { Inject, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HolderComponent } from "./holder/holder.component";
import { ProjectComponent } from "./project/project.component";

const routes: Routes = [
    {
        path: '',
        component: HolderComponent
    },
    {
        path: ':id',
        pathMatch: 'full',
        component: ProjectComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorksRoutingModule {
}