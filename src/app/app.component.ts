import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import config from 'src/config';
import { Item } from 'src/types/item';
import { getGitVariables } from 'src/utils/git-config';
import { fadeAnimation } from 'src/utils/route-animations';
import { formatTimeAgo } from 'src/utils/time-formatter';

@Component({
	selector: 'app-portfolio-s7',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [fadeAnimation],
})
export class AppComponent {
	title = config.title;
	opened = true;
	git = getGitVariables();
	items = config.items;
	timeAgo = formatTimeAgo(new Date(Number(this.git.gitTimestamp) * 1000));
	currentExpand = '';

	prepareRoute(outlet: RouterOutlet): ActivatedRoute | '' {
		return outlet.isActivated ? outlet.activatedRoute : '';
	}

	setCurrentExpand(current: string): void {
		this.currentExpand = current;
	}

	identifyer = (index: number, item: Item): string => `${index}-${item.id}`;

	// TODO Currently doesnt work as expected https://github.com/angular/components/issues/20517
	// constructor(router: Router) {
	// 	router.events.subscribe(() => {
	// 		const paths = router.url.split('/');
	// 		if (paths[1] !== this.currentExpand) {
	// 			this.setCurrentExpand(paths[1]);
	// 		}
	// 	});
	// }
}
