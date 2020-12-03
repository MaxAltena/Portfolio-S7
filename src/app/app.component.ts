import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import {
	ActivatedRoute,
	NavigationEnd,
	Router,
	RouterOutlet,
} from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import config from 'src/config';
import { BasePage } from 'src/types';
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
	searchItems: string[] = this.getSearchItems();
	filteredSearchItems: Observable<string[]>;

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
		this.isSmallDevice = event.target.innerWidth <= 700;
	}

	@HostListener('document:keydown', ['$event'])
	onKeyDown(event: KeyboardEvent): void {
		if (event.altKey && event.key === 'k') {
			if (!this.searchInput) {
				this.searchInput = document.querySelector('#searchInput');
			}

			if (this.searchInput) {
				this.searchInput.focus();
			}
		}
	}

	onSearchSubmit(event?: MatAutocompleteActivatedEvent): void {
		this.alert("This doesn't work yet...");
	}

	alert(text: string): void {
		this.snackBar.open(text, 'OK', {
			duration: 4000,
		});
	}

	getSearchItems(): string[] {
		const config = this.config;
		const result = new Set<string>();

		config.pages.forEach(page => {
			if (page.type !== 'not-found') {
				if (page.navigationTitle) {
					result.add(page.navigationTitle);
				} else {
					result.add(page.title);
				}

				if (page.info.chips) {
					page.info.chips.forEach(chip => result.add(chip));
				}

				if (page.children) {
					page.children.forEach(child => {
						if (child.navigationTitle) {
							result.add(child.navigationTitle);
						} else {
							result.add(child.title);
						}
						if (child.info.chips) {
							child.info.chips.forEach(chip => result.add(chip));
						}
					});
				}
			}
		});

		return [...result];
	}

	constructor(
		private router: Router,
		private titleService: Title,
		private snackBar: MatSnackBar
	) {}

	ngOnInit(): void {
		this.filteredSearchItems = this.control.valueChanges.pipe(
			startWith(''),
			map(value => this._filter(value))
		);

		if (this.init) {
			this.isSmallDevice = window.innerWidth <= 700;
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
					this.favIcon.href = this.getEmojiIconText(subitem.emoji);
				} else if (item && item.emoji) {
					this.favIcon.href = this.getEmojiIconText(item.emoji);
				} else {
					this.favIcon.href = this.getEmojiIconText('7️⃣');
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

	private _filter(value: string): string[] {
		const filterValue = this._normalizeValue(value);
		return this.searchItems.filter(street =>
			this._normalizeValue(street).includes(filterValue)
		);
	}

	private _normalizeValue(value: string): string {
		return value.toLowerCase().replace(/\s/g, '');
	}
}
