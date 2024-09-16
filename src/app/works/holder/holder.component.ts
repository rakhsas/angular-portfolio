import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';
import { Project } from 'src/app/shared/models/project.model';
import { ButtonModel } from 'src/app/shared/models/button.model';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';
import { projectTypes } from 'src/app/shared/enums/project.enum';

interface projectTabCategory {
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.css'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        animate('2s ease-in-out', keyframes([
          style({ opacity: 0, transform: 'translateY(40px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class HolderComponent implements OnInit {

  constructor(
    public projectService: ProjectService,
    private route: Router
  ) { }
  projectTabCategories: projectTabCategory[] = [
    {name: 'Show All', isActive: true},
    {name: 'Web', isActive: false},
    {name: 'Devops', isActive: false},
    {name: 'Design', isActive: false},
  ]
  setCurrent(tab: projectTabCategory): void {
    this.projectTabCategories.map(selectedTab => selectedTab.isActive = (tab.name === selectedTab.name));
    this.projectTabCategories.filter(selectedTab => selectedTab.isActive);
  }
  ngOnInit(): void {
  }
  filteredWorks(): any[] {
    return this.works
    .sort((a, b) => b.year - a.year)
    .filter(work => {
      const selectedTab = this.projectTabCategories.find(tab => tab.isActive);
      return selectedTab!.name === 'Show All' || work.type.includes(selectedTab!.name.toString() as projectTypes);
    });
  }
  setProject(project: Project): void {
    this.projectService.setProject(project);
    this.route.navigate([`/works/${project.id}`]);
  }
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
  works: Project[] = [
    {
      // id uid:
      id: 'ab5fd602-7385-11ef-b864-0242ac120002',
      type: [projectTypes.Web],
      name: 'FT Transcendence',
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
      year: 2024
    },
    {
      // id uid:
      id: 'ab5fd602-7385-11ef-b864-0242ac120003',
      type: [projectTypes.Devops, projectTypes.Rigor, projectTypes.Network, projectTypes.System],
      name: 'Inception',
      img: {
        img1: 'assets/inception/inception.webp',
        img2: 'assets/inception/inception-structure.png'
      },
      description: {
        definition: 'This project aims to broaden My knowledge of system administration by using Docker.',   
        details: 'I developed a small infrastructure consisting of multiple services, \
        each running in dedicated containers using Docker Compose. The entire setup was built from scratch in a virtual machine, \
        ensuring performance by using custom-built containers based on Alpine or Debian. \
        I created individual Dockerfiles for each service, \
        which were orchestrated through a docker-compose.yml file and managed by a Makefile. \
        I adhered to strict rules, such as not using pre-built Docker images or DockerHub, \
        which allowed me to fully control the containerization process.'
      },
      technologies: ['Docker', 'Nginx', 'Grafana'],
      year: 2023
    },
    {
      // id uid:
      id: 'ab5fd602-7385-11ef-b864-0242ac120004',
      type: [projectTypes.Web],
      name: 'JobPilot',
      img: {
        img1: 'assets/jobpilot/Home.jpg',
        img2: 'assets/jobpilot/Job-List.jpg'
      },
      description: {
        definition: 'Web Application',
        details: 'JobPilot is a professional networking platform designed to seamlessly connect employers with potential employees, \
        streamlining the recruitment process much like LinkedIn. \
        The platform offers intuitive features that allow businesses to post job openings, \
        and candidates to create detailed profiles showcasing their skills and experience. \
        Employers can browse through profiles, engage with prospective hires, and post updates or job-related content. \
        Similarly, employees can search for job opportunities, follow companies, and engage in discussions via posts, \
        enabling a dynamic exchange of industry knowledge while fostering a professional community.'
      },
      technologies: ['Java', 'Spring Boot', 'Angular', 'Docker'],
      year: 2024
    },
    {
      // id uid:
      id: 'ab5fd602-7385-11ef-b864-0242ac120005',
      type: [projectTypes.Rigor, projectTypes.System, projectTypes.OOP, projectTypes.Network],
      name: 'Webserv',
      img: {
        // webserver pic
        img1: 'https://www.web24.com.au/wp-content/uploads/2016/10/iStock_71952335_LARGE-1024x683.jpg',
        img2: 'https://science.ku.dk/english/press/news/2021/danish-invention-to-make-computer-servers-worldwide-more-climate-friendly/billedinformationer/Computerservere_1100x600.jpg'
      },
      description: {
        definition: 'A Simple web server that can handle multiple connections at the same time.',
        details: 'Taking Nginx as a reference, this project is an introduction to the implementation of a web server. The server is able to handle GET, POST, PUT, DELETE requests. The server is also able to handle multiple clients at the same time.\
          with the help of the epoll system call, and can serve static files, and dynamic content.'
      },
      technologies: ['C++'],
      year: 2021
    },
    {
      // id uid:
      id: 'ab5fd602-7385-11ef-b864-0242ac120006',
      type: [projectTypes.Devops],
      name: 'Mobile Application Design',
      img: {
        img1: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work5.jpg'
      },
      description: {
        definition: 'Mobile Application Design',
        details: 'Mobile Application Design'
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      year: 2021
    },
    {
      // id uid:
      id: 'ab5fd602-7385-11ef-b864-0242ac120007',
      type: [projectTypes.Design],
      name: 'Mobile Application Design',
      img: {
        img1: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work6.jpg'
      },
      description: {
        definition: 'Mobile Application Design',
        details: 'Mobile Application Design'
      },
      technologies: ['HTML', 'CSS', 'JavaScript'],
      year: 2021
    }
    
  ]

}
