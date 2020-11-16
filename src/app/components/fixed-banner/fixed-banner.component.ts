import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-fixed-banner',
	templateUrl: './fixed-banner.component.html',
	styleUrls: ['./fixed-banner.component.scss'],
})
export class FixedBannerComponent {
	@Input() isSmallDevice: boolean;
	@Input() isNavOpened: boolean;
}
