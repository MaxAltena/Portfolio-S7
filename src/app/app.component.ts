import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import config from 'src/config';
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
	init = true;
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

	constructor(router: Router) {
		// this.router = router;
		router.events.subscribe(() => {
			const paths = router.url.split('/');
			paths.shift();

			if (paths[0] !== this.currentExpand) {
				setTimeout(() => {
					this.setCurrentExpand(paths[0]);
				}, 10);
			}

			const hashs = router.url.split('#');
			if (hashs.length === 2 && this.init) {
				setTimeout(() => {
					const element = document.querySelector(`#${hashs[1]}`);
					if (element) {
						this.init = false;
						element.scrollIntoView({ behavior: 'smooth' });
					}
				}, 500);
			}
		});
	}
}
