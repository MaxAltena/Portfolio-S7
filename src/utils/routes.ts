import { Routes } from '@angular/router';
import {
	PageDynamicComponent,
	PageNotFoundComponent,
	PagesType,
} from 'src/app/pages';
import { BasePage, Page } from 'src/types';

const getComponent = (component: string): PagesType => {
	switch (component) {
		case 'not-found':
			return PageNotFoundComponent;
		case 'default':
		case 'iframe':
		default:
			return PageDynamicComponent;
	}
};

export const getRoutes = (pages: Page[]): Routes => {
	const routes: Routes = [];

	pages.forEach((page: Page) => {
		if (page.type) {
			routes.push({
				path: page.path,
				component: getComponent(page.type),
			});
		}

		if (page.redirects) {
			page.redirects.forEach((redirect: string) => {
				routes.push({
					path: redirect,
					redirectTo: page.path,
				});
			});
		}

		if (page.children) {
			page.children.forEach((childPage: BasePage) => {
				if (childPage.type) {
					routes.push({
						path: `${page.path}/${childPage.path}`,
						component: getComponent(childPage.type),
					});
					routes.push({
						path: childPage.path,
						redirectTo: `${page.path}/${childPage.path}`,
					});
				}

				if (childPage.redirects) {
					childPage.redirects.forEach((redirect: string) => {
						routes.push({
							path: redirect,
							redirectTo: `${page.path}/${childPage.path}`,
						});
						routes.push({
							path: `${page.path}/${redirect}`,
							redirectTo: `${page.path}/${childPage.path}`,
						});
					});
				}
			});
		}
	});

	return routes;
};
