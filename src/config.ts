import { Item } from 'src/types/item';
import { PageHome, PageAbout, PageNotFound } from 'src/app/pages';

export const items: Item[] = [
	{
		path: '',
		component: PageHome,
		title: 'Home',
		icon: 'home',
		redirects: ['home', 'thuis'],
		includeInRoutes: true,
		includeInNavigation: true,
	},
	{
		path: 'about',
		component: PageAbout,
		title: 'About',
		icon: 'person',
		redirects: ['over'],
		includeInRoutes: true,
		includeInNavigation: true,
	},
	{
		path: '404',
		component: PageNotFound,
		title: 'Not found',
		icon: 'person',
		redirects: ['not-found', 'niet-gevonden'],
		includeInRoutes: true,
		includeInNavigation: false,
	},
	// {
	// 	heading: 'Human Centered Design',

	// 	link: '/human-centered-design',
	// 	pages: [{ title: 'Design Probes', icon: 'home', link: '/design-probes' }],
	// },
	// {
	// 	heading: 'Critical Design',
	// 	link: '/critical-design',
	// 	pages: [{ title: 'Personal Manifesto', icon: 'home', link: '/personal-manifesto' }],
	// },
	// {
	// 	heading: 'Story Creation',

	// 	link: '/story-creation',
	// 	pages: [{ title: 'Story Telling', icon: 'home', link: '/story-telling' }],
	// },
	// {
	// 	heading: 'Media Theory',

	// 	link: '/media-theory',
	// 	pages: [{ title: 'Replika', icon: 'home', link: '/replika' }],
	// },
	// {
	// 	heading: 'Other',
	// 	emoji: '😇',
	// 	link: '/other',
	// 	pages: [{ title: 'VEGA Collab', emoji: '😪', link: '/vega-collab' }],
	// },
];
