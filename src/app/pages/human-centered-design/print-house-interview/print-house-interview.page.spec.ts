import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrintHouseInterviewComponent } from './print-house-interview.page';

describe('PagePrintHouseInterviewComponent', () => {
	let component: PagePrintHouseInterviewComponent;
	let fixture: ComponentFixture<PagePrintHouseInterviewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PagePrintHouseInterviewComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PagePrintHouseInterviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
