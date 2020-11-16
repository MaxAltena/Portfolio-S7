import { Component, Input, OnInit } from '@angular/core';
import { BasePage, Chip } from 'src/types';

@Component({
	selector: 'app-top',
	templateUrl: './top.component.html',
	styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
	@Input() page: BasePage;
	heading: string;
	chips: Chip[];
	quote: string;

	ngOnInit(): void {
		this.chips = this.page?.info?.chips;
		this.quote = this.page?.info?.quote;

		if (this.page.info?.excludeEmoji) {
			this.heading = this.page.title;
		} else {
			if (this.page.emoji) {
				this.heading = `${this.page.emoji} ${this.page.title}`;
			} else {
				this.heading = this.page.title;
			}
		}
	}
}
