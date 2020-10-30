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
						chips: [
							'Human Centered Design',
							'Personal',
							'Assignment',
						],
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
