import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Portfolio S7 – Max Altena';
	opened = true;
	appropriateClass = '';

	@HostListener('window:resize', ['$event'])
	getScreenHeight(): void {
		//console.log(window.innerHeight);
		if (window.innerHeight <= 412) {
			this.appropriateClass = 'bottomRelative';
		} else {
			this.appropriateClass = 'bottomStick';
		}
	}
	constructor() {
		this.getScreenHeight();
	}
}
