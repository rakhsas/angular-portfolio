import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
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
    // this.project = this.projectService.getProject();
    // if (!this.project || this.project == undefined)
    //   this.router.navigate(['/works']);

  }
  project: Project = {
    // id uid:
    id: 'ab5fd602-7385-11ef-b864-0242ac120002',
    type: 'Web',
    name: 'Mobile Application Design',
    img: {
      img1: 'assets/ft_transcendence/darkMode.jpg',
      img2: 'assets/ft_transcendence/lightMode.jpg'
    },
    description: {
      definition: 'A Web Application project designed to build a competitive online multiplayer game where players can play a game of pong against each other.',
      details: '\
        The project designed to build a competitive online multiplayer game where players can play a game of pong against each other.\
        The game is to be integrated into a fully featured web application which includes \
        a rooms system, with the ability to create and join rooms, and different game modes.\
        a public chat, private messaging, with the option of video call, real-time notifications, and an administration interface.'
    },
    technologies: ['React TS', 'Next JS', 'Socket IO', 'Docker'],
    year: 2021
  };
  ngOnInit(): void {
  }

}
