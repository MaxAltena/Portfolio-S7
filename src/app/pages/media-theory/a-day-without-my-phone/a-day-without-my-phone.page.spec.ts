import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageADayWithoutMyPhoneComponent } from './a-day-without-my-phone.page';

describe('PageADayWithoutMyPhoneComponent', () => {
	let component: PageADayWithoutMyPhoneComponent;
	let fixture: ComponentFixture<PageADayWithoutMyPhoneComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PageADayWithoutMyPhoneComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PageADayWithoutMyPhoneComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
