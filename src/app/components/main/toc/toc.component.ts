import { Component, Input } from '@angular/core';
import { Section } from 'src/types';

@Component({
	selector: 'app-main-toc',
	templateUrl: './toc.component.html',
	styleUrls: ['./toc.component.scss'],
})
export class MainTocComponent {
	@Input() sections: Section[];
}
