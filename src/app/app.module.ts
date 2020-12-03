import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
	MatMenuModule,
	MatAutocompleteModule,
	MatSnackBarModule,
];

import { AppComponent } from 'src/app/app.component';
import pages from 'src/app/pages';
import components, { FixedBannerComponent } from 'src/app/components';
import { AppRoutingModule } from 'src/app/routing/app-routing.module';
import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [AppComponent, ...pages, ...components, FixedBannerComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		...materialModules,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production,
		}),
	],
	exports: [RouterModule],
	providers: [Title],
	bootstrap: [AppComponent],
})
export class AppModule {}
