import { Routes } from '@angular/router';
import {
	PageDynamicComponent,
	PageNotFoundComponent,
	PagesType,
} from 'src/app/pages';
import { BaseItem, Item } from 'src/types';

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

export const getRoutes = (items: Item[]): Routes => {
	const routes: Routes = [];

	items.forEach((item: Item) => {
		if (item.includeInRoutes && item.type) {
			routes.push({
				path: item.path,
				component: getComponent(item.type),
			});
		}

		if (item.redirects) {
			item.redirects.forEach((redirect: string) => {
				routes.push({
					path: redirect,
					redirectTo: item.path,
				});
			});
		}

		if (item.children) {
			item.children.forEach((child: BaseItem) => {
				if (child.includeInRoutes && child.type) {
					routes.push({
						path: child.path,
						component: getComponent(child.type),
					});
					routes.push({
						path: `${item.path}/${child.path}`,
						component: getComponent(child.type),
					});
				}

				if (child.redirects) {
					child.redirects.forEach((redirect: string) => {
						routes.push({
							path: redirect,
							redirectTo: child.path,
						});
						routes.push({
							path: `${item.path}/${redirect}`,
							redirectTo: `${item.path}/${child.path}`,
						});
					});
				}
			});
		}

		// if (item.redirects) {
		// 	item.redirects.forEach((redirect: string) => {
		// 		routes.push({ path: redirect, redirectTo: item.path });
		// 	});
		// }

		// if (item.children) {
		// 	item.children.forEach((page: Item) => {
		// 		if (page.includeInRoutes && page.component) {
		// 			routes.push({
		// 				path: `${item.path}/${page.path}`,
		// 				component: page.component,
		// 			});
		// 		}

		// 		if (page.redirects) {
		// 			page.redirects.forEach((redirect: string) => {
		// 				routes.push({
		// 					path: `${item.path}/${redirect}`,
		// 					redirectTo: `${item.path}/${page.path}`,
		// 				});
		// 				routes.push({
		// 					path: redirect,
		// 					redirectTo: `${item.path}/${page.path}`,
		// 				});
		// 			});
		// 		}
		// 	});
		// }
	});

	return routes;
};
