import { Component, Input } from '@angular/core';
import { Page } from 'src/types';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	@Input() parent: Page;
}
