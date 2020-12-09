import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasePage, Chip, SearchItemType } from 'src/types';
import config from 'src/config';

@Component({
	selector: 'app-page-search',
	templateUrl: './search.page.html',
	styleUrls: ['./search.page.scss'],
})
export class PageSearchComponent implements OnInit {
	term: string | null;
	type: SearchItemType | null;
	results: BasePage[] = [];

	constructor(private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			const urlTerm = params['term'];
			const urlType = params['type'];

			if (!urlType && !urlTerm) {
				this.router.navigate(['/']);
			} else {
				if (urlType && (urlType === 'page' || urlType === 'chip')) {
					this.type = urlType as SearchItemType;
				} else {
					this.type = null;
					this.router.navigate(['/search'], {
						queryParams: { term: urlTerm },
					});
				}

				if (urlTerm) {
					this.term = urlTerm;
				} else {
					this.term = null;
					this.router.navigate(['/search'], {
						queryParams: { type: urlType },
					});
				}

				if (this.term && !this.type) {
					(document.querySelector(
						'#searchInput'
					) as HTMLInputElement).value = this.term;
				} else if (!this.term && this.type) {
					(document.querySelector(
						'#searchInput'
					) as HTMLInputElement).value = `${this.type}:`;
				} else {
					(document.querySelector(
						'#searchInput'
					) as HTMLInputElement).value = `${this.type}:${this.term}`;
				}

				this.results = this._getResults();
			}
		});
	}

	_getResults() {
		if (this.type === 'chip') {
			const result = [];
			const chip: Chip = this.term as Chip;

			config.pages.forEach(page => {
				if (page?.info?.chips?.find(value => value === chip)) {
					result.push({ ...page, fullPath: `/${page.path}` });
				}

				page?.children?.forEach(child => {
					if (child?.info?.chips?.find(value => value === chip)) {
						result.push({
							...child,
							fullPath: `/${page.path}/${child.path}`,
						});
					}
				});
			});

			return result;
		} else {
			const result = [];
			const value = this.term;

			config.pages.forEach(page => {
				if (page?.title?.includes(value)) {
					result.push({ ...page, fullPath: `/${page.path}` });
				} else if (page?.navigationTitle?.includes(value)) {
					result.push({ ...page, fullPath: `/${page.path}` });
				}

				page?.children?.forEach(child => {
					if (child?.title?.includes(value)) {
						result.push({
							...child,
							fullPath: `/${page.path}/${child.path}`,
						});
					} else if (child?.navigationTitle?.includes(value)) {
						result.push({
							...child,
							fullPath: `/${page.path}/${child.path}`,
						});
					}
				});
			});

			return result;
		}
	}
}
