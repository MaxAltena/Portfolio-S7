import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

const materialModules = [MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatButtonModule];

import { AppComponent } from 'src/app/app.component';
import { environment } from 'src/environments/environment';
import pages from 'src/app/pages';
import components from 'src/app/components';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
	declarations: [AppComponent, ...pages, ...components],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		...materialModules,
		ScullyLibModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
	],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
