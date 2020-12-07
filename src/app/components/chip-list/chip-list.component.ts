import { Component, Input } from '@angular/core';
import { Chip } from 'src/types';

@Component({
	selector: 'app-chip-list',
	templateUrl: './chip-list.component.html',
	styleUrls: ['./chip-list.component.scss'],
})
export class ChipListComponent {
	@Input() chips: Chip[];
}
