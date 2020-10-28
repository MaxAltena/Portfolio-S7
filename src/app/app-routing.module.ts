import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { items } from 'src/config';
import { getRoutes } from 'src/utils/routes';
import { PageNotFoundComponent } from './pages';

const routes: Routes = [
	...getRoutes(items),
	{ path: '', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
	{
		path: '**',
		component: PageNotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
