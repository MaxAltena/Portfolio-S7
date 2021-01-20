import { Config } from 'src/types';

const config: Config = {
	title: 'Portfolio S7 – Max Altena',
	titleTemplate: '%pageTitle% – %title%',
	defaultURL: 'https://portfolio-s7.maxaltena.com/',
	defaultIframeURL: 'https://maxaltena.com/',
	githubURL: 'https://github.com/MaxAltena/',
	githubRepoURL: 'https://github.com/MaxAltena/Portfolio-S7/',
	pages: [
		{
			type: 'default',
			path: '',
			navigationTitle: 'Home',
			title: '🤖 Portfolio S7 – Max Altena',
			emoji: '🏠',
			redirects: ['home', 'thuis'],
			info: {
				excludeEmoji: true,
			},
		},
		{
			type: 'iframe',
			path: 'about',
			navigationTitle: 'About',
			title: 'About Max Altena',
			emoji: '🤖',
			redirects: ['me', 'ik', 'over'],
			info: {
				iframeLocation: 'https://maxaltena.com/',
			},
		},
		{
			type: 'subject',
			path: 'human-centered-design',
			title: 'Human Centered Design',
			redirects: ['hcd'],
			info: {
				quote:
					"Sounds a bit egocentric doesn't it? But it is for the better of the user and in the end the human itself... Atleast, that's what they say.",
				about:
					'In the subject HCD there will be learned how to apply the IDEO Human Centered Design (HCD) process to iteratively develop products or services for the Digital Society. The HCD process consists of 3 phases: Inspiration, Ideation and Implementation. During the first iteration of the project it will become familiar with how to apply these steps. Subsequentl the three steps in each of the following three iterations are repeated. Furthermore, workshops focusing on specific methods of prototyping and user testing will be offered in iteration 2-4.',
				reflection:
					"Within the project and during the course of the minor, I learned more about defining more useful research questions as shown within the research documents I've created. With the research I've done, I've used methods which I have independently selected resulting in valuable insights for the project. Furthermore, during the semeseter, I improved and solidified my skills in regards to performing research. These include but are not limited to the creating of a plan, executing the plan and documenting results and the conclusions of the research itself. In addition, the coaching from Evelien helped me better the products and gave me unforeseen insights on products or documents created, even though this was mostly and sadly online.",
				chips: ['Human Centered Design', 'Subject'],
			},
			children: [
				{
					type: 'default',
					path: 'design-probes',
					title: 'Design Probes',
					emoji: '⚗️',
					info: {
						quote:
							"Creating probes to probe our own behaviour. Something I haven't done as of yet.",
						chips: ['Human Centered Design', 'Duo', 'Assignment'],
						sections: [
							'Assignment',
							'Approach',
							'Execution',
							'Conclusion',
							'Reflection',
							'Learning outcomes',
							'Responsibility',
						],
					},
				},
				{
					type: 'default',
					path: 'print-house-interview',
					title: '2D print house interview',
					emoji: '🏭',
					info: {
						quote:
							'Getting insights from my dad who works at one of the largest 2D printing houses in the benelux. He should have some insights on their process, right?',
						chips: [
							'Human Centered Design',
							'Additive Industries',
							'Personal',
							'Research',
						],
						sections: [
							'Motivation',
							'Approach',
							'Execution',
							'Conclusion',
							'Feedback',
							'Reflection',
							'Learning outcomes',
							'Responsibility',
						],
					},
				},
				{
					type: 'default',
					path: 'stakeholder-profiles',
					title: 'Stakeholder Profiles',
					emoji: '🧝‍♂️',
					info: {
						quote:
							"Tell them and they'll forget, show them and they may remember, involve them and they'll understand.",
						chips: [
							'Human Centered Design',
							'Additive Industries',
							'Duo',
							'Research',
						],
						sections: [
							'Motivation',
							'Approach',
							'Execution',
							'Feedback',
							'Reflection',
							'Learning outcomes',
							'Responsibility',
						],
					},
				},
			],
		},
		{
			type: 'subject',
			path: 'critical-design',
			title: 'Critical Design',
			redirects: ['cd'],
			info: {
				quote:
					"Let's be critical about what we design. Finding problems, asking questions and make eachother think about design.",
				about:
					'Critical Design uses speculative design proposals to challenge narrow assumptions, preconceptions and givens about the role products play in everyday life. It is more of an attitude than anything else, a position rather than a method. There are many people doing this who have never heard of the term critical design and who have their own way of describing what they do. Naming it Critical Design is simply a useful way of making this activity more visible and subject to discussion and debate. Its opposite is affirmative design: design that reinforces the status quo.',
				reflection:
					'Within the minor, I learned to design critically as well. I always was focused on solving a problem, but during the minor I started to design based on finding a problem.',
				chips: ['Critical Design', 'Subject'],
			},
			children: [
				{
					type: 'default',
					path: 'critical-problems',
					title: 'Critical Problems',
					emoji: '⚠️',
					info: {
						quote:
							"What are things I am bothered with? Let's find out how much I hate and care about things.",
						chips: ['Critical Design', 'Personal', 'Assignment'],
						sections: [
							'Assignment',
							'Execution',
							'Reflection',
							'Learning outcomes',
							'Responsibility',
						],
					},
				},
				{
					type: 'default',
					path: 'personal-manifesto',
					title: 'Personal Manifesto',
					emoji: '💁‍♂️',
					info: {
						quote:
							'Sticking to your values is important. For me atleast. What other values do I live by?',
						chips: ['Critical Design', 'Personal', 'Assignment'],
						sections: [
							'Assignment',
							'Approach',
							'Execution',
							'Reflection',
							'Learning outcomes',
							'Responsibility',
						],
					},
				},
				{
					type: 'default',
					path: 'concepts',
					title: 'Concepts',
					emoji: '💡',
					info: {
						quote:
							'The way to get good ideas is to get lots of ideas and throw the bad ones away. - Linus Pauling',
						chips: ['Critical Design', 'Personal', 'Assignment'],
						sections: [
							'Assignment',
							'Approach',
							'Execution',
							'Conclusion',
							'Reflection',
							'Learning outcomes',
							'Responsibility',
						],
					},
				},
				{
					type: 'default',
					path: 'digital-detox',
					title: 'Digital Detox',
					emoji: '🌌',
					info: {
						quote: 'Put down your phone and pick up your life.',
						chips: [
							'Critical Design',
							'Personal',
							'Assignment',
							'Concept',
						],
						sections: [
							'Assignment',
							'Approach',
							'Execution',
							'Reflection',
							'Learning outcomes',
							'Responsibility',
						],
					},
				},
			],
		},
		{
			type: 'subject',
			path: 'story-creation',
			title: 'Story Creation',
			redirects: ['sc'],
			info: {
				quote:
					"Creating a story isn't done in a day, more like an hour or 2. But creating a compelling and engaging story might take a while.",
				about:
					'Storytelling is one of the most powerful tools in order to create impact and connection. The power of story goes far beyond simply relaying facts and give color and depth to otherwise bland material and they allow people to connect with the message in a deeper, more meaningful way.',
				chips: ['Story Creation', 'Subject'],
			},
			children: [
				{
					type: 'default',
					path: 'pecha-kucha',
					title: 'Pecha Kucha',
					emoji: '⏰',
					info: {
						quote:
							'20 slides, 20 seconds each. What could go wrong?',
						chips: ['Story Creation', 'Personal', 'Assignment'],
						sections: [
							'Assignment',
							'Approach',
							'Execution',
							'Reflection',
							'Responsibility',
						],
					},
				},
				// {
				// 	type: 'default',
				// 	path: 'research-storytelling-emotion',
				// 	title: 'Research Storytelling & Emotion',
				// 	emoji: '📝',
				// 	info: {
				// 		quote: "...",
				// 		chips: [
				// 			'Story Creation',
				// 			'Personal',
				// 			'Research',
				// 			'Assignment',
				// 		],
				// 		sections: [
				// 			'Assignment',
				// 			'Approach',
				// 			'Execution',
				// 			'Conclusion',
				// 			'Reflection',
				// 			'Responsibility',
				// 		],
				// 	},
				// },
				// {
				// 	type: 'default',
				// 	path: 'protaganist',
				// 	title: 'Protaganist',
				// 	emoji: '🚶',
				// 	info: {
				// 		quote: "...",
				// 		chips: ['Story Creation', 'Personal', 'Assignment'],
				// 		sections: [
				// 			'Assignment',
				// 			'Approach',
				// 			'Execution',
				// 			'Conclusion',
				// 			'Reflection',
				// 			'Responsibility',
				// 		],
				// 	},
				// },
				{
					type: 'default',
					path: 'detoxers',
					title: 'Detoxers',
					emoji: '📚',
					info: {
						quote: '...',
						chips: ['Story Creation', 'Personal', 'Assignment'],
						sections: [
							'Assignment',
							'Approach',
							'Execution',
							'Conclusion',
							'Reflection',
							'Responsibility',
						],
					},
				},
			],
		},
		{
			type: 'subject',
			path: 'media-theory',
			title: 'Media Theory',
			redirects: ['mt'],
			info: {
				quote:
					'How do we use media? Why do we use media? What is media? What is life all about? 42.',
				about:
					'During the Media Theory courses the way how media has evolved over time will be explored and how this affects us (as consumers and producers of media), the media themselves, the design of media, and how this all affects our behaviour.',
				chips: ['Media Theory', 'Subject'],
			},
			children: [
				{
					type: 'default',
					path: 'a-day-without-my-phone',
					title: 'A day without my phone',
					emoji: '📴',
					info: {
						quote: 'No phone. Where is Max?',
						chips: ['Media Theory', 'Personal', 'Assignment'],
						sections: [
							'Assignment',
							'Approach',
							'Execution',
							'Conclusion',
							'Reflection',
							'Responsibility',
						],
					},
				},
				{
					type: 'default',
					path: 'social-analysis',
					title: 'Social Analysis',
					emoji: '🗣',
					info: {
						quote: '...',
						chips: ['Media Theory', 'Personal', 'Assignment'],
						sections: [
							'Assignment',
							'Approach',
							'Execution',
							'Conclusion',
							'Reflection',
							'Responsibility',
						],
					},
				},
				{
					type: 'default',
					path: 'my-ai-friend',
					title: 'My AI friend',
					emoji: '🦾',
					info: {
						quote: '...',
						chips: ['Media Theory', 'Personal', 'Assignment'],
						sections: [
							'Assignment',
							'Approach',
							'Execution',
							'Conclusion',
							'Reflection',
							'Responsibility',
						],
					},
				},
				{
					type: 'default',
					path: 'essay',
					title: 'Essay: Triggers',
					emoji: '📝',
					info: {
						quote: '...',
						chips: ['Media Theory', 'Personal', 'Assignment'],
						sections: [
							'Assignment',
							'Approach',
							'Execution',
							'Conclusion',
							'Reflection',
							'Responsibility',
						],
					},
				},
			],
		},
		{
			type: 'subject',
			path: 'other',
			title: 'Other',
			info: {
				quote:
					"Throughout my whole life, I've been pretty funny. Some people are saying: 'You are so funny, you should be a stand-up comedian!' I always respond with: 'I would be a stand-up comedian. But I prefer sitting.' - TimTheTatman",
				about:
					"Well... This section is more for anything that can't be put under one of the major subjects.",
				chips: ['Other', 'Subject'],
			},
			children: [
				{
					type: 'default',
					path: 'vega-collab',
					title: 'VEGA Collab',
					emoji: '🇿🇦',
					info: {
						quote: '...',
						chips: ['Other', 'Group', 'Project'],
					},
				},
				{
					type: 'default',
					path: 'group-contribution',
					title: 'Group Contribution',
					emoji: '👥',
					info: {
						quote: '...',
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
			excludeFromNavigation: true,
		},
	],
};

export default config;
