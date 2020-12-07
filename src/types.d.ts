export interface Config {
	title: string;
	titleTemplate: string;
	defaultURL: string;
	defaultIframeURL: string;
	githubURL: string;
	githubRepoURL: string;
	pages: Page[];
}

export interface Page extends BasePage {
	children?: BasePage[];
}

export interface BasePage {
	path: string;
	type: PageType;
	iframeLocation?: string;
	excludeFromNavigation?: true;
	navigationTitle?: string;
	title: string;
	icon?: string;
	emoji?: string;
	redirects?: string[];
	info?: PageInfo;
}

export interface PageInfo {
	about?: string;
	excludeEmoji?: true;
	iframeLocation?: string;
	chips?: Chip[];
	quote?: string;
	sections?: Section[];
}

export type PageType = 'default' | 'iframe' | 'subject' | 'not-found';

export type Chip =
	| 'Human Centered Design'
	| 'Critical Design'
	| 'Media Theory'
	| 'Story Creation'
	| 'Other'
	| 'Personal'
	| 'Duo'
	| 'Group'
	| 'Additive Industries'
	| 'Concept'
	| 'Assignment'
	| 'Subject'
	| 'Research'
	| 'Project';

export type Section =
	| 'Assignment'
	| 'Motivation'
	| 'Approach'
	| 'Execution'
	| 'Conclusion'
	| 'Reflection'
	| 'Learning outcomes'
	| 'Responsibility';

export interface SearchItem {
	value: string;
	text: string;
	type: SearchItemType;
	page?: BasePage;
}

export type SearchItemType = 'page' | 'chip';
