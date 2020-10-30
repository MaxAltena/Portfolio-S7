import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProtaganistComponent } from './protaganist.page';

describe('PageProtaganistComponent', () => {
	let component: PageProtaganistComponent;
	let fixture: ComponentFixture<PageProtaganistComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageProtaganistComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageProtaganistComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
