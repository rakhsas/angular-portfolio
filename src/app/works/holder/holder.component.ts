import { Component, OnInit } from '@angular/core';

interface projectTabCategory {
  name: string;
  isActive: boolean;
}

@Component({
  selector: 'app-holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit {

  constructor() { }
  projectTabCategories: projectTabCategory[] = [
    {name: 'Show All', isActive: true},
    {name: 'Web', isActive: false},
    {name: 'Mobile', isActive: false},
    {name: 'Design', isActive: false},
    {name: 'Branding', isActive: false},
  ]
  setCurrent(tab: projectTabCategory): void {
    this.projectTabCategories.map(selectedTab => selectedTab.isActive = (tab.name === selectedTab.name));
  }
  ngOnInit(): void {
  }
  works: any[] = [
    {
      type: 'Branding',
      title: 'Mobile Application Design',
      img: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work1.jpg'
    },
    {
      type: 'Branding',
      title: 'Mobile Application Design',
      img: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work2.jpg'
    },
    {
      type: 'Branding',
      title: 'Mobile Application Design',
      img: 'https://wordpressboss.com/cp/bentos-demo/assets/images/projects/work3.jpg'
    },

  ]

}
