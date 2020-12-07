import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Title } from '@angular/platform-browser';
import {
	ActivatedRoute,
	NavigationEnd,
	Router,
	RouterOutlet,
} from '@angular/router';
import config from 'src/config';
import { BasePage, SearchItem } from 'src/types';
import { getGitVariables } from 'src/utils/git-config';
import { fadeAnimation } from 'src/utils/route-animations';
import { formatTimeAgo } from 'src/utils/time-formatter';

declare let gtag: (arg1: any, arg2: any, arg3?: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any

@Component({
	selector: 'app-portfolio-s7',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [fadeAnimation],
})
export class AppComponent implements OnInit {
	init = true;
	opened = true;
	git = getGitVariables();
	config = config;
	timeAgo = formatTimeAgo(new Date(Number(this.git.gitTimestamp) * 1000));
	currentExpand: string | null = null;
	favIcon: HTMLLinkElement = document.querySelector('#appIcon');
	isSmallDevice = false;
	control = new FormControl();
	searchInput: HTMLInputElement = document.querySelector('#searchInput');
	searchItems: SearchItem[] = this.getSearchItems();
	searchItemsFiltered: SearchItem[];
	searchAutocompleteIsOpen = false;
	searchMobileOpen = false;
	@ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger;

	prepareRoute(outlet: RouterOutlet): ActivatedRoute | '' {
		return outlet.isActivated ? outlet.activatedRoute : '';
	}

	setCurrentExpand(current: string | null): void {
		this.currentExpand = current;
	}

	getEmojiIconText(emoji: string): string {
		return `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: { target: { innerWidth: number } }): void {
		this.isSmallDevice = event.target.innerWidth < 1000;
	}

	@HostListener('document:keydown', ['$event'])
	onKeyDown(event: KeyboardEvent): void {
		if (event.altKey && event.key === 'k') {
			if (!this.searchInput) {
				this.searchInput = document.querySelector('#searchInput');
			}

			if (this.searchInput) {
				this.searchInput.focus();
				this.searchInput.select();
			}
		}
	}

	@HostListener('submitSearch', ['$event'])
	submitSearch(event) {
		if (!this.searchInput) {
			this.searchInput = document.querySelector('#searchInput');
		}

		this.searchInput.blur();
		this.autocomplete.closePanel();

		if (event.detail.chip) {
			this.router.navigate(['/search'], {
				queryParams: { type: 'chip', term: event.detail.chip },
			});
		}
	}

	@HostListener('document:click', ['$event'])
	clickOutside(event: MouseEvent) {
		if (this.searchMobileOpen) {
			if (event.y > 64) {
				this.searchMobileOpen = false;
			}
		}
	}

	onSearchSubmit(event?): void {
		if (!this.searchInput) {
			this.searchInput = document.querySelector('#searchInput');
		}

		this.searchInput.blur();
		this.autocomplete.closePanel();

		if (this.searchMobileOpen) {
			this.opened = false;
			this.searchMobileOpen = false;
		}

		if (event && event.option && event.option.value) {
			const value = event.option.value;
			const searchItem = this.searchItems.find(
				_searchItem => _searchItem.value === value
			);

			if (searchItem.type === 'chip') {
				this.router.navigate(['/search'], {
					queryParams: {
						type: 'chip',
						term: searchItem.text,
					},
				});
			} else if (searchItem.type === 'page') {
				const { page } = searchItem;

				if (page) {
					this.router.navigate([`/${page.path}`]);
				}
			} else {
				this.router.navigate(['/search'], {
					queryParams: { term: value },
				});
			}
		} else {
			this.router.navigate(['/search'], {
				queryParams: { term: this.searchInput.value },
			});
		}
	}

	getSearchItems(): SearchItem[] {
		const config = this.config;
		const result = new Set<SearchItem>();

		config.pages.forEach(page => {
			if (page.type !== 'not-found') {
				if (page.navigationTitle) {
					result.add({
						value: `page:${page.navigationTitle}`,
						text: page.navigationTitle,
						type: 'page',
						page,
					});
				} else {
					result.add({
						value: `page:${page.title}`,
						text: page.title,
						type: 'page',
						page,
					});
				}

				if (page.info.chips) {
					page.info.chips.forEach(chip =>
						result.add({
							value: `chip:${chip}`,
							text: chip,
							type: 'chip',
						})
					);
				}

				if (page.children) {
					page.children.forEach(child => {
						if (child.navigationTitle) {
							result.add({
								value: `page:${child.navigationTitle}`,
								text: child.navigationTitle,
								type: 'page',
								page: child,
							});
						} else {
							result.add({
								value: `page:${child.title}`,
								text: child.title,
								type: 'page',
								page: child,
							});
						}
						if (child.info.chips) {
							child.info.chips.forEach(chip =>
								result.add({
									value: `chip:${chip}`,
									text: chip,
									type: 'chip',
								})
							);
						}
					});
				}
			}
		});

		return [
			...new Map(
				[...result].map(searchItem => [
					`${searchItem.type}:${searchItem.text}`,
					searchItem,
				])
			).values(),
		];
	}

	constructor(private router: Router, private titleService: Title) {}

	ngOnInit(): void {
		this.control.valueChanges.subscribe(value => {
			if (!value.value) {
				const normalizedValue = value.toLowerCase().replace(/\s/g, '');

				this.searchItemsFiltered = this.searchItems
					.filter(searchItem => {
						const itemValue = searchItem.value
							.toLowerCase()
							.replace(/\s/g, '');

						return itemValue.includes(normalizedValue);
					})
					.sort((itemA, itemB) => {
						if (itemA.type === 'chip' && itemB.type !== 'chip') {
							return 1;
						} else if (
							itemA.type === 'chip' &&
							itemB.type === 'chip'
						) {
							if (itemA.text >= itemB.text) {
								return 1;
							} else {
								return -1;
							}
						} else {
							if (
								itemA.type === 'page' &&
								itemB.type === 'page'
							) {
								if (itemA.text >= itemB.text) {
									return 1;
								} else {
									return -1;
								}
							} else {
								return -1;
							}
						}
					});
			}
		});

		if (this.init) {
			this.isSmallDevice = window.innerWidth < 1000;
		}

		this.router.events.subscribe(event => {
			const paths = this.router.url.split('/');
			paths.shift();

			if (event instanceof NavigationEnd) {
				try {
					gtag('set', 'page', event.urlAfterRedirects);
					gtag('send', 'pageview');
				} catch (error) {
					console.error(error);
				}
				const item = config.pages.find(
					configPage => configPage.path === paths[0]
				);
				let subitem: BasePage;
				if (paths[1]) {
					subitem = item.children.find(
						configSubPage => configSubPage.path === paths[1]
					);
				}

				if (item) {
					let title: string;
					if (
						item.title ===
						config.pages.find(configPage => configPage.path === '')
							.title
					) {
						title = config.title;
					} else {
						title = config.titleTemplate.replace(
							'%title%',
							config.title
						);
						title = title.replace(
							'%pageTitle%',
							subitem
								? `${subitem.title} – ${item.title}`
								: item.title
						);
					}
					this.titleService.setTitle(title);

					if (subitem && subitem.emoji) {
						this.favIcon.href = this.getEmojiIconText(
							subitem.emoji
						);
					} else if (item && item.emoji) {
						this.favIcon.href = this.getEmojiIconText(item.emoji);
					} else {
						this.favIcon.href = this.getEmojiIconText('7️⃣');
					}
				}
			}

			if (paths[0] !== this.currentExpand) {
				setTimeout(() => {
					this.setCurrentExpand(paths[0]);
				}, 10);
			}

			const hashs = this.router.url.split('#');
			if (hashs.length === 2 && this.init) {
				setTimeout(() => {
					try {
						const element = document.querySelector(`#${hashs[1]}`);
						if (element) {
							this.init = false;
							element.scrollIntoView({ behavior: 'smooth' });
						}
					} catch (error) {
						console.error(error);
					}
				}, 500);
			}
		});
	}
}
