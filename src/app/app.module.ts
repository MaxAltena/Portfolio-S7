import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const materialModules = [
	MatToolbarModule,
	MatSidenavModule,
	MatListModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatExpansionModule,
	MatChipsModule,
	MatDividerModule,
	MatGridListModule,
	MatProgressBarModule,
];

import { AppComponent } from 'src/app/app.component';
import pages from 'src/app/pages';
import components from 'src/app/components';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [AppComponent, ...pages, ...components],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		...materialModules,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
		}),
	],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
