import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVegaCollabComponent } from './vega-collab.page';

describe('PageVegaCollabComponent', () => {
	let component: PageVegaCollabComponent;
	let fixture: ComponentFixture<PageVegaCollabComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageVegaCollabComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageVegaCollabComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
