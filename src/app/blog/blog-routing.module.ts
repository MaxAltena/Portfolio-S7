import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFound } from 'src/app/pages';

import { BlogComponent } from './blog.component';

const routes: Routes = [
	{
		path: ':slug',
		component: BlogComponent,
	},
	{
		path: 'human-centered-design/:slug',
		component: BlogComponent,
	},
	{
		path: 'critical-design/:slug',
		component: BlogComponent,
	},
	{
		path: 'story-creation/:slug',
		component: BlogComponent,
	},
	{
		path: 'media-theory/:slug',
		component: BlogComponent,
	},
	{
		path: 'other/:slug',
		component: BlogComponent,
	},
	{
		path: '**',
		component: PageNotFound,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BlogRoutingModule {}
