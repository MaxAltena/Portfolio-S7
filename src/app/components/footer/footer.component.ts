import { Component, Input } from '@angular/core';
import { Page } from 'src/types';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	@Input() parent: Page;
}
