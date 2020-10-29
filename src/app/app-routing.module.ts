import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import config from 'src/config';
import { getRoutes } from 'src/utils/routes';

const routes: Routes = getRoutes(config.items);


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
