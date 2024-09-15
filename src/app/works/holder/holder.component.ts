import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes } from '@angular/animations';

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

  constructor() { }
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
  works: any[] = [
    {
      type: 'Web',
      title: 'Mobile Application Design',
      img: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work1.jpg'
    },
    {
      type: 'Devops',
      title: 'Mobile Application Design',
      img: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work2.jpg'
    },
    {
      type: 'Design',
      title: 'Mobile Application Design',
      img: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work3.jpg'
    },
    {
      type: 'Devops',
      title: 'Mobile Application Design',
      img: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work4.jpg'
    },
    {
      type: 'Devops',
      title: 'Mobile Application Design',
      img: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work5.jpg'
    },
    {
      type: 'Devops',
      title: 'Mobile Application Design',
      img: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work6.jpg'
    },
  ]

}
