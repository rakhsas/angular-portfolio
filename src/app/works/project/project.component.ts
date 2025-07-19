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
	showVideoModal = false;
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

	hasAdditionalImages(): boolean {
		if (!this.project?.img) return false;
		return Object.keys(this.project.img).length > 1; // More than just img1
	}

	getAdditionalImages(): { key: string, value: { class: string, src: string } }[] {
		if (!this.project?.img) return [];
		return Object.entries(this.project.img)
			.filter(([key]) => key !== 'img1') // Exclude the main image
			.map(([key, value]) => ({ key, value: { src: value.value, class: value.class || 'w-full h-full object-cover rounded-[20px]' } }));
	}
	showLightbox = false;
	lightboxImage = '';
	openLightbox(imageUrl: string): void {
		this.lightboxImage = imageUrl;
		this.showLightbox = true;
		document.body.style.overflow = 'hidden';
	}

	closeLightbox(): void {
		this.showLightbox = false;
		document.body.style.overflow = '';
	}
}
