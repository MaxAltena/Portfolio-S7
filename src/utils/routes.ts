import { Routes } from '@angular/router';
import { Item } from 'src/types/item';

export const getRoutes = (items: Item[]): Routes => {
	const routes: Routes = [];

	items.forEach((item: Item) => {
		routes.push({ path: item.path, component: item.component });

		if (item.redirects) {
			item.redirects.forEach((redirect: string) => {
				routes.push({ path: redirect, redirectTo: item.path });
			});
		}

		if (item.pages) {
			item.pages.forEach((page: Item) => {
				routes.push({ path: `${item.path}/${page.path}`, component: page.component });

				if (page.redirects) {
					page.redirects.forEach((redirect: string) => {
						routes.push({ path: `${item.path}/${redirect}`, redirectTo: `${item.path}/${page.path}` });
						routes.push({ path: redirect, redirectTo: `${item.path}/${page.path}` });
					});
				}
			});
		}
	});

	return routes;
};
