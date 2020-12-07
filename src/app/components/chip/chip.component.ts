import { Component, Input } from '@angular/core';
import { Chip } from 'src/types';

@Component({
	selector: 'app-chip',
	templateUrl: './chip.component.html',
	styleUrls: ['./chip.component.scss'],
})
export class ChipComponent {
	@Input() chip: Chip;
	@Input() navigate = true;
	@Input() selectable = true;

	navigateChip(): void {
		if (this.navigate) {
			const searchInput: HTMLInputElement = document.querySelector(
				'#searchInput'
			);
			searchInput.value = `chip:${this.chip}`;
			searchInput.focus();
			searchInput.select();
			searchInput.dispatchEvent(
				new CustomEvent('submitSearch', {
					bubbles: true,
					detail: {
						chip: this.chip,
					},
				})
			);
		}
	}
}
