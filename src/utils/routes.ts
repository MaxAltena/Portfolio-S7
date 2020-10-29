import { Routes } from '@angular/router';
import { BaseItem, Item } from 'src/types/item';

export const getRoutes = (items: Item[]): Routes => {
	const routes: Routes = [];

	items.forEach((item: Item) => {
		if (item.includeInRoutes && item.component) {
			routes.push({ path: item.path, component: item.component });
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
				if (child.includeInRoutes && child.component) {
					routes.push({
						path: child.path,
						component: child.component,
					});
					routes.push({
						path: `${item.path}/${child.path}`,
						component: child.component,
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
