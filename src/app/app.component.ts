import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { fadeAnimation } from 'src/utils/route-animations';

interface NavItem {
	heading: string;
	link: string;
	icon?: string;
	emoji?: string;
	pages: SubNavItem[];
}

interface SubNavItem {
	title: string;
	link: string;
	icon?: string;
	emoji?: string;
}

@Component({
	selector: 'app-portfolio-s7',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [fadeAnimation],
})
export class AppComponent {
	title = 'Portfolio S7 – Max Altena';
	opened = true;
	navList: NavItem[] = [
		{ heading: 'Home', link: '/', icon: 'home', pages: [] },
		{ heading: 'About', link: '/about', icon: 'person', pages: [] },
		{
			heading: 'Human Centered Design',

			link: '/human-centered-design',
			pages: [{ title: 'Design Probes', icon: 'home', link: '/design-probes' }],
		},
		{
			heading: 'Critical Design',
			link: '/critical-design',
			pages: [{ title: 'Personal Manifesto', icon: 'home', link: '/personal-manifesto' }],
		},
		{
			heading: 'Story Creation',

			link: '/story-creation',
			pages: [{ title: 'Story Telling', icon: 'home', link: '/story-telling' }],
		},
		{
			heading: 'Media Theory',

			link: '/media-theory',
			pages: [{ title: 'Replika', icon: 'home', link: '/replika' }],
		},
		{
			heading: 'Other',
			emoji: '😇',
			link: '/other',
			pages: [{ title: 'VEGA Collab', emoji: '😪', link: '/vega-collab' }],
		},
	];

	prepareRoute(outlet: RouterOutlet): ActivatedRoute | '' {
		return outlet.isActivated ? outlet.activatedRoute : '';
	}
}
