import { Type } from '@angular/core';

interface Item extends BaseItem {
	children: BaseItem[];
}

interface BaseItem {
	id: number;
	path: string;
	component?: Type<any>;
	includeInRoutes: boolean;
	includeInNavigation: boolean;
	title: string;
	icon?: string;
	emoji?: string;
	redirects?: string[];
}
