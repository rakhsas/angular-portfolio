import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';
import { Project } from 'src/app/shared/models/project.model';
import { ButtonModel } from 'src/app/shared/models/button.model';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';

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
    return this.works.filter(work => {
      const selectedTab = this.projectTabCategories.find(tab => tab.isActive);
      return selectedTab!.name === 'Show All' || work.type === selectedTab!.name;
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
      type: 'Web',
      name: 'Mobile Application Design',
      img: {
        img1: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work1.jpg'
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
      id: 'ab5fd602-7385-11ef-b864-0242ac120003',
      type: 'Devops',
      name: 'Mobile Application Design',
      img: {
        img1: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work2.jpg'
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
      id: 'ab5fd602-7385-11ef-b864-0242ac120004',
      type: 'Design',
      name: 'Mobile Application Design',
      img: {
        img1: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work3.jpg'
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
      id: 'ab5fd602-7385-11ef-b864-0242ac120005',
      type: 'Web',
      name: 'Mobile Application Design',
      img: {
        img1: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work4.jpg'
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
      id: 'ab5fd602-7385-11ef-b864-0242ac120006',
      type: 'Devops',
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
      type: 'Design',
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
