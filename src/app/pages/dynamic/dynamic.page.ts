import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import config from 'src/config';
import { BasePage, Page } from 'src/types';

@Component({
	selector: 'app-page-dynamic',
	templateUrl: './dynamic.page.html',
	styleUrls: ['./dynamic.page.scss'],
})
export class PageDynamicComponent {
	page: Page | BasePage;
	paths: string[];
	parent: Page;
	router: Router;
	sanitizer: DomSanitizer;

	getIframeURL = (): SafeUrl => {
		let { iframeLocation } = this.page.info;

		if (!iframeLocation) {
			iframeLocation = config.defaultURL;
		}

		return this.sanitizer.bypassSecurityTrustResourceUrl(iframeLocation);
	};

	getIframeTitle = (): string => {
		return this.page.title.toLowerCase();
	};

	getPageLink = (subpage: Page): string => {
		if (subpage.emoji) {
			return `${subpage.emoji} ${subpage.title}`;
		} else {
			return subpage.title;
		}
	};

	constructor(router: Router, sanitizer: DomSanitizer) {
		this.router = router;
		this.sanitizer = sanitizer;

		this.router.events.subscribe(() => {
			const paths = this.router.url.split('/');
			paths.shift();
			paths.forEach((path: string, index: number): void => {
				paths[index] = path.split('#')[0];
			});
			this.paths = paths;

			const first = config.pages.find(
				(page: Page) => page.path === paths[0]
			);

			if (paths.length > 1) {
				this.parent = first;
			}

			if (first) {
				if (first.children) {
					const second = first.children.find(
						(page: Page) => page.path === paths[1]
					);

					if (second) {
						if (this.page !== second) {
							this.page = second;
						}
					} else {
						if (this.page !== first) {
							this.page = first;
						}
					}
				} else {
					if (this.page !== first) {
						this.page = first;
					}
				}
			}
		});
	}
}
