export interface Config {
	title: string;
	titleTemplate: string;
	defaultURL: string;
	githubURL: string;
	items: Item[];
}

export interface Item extends BaseItem {
	children?: BaseItem[];
}

export interface BaseItem {
	path: string;
	type: 'default' | 'iframe' | 'not-found';
	iframeLocation?: string;
	includeInRoutes: boolean;
	includeInNavigation: boolean;
	title: string;
	icon?: string;
	emoji?: string;
	redirects?: string[];
	pageInfo?: PageInfo;
}

export interface PageInfo {
	title?: string;
	includeEmojiInTitle?: boolean;
	iframeLocation?: string;
	chips?: Chip[];
	quote?: string;
	content?: unknown; // TODO: Add this for more dynamic from json loading capabilities?
}

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
