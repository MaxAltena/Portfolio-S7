import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import config from 'src/config';
import { getRoutes } from 'src/utils/routes';

const routes: Routes = getRoutes(config.pages);

const routerOptions: ExtraOptions = {
	useHash: false,
	anchorScrolling: 'enabled',
	scrollPositionRestoration: 'enabled',
	onSameUrlNavigation: 'reload',
	scrollOffset: [0, 88],
};

@NgModule({
	imports: [RouterModule.forRoot(routes, routerOptions)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
