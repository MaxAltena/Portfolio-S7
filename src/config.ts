import { Config } from 'src/types';

const config: Config = {
	title: 'Portfolio S7 – Max Altena',
	defaultURL: 'https://maxaltena.com/',
	items: [
		{
			type: 'default',
			path: '',
			title: 'Home',
			emoji: '🏠',
			redirects: ['home', 'thuis'],
			includeInRoutes: true,
			includeInNavigation: true,
			pageInfo: {
				title: '🤖 Portfolio S7 – Max Altena ',
			},
		},
		{
			type: 'iframe',
			path: 'about',
			title: 'About',
			emoji: '🤖',
			redirects: ['me', 'ik', 'over'],
			includeInRoutes: true,
			includeInNavigation: true,
			pageInfo: {
				title: 'About Max Altena',
				iframeLocation: 'https://maxaltena.com/#about',
			},
		},
		{
			type: 'default',
			path: 'human-centered-design',
			title: 'Human Centered Design',
			redirects: ['hcd'],
			includeInRoutes: true,
			includeInNavigation: true,
			pageInfo: {
				chips: ['Human Centered Design', 'Subject'],
				quote:
					"Sounds a bit egocentric doesn't it? But it is for the better of the user and in the end the human itself... That's what they say.",
			},
			children: [
				{
					type: 'default',
					path: 'design-probes',
					title: 'Design probes',
					emoji: '⚗️',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: ['Human Centered Design', 'Duo', 'Assignment'],
						quote:
							"Creating probes to probe our own behaviour. Something I haven't done as of yet.",
					},
				},
				{
					type: 'default',
					path: 'print-house-interview',
					title: '2D print house interview',
					emoji: '🏭',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: [
							'Human Centered Design',
							'Additive Industries',
							'Research',
						],
						quote:
							'Getting insights from my dad who works at one of the largest 2D printing houses in the benelux. He should have some insights on their process, right?',
					},
				},
				{
					type: 'default',
					path: 'stakeholder-profiles',
					title: 'Stakeholder Profiles',
					emoji: '🧝‍♂️',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: [
							'Human Centered Design',
							'Additive Industries',
							'Research',
						],
						quote:
							"Who are the people that have a stake in our project? Let's find out!",
					},
				},
			],
		},
		{
			type: 'default',
			path: 'critical-design',
			title: 'Critical Design',
			redirects: ['cd'],
			includeInRoutes: true,
			includeInNavigation: true,
			pageInfo: {
				chips: ['Critical Design', 'Subject'],
				quote: '...',
			},
			children: [
				{
					type: 'default',
					path: 'critical-problems',
					title: 'Critical problems',
					emoji: '⚠️',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: ['Critical Design', 'Personal', 'Assignment'],
						quote: '...',
					},
				},
				{
					type: 'default',
					path: 'personal-manifesto',
					title: 'Personal Manifesto',
					emoji: '💁‍♂️',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: ['Critical Design', 'Personal', 'Assignment'],
						quote: '...',
					},
				},
				{
					type: 'default',
					path: 'concepts',
					title: 'Concepts',
					emoji: '💡',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: ['Critical Design', 'Personal', 'Assignment'],
						quote: '...',
					},
				},
				{
					type: 'default',
					path: 'concept-digital-detox',
					title: 'Concept: Digital Detox',
					emoji: '🌌',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: ['Critical Design', 'Personal', 'Concept'],
						quote: '...',
					},
				},
			],
		},
		{
			type: 'default',
			path: 'story-creation',
			title: 'Story Creation',
			redirects: ['sc'],
			includeInRoutes: true,
			includeInNavigation: true,
			pageInfo: {
				chips: ['Story Creation', 'Subject'],
				quote: '...',
			},
			children: [
				{
					type: 'default',
					path: 'pecha-kucha',
					title: 'Pecha Kucha',
					emoji: '⏰',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: ['Story Creation', 'Personal', 'Assignment'],
						quote: '...',
					},
				},
				{
					type: 'default',
					path: 'research-storytelling-emotion',
					title: 'Research Storytelling & Emotion',
					emoji: '📝',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: [
							'Story Creation',
							'Personal',
							'Research',
							'Assignment',
						],
						quote: '...',
					},
				},
				{
					type: 'default',
					path: 'protaganist',
					title: 'Protaganist',
					emoji: '🚶',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: ['Story Creation', 'Personal', 'Assignment'],
						quote: '...',
					},
				},
			],
		},
		{
			type: 'default',
			path: 'media-theory',
			title: 'Media Theory',
			redirects: ['mt'],
			includeInRoutes: true,
			includeInNavigation: true,
			pageInfo: {
				chips: ['Media Theory', 'Subject'],
				quote: '...',
			},
			children: [
				{
					type: 'default',
					path: 'a-day-without-my-phone',
					title: 'A day without my phone',
					emoji: '📴',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: ['Media Theory', 'Personal', 'Assignment'],
						quote: '...',
					},
				},
				{
					type: 'default',
					path: 'social-analysis',
					title: 'Social Analysis',
					emoji: '🗣',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: ['Media Theory', 'Personal', 'Assignment'],
						quote: '...',
					},
				},
				{
					type: 'default',
					path: 'my-ai-friend',
					title: 'My AI friend',
					emoji: '🦾',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: ['Media Theory', 'Personal', 'Assignment'],
						quote: '...',
					},
				},
			],
		},
		{
			type: 'default',
			path: 'other',
			title: 'Other',
			includeInRoutes: true,
			includeInNavigation: true,
			pageInfo: {
				chips: ['Other', 'Subject'],
				quote: '...',
			},
			children: [
				{
					type: 'default',
					path: 'vega-collab',
					title: 'VEGA Collab',
					emoji: '🇿🇦',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: ['Other', 'Group', 'Project'],
						quote: '...',
					},
				},
				{
					type: 'default',
					path: 'group-contribution',
					title: 'Group Contribution',
					emoji: '👥',
					includeInRoutes: true,
					includeInNavigation: true,
					pageInfo: {
						includeEmojiInTitle: true,
						chips: ['Other', 'Additive Industries', 'Project'],
						quote: '...',
					},
				},
			],
		},
		{
			type: 'not-found',
			path: '**',
			title: 'Not found',
			redirects: ['404', 'not-found', 'niet-gevonden'],
			includeInRoutes: true,
			includeInNavigation: false,
		},
	],
};

export default config;
