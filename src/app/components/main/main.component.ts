import { Component, Input } from '@angular/core';
import { BasePage, Page } from 'src/types';

export * from './toc/toc.component';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent {
	@Input() page: Page | BasePage;
	@Input() paths: string[];
	@Input() parent: Page;
}
