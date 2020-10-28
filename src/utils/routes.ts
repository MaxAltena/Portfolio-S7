import { Routes } from '@angular/router';
import { Item } from 'src/types/item';

export const getRoutes = (_items: Item[]): Routes => {
	let _routes: Routes = [];

	_items.forEach((_item: Item) => {
		_routes.push({ path: _item.path, component: _item.component });

		if (_item.redirects)
			_item.redirects.forEach((_redirect: string) => {
				_routes.push({ path: _redirect, redirectTo: _item.path });
			});

		if (_item.pages)
			_item.pages.forEach((_page: Item) => {
				_routes.push({ path: `${_item.path}/${_page.path}`, component: _page.component });

				if (_page.redirects)
					_page.redirects.forEach((_redirect: string) => {
						_routes.push({ path: `${_item.path}/${_redirect}`, redirectTo: `${_item.path}/${_page.path}` });
						_routes.push({ path: _redirect, redirectTo: `${_item.path}/${_page.path}` });
					});
			});
	});

	return _routes;
};
