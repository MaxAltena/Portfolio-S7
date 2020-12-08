import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './not-found.page.html',
	styleUrls: ['./not-found.page.scss'],
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
	countDown: Subscription;
	counter = 6;

	constructor(private router: Router) {}

	ngOnInit() {
		this.countDown = timer(0, 1000).subscribe(() => {
			if (this.counter === 1) {
				setTimeout(() => {
					this.router.navigate(['/']);
				}, 500);
				return --this.counter;
			} else {
				return --this.counter;
			}
		});
	}
	ngOnDestroy() {
		this.countDown = null;
	}
}
