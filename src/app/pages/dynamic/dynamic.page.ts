import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import config from 'src/config';
import { BaseItem, Item } from 'src/types';

@Component({
	selector: 'app-page-dynamic',
	templateUrl: './dynamic.page.html',
	styleUrls: ['./dynamic.page.scss'],
})
export class PageDynamicComponent {
	item: Item | BaseItem;
	paths: string[];
	parent: Item;
	router: Router;
	sanitizer: DomSanitizer;

	getIframeURL = (): SafeUrl => {
		let { iframeLocation } = this.item.pageInfo;

		if (!iframeLocation) {
			iframeLocation = config.defaultURL;
		}

		return this.sanitizer.bypassSecurityTrustResourceUrl(iframeLocation);
	};

	getHeading = (): string => {
		if (this.item.pageInfo) {
			if (this.item.pageInfo.title) {
				if (this.item.pageInfo.includeEmojiInTitle) {
					return `${this.item.emoji} ${this.item.pageInfo.title}`;
				} else {
					return this.item.pageInfo.title;
				}
			} else {
				if (this.item.pageInfo.includeEmojiInTitle) {
					return `${this.item.emoji} ${this.item.title}`;
				} else {
					return this.item.title;
				}
			}
		} else {
			return this.item.title;
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

			const first = config.items.find(
				(item: Item) => item.path === paths[0]
			);

			if (paths.length > 1) {
				this.parent = first;
			}

			if (first) {
				if (first.children) {
					const second = first.children.find(
						(item: Item) => item.path === paths[1]
					);

					if (second) {
						if (this.item !== second) {
							this.item = second;
						}
					} else {
						if (this.item !== first) {
							this.item = first;
						}
					}
				} else {
					if (this.item !== first) {
						this.item = first;
					}
				}
			}
		});
	}
}
