import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { ButtonModel } from 'src/app/shared/models/button.model';
import { Project } from 'src/app/shared/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(
    public projectService: ProjectService,
    private router: Router
  ) {
    this.project = this.projectService.getProject();
    if (!this.project || this.project == undefined)
      this.router.navigate(['/works']);

  }
  project!: Project;
  downloadBtnConf: ButtonModel = {
    text: {
      content: 'Let\'s Talk',
      size: 'text-sm',
      weight: 'font-semibold'
    },
    background: 'bg-primary',
    color: 'text-white',
    rounded: 'rounded-xl',
    icon: 'ArrowDownToLine',
    hoverBackground: 'hover:bg-custom-black'
  }
  ngOnInit(): void {
  }

}
